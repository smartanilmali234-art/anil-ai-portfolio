from pathlib import Path

import joblib
import pandas as pd
import streamlit as st


BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "models" / "xgboost_stroke_model.pkl"
PREPROCESSOR_PATH = BASE_DIR / "models" / "preprocessor.pkl"
RISK_THRESHOLD = 35.0

st.set_page_config(page_title="Stroke Risk Monitor", page_icon="+", layout="wide")

st.markdown(
    """
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
    :root { --navy:#17242d; --steel:#344650; --paper:#e9eef0; --line:#c4cfd3; --ink:#17242d; --muted:#61717a; --amber:#f0a629; --red:#d9574e; }
    .stApp { background:var(--paper); color:var(--ink); }
    .block-container { max-width:1420px; padding:1.6rem 2.5rem 3rem; }
    h1,h2,h3 { font-family:'Barlow Condensed',sans-serif !important; letter-spacing:0 !important; color:var(--ink) !important; }
    p, label, .stMarkdown { font-family:'IBM Plex Mono',monospace; }
    [data-testid='stVerticalBlockBorderWrapper'] { background:#f8fafb; border:1px solid var(--line); border-radius:4px; box-shadow:3px 3px 0 rgba(23,36,45,.08); padding:1rem 1.2rem; }
    .console-header { display:flex; align-items:center; justify-content:space-between; gap:1rem; background:var(--navy); color:#f4f6f7; padding:1.15rem 1.5rem; border-bottom:4px solid var(--amber); margin-bottom:1.25rem; }
    .brand { font:700 1.65rem 'Barlow Condensed',sans-serif; letter-spacing:.03em; text-transform:uppercase; }
    .brand small { display:block; color:#aebbc0; font:500 .62rem 'IBM Plex Mono',monospace; letter-spacing:.14em; margin-top:.2rem; }
    .system-state { color:#9ee1cb; font:600 .72rem 'IBM Plex Mono',monospace; letter-spacing:.08em; text-align:right; }
    .system-state b { color:var(--amber); }
    .section-kicker { color:var(--steel); font:600 .7rem 'IBM Plex Mono',monospace; letter-spacing:.13em; text-transform:uppercase; border-bottom:1px solid var(--line); padding-bottom:.55rem; margin-bottom:.75rem; }
    .section-kicker span { color:var(--amber); }
    .readout { background:var(--navy); color:#eef3f4; border-radius:4px; padding:1.45rem 1.5rem; border-left:5px solid var(--amber); }
    .readout.high { border-left-color:var(--red); }
    .readout-label { color:#aebbc0; font:500 .7rem 'IBM Plex Mono',monospace; letter-spacing:.12em; text-transform:uppercase; }
    .readout-score { font:700 5rem 'Barlow Condensed',sans-serif; line-height:.95; margin:.25rem 0 .45rem; color:#fff; }
    .readout-score span { color:var(--amber); font-size:2rem; }
    .readout.high .readout-score span { color:#ff8278; }
    .readout-status { font:600 .88rem 'IBM Plex Mono',monospace; text-transform:uppercase; }
    .readout-copy { color:#b9c5c9; font-size:.72rem; margin:.65rem 0 0; }
    .instrument { background:#f8fafb; border:1px solid #53656d; padding:.65rem .75rem; }
    .instrument-label { color:var(--muted); font:500 .62rem 'IBM Plex Mono',monospace; text-transform:uppercase; }
    .instrument-value { color:var(--ink); font:600 1.2rem 'Barlow Condensed',sans-serif; margin-top:.15rem; }
    .notice { color:var(--muted); border-top:1px solid var(--line); margin-top:1.15rem; padding-top:.8rem; font-size:.68rem; line-height:1.5; }
    .footer { color:var(--muted); font:500 .65rem 'IBM Plex Mono',monospace; text-align:center; margin-top:1.5rem; }
    div[data-testid='stProgress'] > div > div { background-color:var(--amber); }
    div[data-testid='stProgress'] { margin:.9rem 0 1.15rem; }
    </style>
    """,
    unsafe_allow_html=True,
)


@st.cache_resource
def load_artifacts():
    model = joblib.load(MODEL_PATH)
    preprocessor = joblib.load(PREPROCESSOR_PATH)
    return model, preprocessor


model, preprocessor = load_artifacts()

st.markdown(
    """
    <div class="console-header">
        <div class="brand">NeuroPulse <small>stroke risk monitoring console / NR-01</small></div>
        <div class="system-state"><b>●</b> MODEL ONLINE<br><span>INPUT STREAM READY</span></div>
    </div>
    """,
    unsafe_allow_html=True,
)

input_col, output_col = st.columns([1.35, 0.85], gap="large")

with input_col:
    with st.container(border=True):
        st.markdown('<div class="section-kicker"><span>01</span> / patient biometrics</div>', unsafe_allow_html=True)
        age = st.slider("Age / years", 1, 100, 58)
        metric_col1, metric_col2 = st.columns(2)
        with metric_col1:
            hypertension = st.selectbox("Hypertension", [0, 1], format_func=lambda value: "PRESENT" if value else "NOT PRESENT")
        with metric_col2:
            heart_disease = st.selectbox("Heart disease", [0, 1], format_func=lambda value: "PRESENT" if value else "NOT PRESENT")
        value_col1, value_col2 = st.columns(2)
        with value_col1:
            avg_glucose = st.number_input("Avg glucose / mg/dL", 50.0, 300.0, 115.0, step=0.1)
        with value_col2:
            bmi = st.number_input("BMI / kg/m2", 10.0, 60.0, 28.4, step=0.1)

    with st.container(border=True):
        st.markdown('<div class="section-kicker"><span>02</span> / demographic and exposure data</div>', unsafe_allow_html=True)
        demographic_col1, demographic_col2 = st.columns(2)
        with demographic_col1:
            gender = st.selectbox("Gender", ["Male", "Female", "Other"])
            ever_married = st.selectbox("Marital history", ["Yes", "No"])
            residence = st.selectbox("Residence type", ["Urban", "Rural"])
        with demographic_col2:
            work_type = st.selectbox("Work sector", ["Private", "Self-employed", "Govt_job", "children", "Never_worked"])
            smoking = st.selectbox("Smoking history", ["formerly smoked", "never smoked", "smokes", "Unknown"])

input_data = pd.DataFrame([[
    gender, age, hypertension, heart_disease, ever_married,
    work_type, residence, avg_glucose, bmi, smoking,
]], columns=[
    "gender", "age", "hypertension", "heart_disease", "ever_married",
    "work_type", "Residence_type", "avg_glucose_level", "bmi", "smoking_status",
])
processed_input = preprocessor.transform(input_data)
risk_score = float(model.predict_proba(processed_input)[0][1] * 100)
is_high_risk = risk_score >= RISK_THRESHOLD

with output_col:
    with st.container(border=True):
        st.markdown('<div class="section-kicker"><span>03</span> / live inference output</div>', unsafe_allow_html=True)
        result_class = "high" if is_high_risk else ""
        status = "REVIEW REQUIRED" if is_high_risk else "WITHIN BASELINE"
        copy = "Estimated probability exceeds the configured review threshold." if is_high_risk else "Estimated probability is below the configured review threshold."
        st.markdown(
            f'<div class="readout {result_class}"><div class="readout-label">stroke probability / live</div>'
            f'<div class="readout-score">{risk_score:.1f}<span>%</span></div>'
            f'<div class="readout-status">{status}</div><p class="readout-copy">{copy}</p></div>',
            unsafe_allow_html=True,
        )
        st.progress(min(risk_score / 100, 1.0), text="PROBABILITY SCALE / 0 - 100")
        instrument_col1, instrument_col2 = st.columns(2)
        with instrument_col1:
            st.markdown(f'<div class="instrument"><div class="instrument-label">Review limit</div><div class="instrument-value">{RISK_THRESHOLD:.1f}%</div></div>', unsafe_allow_html=True)
        with instrument_col2:
            st.markdown('<div class="instrument"><div class="instrument-label">Model response</div><div class="instrument-value">LIVE</div></div>', unsafe_allow_html=True)
        st.markdown('<div class="section-kicker" style="margin-top:1.3rem"><span>04</span> / input snapshot</div>', unsafe_allow_html=True)
        st.write(f"AGE  {age} YR     BMI  {bmi:.1f}")
        st.write(f"GLUCOSE  {avg_glucose:.1f} MG/DL")
        st.write(f"HTN  {'PRESENT' if hypertension else 'CLEAR'}     HEART  {'PRESENT' if heart_disease else 'CLEAR'}")
        st.markdown('<div class="notice">Decision-support estimate only. This output is not a diagnosis and must be interpreted by a qualified healthcare professional.</div>', unsafe_allow_html=True)

st.markdown('<div class="footer">NEUROPULSE SYSTEMS  /  MODEL XGB-2.0  /  INFERENCE STATUS: NOMINAL</div>', unsafe_allow_html=True)

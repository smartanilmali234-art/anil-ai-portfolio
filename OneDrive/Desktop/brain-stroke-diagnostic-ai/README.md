# Brain Stroke Diagnostic AI

An educational clinical decision-support prototype that estimates stroke risk from demographic, medical, and lifestyle indicators. The project uses a scikit-learn preprocessing pipeline, SMOTE for class balancing, and XGBoost for classification. A Streamlit interface provides live risk estimates as patient inputs change.

## Features

- Live Streamlit stroke-risk assessment interface
- Numeric imputation and standardization
- Categorical imputation and one-hot encoding
- Stratified train/test split
- SMOTE oversampling for the minority class
- XGBoost classification model
- Model and preprocessor export with Joblib
- EDA, evaluation, and SHAP analysis notebooks

## Project Structure

```text
app/                  Streamlit application
data/raw/             Source CSV dataset
data/processed/       Processed datasets
models/               Saved model artifacts
notebooks/            EDA and modeling notebooks
src/                  Data loading, preprocessing, and training code
requirements.txt      Pinned Python dependencies
```

## Setup

Requires Python 3.10 or newer.

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

The expected dataset is:

```text
data/raw/full_filled_stroke_data (1).csv
```

## Train the Model

Run training from the project root:

```powershell
python .\src\train.py
```

This creates or replaces:

- `models/preprocessor.pkl`
- `models/xgboost_stroke_model.pkl`

## Run the Application

```powershell
streamlit run .\app\main.py
```

Streamlit will display a local URL, normally `http://localhost:8501`.

## Notebooks

- `notebooks/01_eda_and_cleaning.ipynb` explores data quality, distributions, and class balance.
- `notebooks/02_modeling_and_eval.ipynb` trains the model, evaluates held-out predictions, exports artifacts, and generates SHAP feature analysis.

## Important Medical Disclaimer

This project is for education, experimentation, and portfolio demonstration only. It is not a medical device and does not provide a diagnosis. Model outputs may be inaccurate or biased, and must not be used to make clinical decisions. Always consult a qualified healthcare professional for medical advice.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

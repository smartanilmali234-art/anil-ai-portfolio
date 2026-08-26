from pathlib import Path
import pandas as pd
import joblib
import xgboost as xgb
from sklearn.model_selection import train_test_split
from imblearn.over_sampling import SMOTE
from data_loader import load_stroke_data
from preprocessing import create_preprocessor


BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_DIR = BASE_DIR / "models"


def run_training():
	MODEL_DIR.mkdir(parents=True, exist_ok=True)

	# 1. Load Data
	df = load_stroke_data()

	X = df.drop(columns=['stroke'])
	y = df['stroke']

	# 2. Train-Test Split (Stratified for Imbalanced Target)
	X_train, X_test, y_train, y_test = train_test_split(
		X, y, test_size=0.2, random_state=42, stratify=y
	)

	# 3. Fit Preprocessor
	preprocessor = create_preprocessor()
	X_train_proc = preprocessor.fit_transform(X_train)

	# 4. Handle Class Imbalance via SMOTE
	smote = SMOTE(random_state=42)
	X_train_res, y_train_res = smote.fit_resample(X_train_proc, y_train)

	# 5. Train XGBoost Classifier
	model = xgb.XGBClassifier(
		n_estimators=100,
		max_depth=4,
		learning_rate=0.05,
		eval_metric='logloss',
		random_state=42
	)
	model.fit(X_train_res, y_train_res)

	# 6. Save Artifacts
	joblib.dump(preprocessor, MODEL_DIR / 'preprocessor.pkl')
	joblib.dump(model, MODEL_DIR / 'xgboost_stroke_model.pkl')
	print("Training complete. Preprocessor and XGBoost model exported to /models directory.")


if __name__ == "__main__":
	run_training()

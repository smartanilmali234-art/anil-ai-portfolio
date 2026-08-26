import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.impute import SimpleImputer


def create_preprocessor():
	"""Builds and returns the ColumnTransformer pipeline for features."""
	num_cols = ['age', 'hypertension', 'heart_disease', 'avg_glucose_level', 'bmi']
	cat_cols = ['gender', 'ever_married', 'work_type', 'Residence_type', 'smoking_status']

	num_transformer = Pipeline([
		('imputer', SimpleImputer(strategy='median')),
		('scaler', StandardScaler())
	])

	cat_transformer = Pipeline([
		('imputer', SimpleImputer(strategy='most_frequent')),
		('onehot', OneHotEncoder(handle_unknown='ignore', sparse_output=False))
	])

	preprocessor = ColumnTransformer(
		transformers=[
			('num', num_transformer, num_cols),
			('cat', cat_transformer, cat_cols)
		],
		remainder='passthrough'
	)
	return preprocessor

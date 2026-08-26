from pathlib import Path

import pandas as pd


BASE_DIR = Path(__file__).resolve().parent.parent
DATA_PATH = BASE_DIR / "data" / "raw" / "full_filled_stroke_data (1).csv"


def load_stroke_data(path: Path = DATA_PATH) -> pd.DataFrame:
	"""Load the stroke dataset and validate its target column."""
	if not path.exists():
		raise FileNotFoundError(f"Stroke dataset not found: {path}")

	dataset = pd.read_csv(path)
	if "stroke" not in dataset.columns:
		raise ValueError("Stroke dataset must contain a 'stroke' target column")

	return dataset

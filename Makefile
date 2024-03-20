all:
	python -m http.server 8001&
	google-chrome 0.0.0.0:8001

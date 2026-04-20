all:
	python3 -m http.server 8001&
	open http://0.0.0.0:8001

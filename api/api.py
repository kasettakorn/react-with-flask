import time
from flask import Flask
from datetime import date
app = Flask(__name__)

@app.route('/time')
def get_current_time():
	return {'time': time.time()}

@app.route('/date')
def get_date():
	return {
		'date': date.today().strftime("%d/%m/%Y")
	}


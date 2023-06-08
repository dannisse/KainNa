from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")
@app.route('/home')
def home():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")
@app.route('/mainDish')
def mainDish():
    return render_template("mainDish.html")
@app.route('/adobo')
def adobo():
    return render_template("adobo.html")
@app.route('/desserts')
def desserts():
    return render_template("desserts.html")
@app.route('/drinks')
def drinks():
    return render_template("drinks.html")
#if __name__ == '__main__':
    #app.run(debug=True)

if __name__ == '__main__':
    port = int(5000)
    app.run(host='0.0.0.0', port=port, debug=True)
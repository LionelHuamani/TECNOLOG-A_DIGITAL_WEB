from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():
    imagenes = [
        "/static/image/img1.jpg",
        "/static/image/img2.jpg",
        "/static/image/img3.jpg"
    ]
    return render_template('index.html', imagenes=imagenes)

if __name__ == '__main__':
    app.run(debug=True)
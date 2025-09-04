<<<<<<< HEAD
#Lo que se va importar para el codigo
from  flask  import  Flask, render_template
#inicializar la aplicacion en flask
app = Flask(__name__)

#rutas
@app.route('/')
def index():
    return render_template('base.html')

#Correr la aplicacion
if __name__ == '__main__':
    app.run(debug=True)


=======
from flask import Flask, render_template ,request, jsonify,url_for
import os

# Inicializar de mi framework flask
app = Flask(__name__)

#rutas
@app.route("/")
def index():
    ruta = os.path.join(app.static_folder, 'image')
    imagenes = [url_for('static', filename=f'image/{img}') for img in os.listdir(ruta) if img.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
    return render_template("index.html", imagenes=imagenes)

#ejecutar mi servidor
if __name__ == '__main__':
    app.run(debug=True)

>>>>>>> 154d9c7 (Primer commit)

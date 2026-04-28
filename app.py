from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def inicio():
    imagenes = [
        "/static/image/imagen1.jpg",
        "/static/image/imagen2.jpg",
        "/static/image/imagen3.jpg",
        "/static/image/imagen4.jpg",
        "/static/image/imagen5.jpg",
    ]
    cards = [
        {
            "titulo": "One Piece: Nejimaki-jima no bōken",
            "autor": "Juan C.",
            "categoria": "Segunda Pelicula ",
            "descripcion": "Monkey D. Luffy, el capitán y aspirante a Rey de los Piratas trabaja con su equipo - Ussop, Zoro, Sanji y Nami para abrirse camino hasta la Isla del Reloj para recuperar su barco.",
            "imagen": "/static/image/imagen3.jpg",
        },
        {
            "titulo": "One Piece: The movie",
            "autor": "Carlos M.",
            "categoria": "Primera Pelicula",
            "descripcion": "Había una vez un pirata conocido como el Gran Pirata de Oro Woonan, quien obtuvo casi 1/3 del oro del mundo. En el transcurso de unos años, la existencia ...",
            "imagen": "/static/image/imagen4.jpg",
        },
        {
            "titulo": "One Piece",
            "autor": "Lionel H.",
            "categoria": "Serie",
            "descripcion": "Monkey D. Luffy es un muchacho de 17 años que se hace a la mar para convertirse en un capitán pirata y reunir una tripulación en su viaje de la búsqueda del One Piece, un tesoro legendario, que quien lo encuentre, se convertirá en el nuevo Rey de los Piratas.",
            "imagen": "/static/image/imagen5.jpg",
        },
    ]
    return render_template('index.html', imagenes=imagenes, cards=cards, year=datetime.now().year)

if __name__ == '__main__':
    app.run(debug=True)
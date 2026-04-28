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
            "titulo": "Innovación en Cañete",
            "autor": "Juana C.",
            "categoria": "Recurso",
            "descripcion": "Proyecto interdisciplinario que conecta tecnología y cultura local. Adaptado a estándares educativos nacionales.",
            "imagen": "/static/image/python.png",
        },
        {
            "titulo": "Python para Todos",
            "autor": "Carlos M.",
            "categoria": "Curso",
            "descripcion": "Aprende Python desde cero con ejemplos prácticos y proyectos reales orientados a la comunidad.",
            "imagen": "/static/image/python.png",
        },
        {
            "titulo": "Datos y Sociedad",
            "autor": "Ana R.",
            "categoria": "Investigación",
            "descripcion": "Análisis de datos aplicado a problemáticas sociales de la región, con visualizaciones interactivas.",
            "imagen": "/static/image/python.png",
        },
    ]
    return render_template('index.html', imagenes=imagenes, cards=cards, year=datetime.now().year)

if __name__ == '__main__':
    app.run(debug=True)
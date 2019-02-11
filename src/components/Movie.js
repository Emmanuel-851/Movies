import React from 'react'

const Movie = (props) =>(
    <div>
<h2>Datos de la peliculas</h2>
    <h3>{props.p.titulo}</h3>
    <h4>Año de estreno: {props.p.año}</h4>
    <h4>Director de la pelicula: {props.p.director}</h4>
    <h4>Produccion de la pelicula: {props.p.productora}</h4>
    <h5>Duracion de la pelicula: {props.p.duracion}</h5>
    

    </div>
)

export default Movie;
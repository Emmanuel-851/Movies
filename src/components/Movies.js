import React, {Component} from 'react'
import Movie from './Movie'

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas :[

                {
                    titulo: 'cómo entrenar a tu dragón 3',
                    duracion: '1h 44m',
                    año: '2019',
                    director: 'Dean DeBlois',
                    productora: 'DreamWorks Animation',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTDXyPXz-NK3kaIzOAzZKQgfXiaoR6Tej0onLaNhzi0pfOC8FlF'
                },
                {
                    titulo: 'Battle Angel: la última guerrera',
                    duracion: '2h 22m',
                    año: '2019',
                    director: 'Robert Rodríguez',
                    productora: 'coproducida por Canadá, Argentina y Estados Unidos',
                    imagen: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQ0pikfk3hZ3eFIFSTM0t-mCM3_dBS0VeaqFO3IYyaSHms-QNTc'
                },{
                    titulo: 'Mirreyes vs godínez',
                    duracion: '1h 49m',
                    año: '2019',
                    director: 'Chava Cartas',
                    productora: 'Draco Films',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcR5O2aLnPQtKuxE2l5qPNwwLq4ez-z3yUNzepWhIXajfVcQXn1n'
                },{
                    titulo: 'Atentado en el estadio',
                    duracion: '1h 44m',
                    año: '2018',
                    director: 'Scott Mann',
                    productora: 'Sky Cinema',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTGmPll3_XZ1Q3foystgOPlbn2X09jh__qlJFAcjlR6B4zdaWH6'
                },{
                    titulo: 'Dragon Ball Super: Broly',
                    duracion: '1h 41m',
                    año: '2018',
                    director: 'Tatsuya Nagamine',
                    productora: 'Toei Animation',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcR3O71Sjyh6mz5HRAhF26NWyG30Q9Hgu7TgZ0GryI41SyNo9U0Y'
                },{
                    titulo: 'Aquaman',
                    duracion: '2h 22m',
                    año: '2018',
                    director: 'James Wan',
                    productora: '‎DC Films‎; RatPac Entertainment',
                    imagen: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTceMr8TQbPSfYqGM0XNhH12Wdjc8eshvz9waG5I7hnSK7cU1d5'
                }
            ]

        }
    }


render () {
    return(
        <div  className='movie-card'>
        <h1>Peliculas Disponibles</h1>
        {
            this.state.peliculas.map((pelicula, index) =>(
                <div key={index}>
                
                <h2>{pelicula.titulo}</h2>
                <img className="imagennnnnn-card" src={pelicula.imagen} alt={pelicula.titulo} width='200' height='300' />
            
            <h4>Duracion de pelicula {pelicula.duracion}</h4>
                <p>------------------------------------------</p>
                <Movie p={pelicula} />
                <p>=============================================================</p>

                </div>
            ))

        }
        </div>

    )
   }
}


export default Movies;
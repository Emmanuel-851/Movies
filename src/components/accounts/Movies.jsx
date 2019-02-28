import React, {Component} from 'react'
import {Row,Col,Avatar,Icon,Card} from 'antd'

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas :[

                {
                    titulo: 'cómo entrenar a tu dragón 3',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTDXyPXz-NK3kaIzOAzZKQgfXiaoR6Tej0onLaNhzi0pfOC8FlF',
                    duracion: '1h 44m'
                    
                },
                {
                    titulo: 'Battle Angel: la última guerrera',
                    imagen: 'http://t3.gstatic.com/images?q=tbn:ANd9GcQ0pikfk3hZ3eFIFSTM0t-mCM3_dBS0VeaqFO3IYyaSHms-QNTc',
                    duracion: '2h 22m'
                    
                },{
                    titulo: 'Mirreyes vs godínez',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcR5O2aLnPQtKuxE2l5qPNwwLq4ez-z3yUNzepWhIXajfVcQXn1n',
                    duracion: '1h 49m'
                    
                },{
                    titulo: 'Atentado en el estadio',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTGmPll3_XZ1Q3foystgOPlbn2X09jh__qlJFAcjlR6B4zdaWH6',
                    duracion: '1h 44m'
                    
                },{
                    titulo: 'Dragon Ball Super: Broly',
                    imagen: 'http://t0.gstatic.com/images?q=tbn:ANd9GcR3O71Sjyh6mz5HRAhF26NWyG30Q9Hgu7TgZ0GryI41SyNo9U0Y',
                    duracion: '1h 41m'
                    
                },{
                    titulo: 'Aquaman',
                    imagen: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTceMr8TQbPSfYqGM0XNhH12Wdjc8eshvz9waG5I7hnSK7cU1d5',
                    duracion: '2h 22m'
                   
                }
            ]

        }
    }


render () {
    const {Meta} =Card
        return(
            
            <Row gutter={16}>
            {
                this.state.peliculas.map((peliculas,index)=>(
                    <Col key={index} span={8} style={{marginBottom:'16px' }}>
                    <Card 
                    cover={<img src={peliculas.imagen} alt={peliculas.titulo} />} 
                    actions={[<Icon type='dolar' />, <icon type='shopping-cart' />]}
                    >

                    <Meta 
                    avatar={<Avatar src ='https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg' />}
                    title={peliculas.titulo}
                    description={peliculas.duracion}

                    />
                    

                    </Card>

                    </Col>
                ))
            }

            </Row>

        
    )
   }
}


export default Movies;
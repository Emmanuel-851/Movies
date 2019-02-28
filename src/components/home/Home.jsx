import React from 'react'
import logo from './logo.svg';
import './home.scss'

const Home = (props) =>(
   
   <div className="App-header">
   <div className='titulo-home'>
        <p className='animacion-titulo'>Peliculas De buena calidad</p>
    </div>
<div>
{ props.user ?
  <div>
 <p>Nombre: {props.user.displayName}</p>
 <p>Correo: {props.user.email}</p>
 <img
 className='imgperfil'
 style={{width:'100px'}}
 src={props.user.photoURL}
 alt={props.user.displayName}
 />
    </div>

 :null
}

</div>
    


        <img src={logo} className="App-logo" alt="logo" />
        
  </div>
)

export default Home;

        

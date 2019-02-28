import React, { Component } from 'react';
import './App.scss';
import {Layout,Menu} from 'antd'
import 'antd/dist/antd.css'
import {Route, Switch, NavLink} from 'react-router-dom'
import firebase from 'firebase'
import Home from './components/home/Home'
import Movies from './components/accounts/Movies'
import Login from './components/accounts/Login'
import Profile from './components/accounts/Profile'



class App extends Component {

  constructor(props){
    super(props)
    this.db=firebase.firestore()
    this.state={
      acualRouter:null,
      user:null
    }
  }

  componentDidMount=()=>{
    let path=window.location.pathname
    let path_only=path.replace('/','')
    if(path_only==='') path_only='home'
    this.setState({acualRouter:path_only})

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
    })
  }

  loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((user)=>
      {
        console.log("Estoy logeado soy paquito")
        window.location.assign("/profile")
      })
      .catch((err)=>console.log("Hay un error " + err))
  }

  logOut = () => {
    firebase.auth().signOut()
      .then(()=>alert("Tu sesión ha sido cerrada"))
      .catch((err)=>console.log(err))
    this.setState({user: null})
  }

  registerUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(()=>
        {
          alert("Usuario creado con éxito")
          window.location.assign("/profile")
        })
      .catch(err=>
        {
          console.log(err)
          alert("No se puedo crear usuario")
        })
  }

  loginWithEmail = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      alert("Usuario loggeado con éxito")
      window.location.assign("/profile")
    })
    .catch(err=>
      {
        console.log(err)
        alert("No se puedo loggear usuario")
      })
  }

  render() {
    const {Header,Content,Footer}=Layout;
    const{Item}=Menu;
    return (
      <Layout className="layout">
      <Header className='header'>
      {this.state.acualRouter ?
      
      <Menu
      className='menu'
      theme='dark'
      mode='horizontal'
      style={{lineHeight:'64px'}}
      defaultOpenKeys={[this.state.acualRouter]}
      
      >
      <Item key='home'>
      <NavLink to='/'>Home</NavLink>
      </Item>
      <Item 
      key='movies'>
      <NavLink to='/movies'>Movies</NavLink></Item>

      {this.state.user ?

      

<Item
onClick={this.logOut}
>Cerrar sesión</Item>
: 

      <Item
      key='login'>
      <NavLink to='/login'>
      Login
      </NavLink>
      </Item>
      }
      </Menu>
      :null
      }

      </Header>
      <Content className='content'>
      <Switch>
          <Route 
          exact path='/' 
          render={()=> 
          <Home user={this.state.user} 
          />}
           />

           <Route
           exact path='/login'
           render={()=>
          <Login 
          loginGoogle={this.loginGoogle}
          user={this.state.user}
          register={this.registerUser}
          loginEmail={this.loginWithEmail}
          />} 
           />

           <Route 
           exact path='/profile'
           render={()=>
          <Profile
          user={this.state.user}
          db={this.db}
           />}
           />

          <Route exact path='/movies' component={Movies} />
        </Switch>
    
      </Content>
    
      <Footer className='footer'>
        <p>Derechos reservado Actosoft 2019 ©</p>
      </Footer>
        
     
        </Layout>
    );
  }
}

export default App;

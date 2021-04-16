import logo from './logo.svg';
// import './App.css'; 
import Header from './component/Header';
import './scss/style.css';
import  Footer from './component/Footer'; 
import Home from './component/Home'; 
import  {Switch, Route} from 'react-router-dom';
import  Getting from './component/docs/getting-started';
import Tutorial from './component/tutorial';
import Blog from './component/blog';
import Community from './component/community'; 
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
function App() {
  return (
      <>
      <main>  
        <Header/>   
        {/* <Getting/> */}
        <Switch>
          <Route exact path ="/getting" component ={Getting}/> 
          <Route exact path ="/" component ={Home}/> 
          <Route exact path ="/tutorail" component ={Tutorial}/> 
          <Route exact path ="/blog" component ={Blog}/> 
          <Route exact path ="/community" component ={Community}/> 
        </Switch>

         <Footer/>  
        </main>
     </>
  );
}

export default App;

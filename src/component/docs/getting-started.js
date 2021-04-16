import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { TRUE } from 'node-sass';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import  ArrowDown  from '../../image/ArrowDown.png'; 
import {NavLink ,Link} from 'react-router-dom';
export default function Getting (){
     const [toggle, setToggle] = useState (false);  
     const [toggle2, setToggle2] = useState (false);  
     const [isActive , setActive] =  useState(true);

   const CollapClick = () =>{
        setToggle(!toggle);
        // setToggle2(!toggle2);
        setActive(!isActive); 
   }
   const CollapClick2 = () =>{ 
        setToggle2(!toggle2);
   }



    return (
        <>
          <div className="Getting-wrp">
              <div className="container"> 
                 <div className="Getting-Content-wrapper">
                     <div className="Gt-Left-side">
                          <div className="getting-heading">
                              <h2> Getting Started </h2>
                               <p>This page is an overview of the React documentation and related resources.</p>
                               <p><b>React</b> is a JavaScript library for building user interfaces. Learn what React is all about on 
                                <a href="#">Our homepage</a> or <a href= "#">in the Tutorial</a>
                               </p>
                          </div>
                          <div className="Group-Link">
                              <ul className="grp-unorder">
                                   <li><a href="#"> Try React</a></li>
                                   <li><a href="#"> Learn React</a></li>
                                   <li><a href="#"> Stay informed</a></li>
                                   <li><a href="#"> Versioned Documentation</a></li> 
                                   <li><a href="#"> Something Missing?</a></li>
                              </ul>
                          </div>
                     </div>
                     <div className="Gt-Right-side">
                         <ul className="Tab-page_wrapper">
                             {/* className= {isActive ? "app" : null} */}
                              <li className="collapese-1 collaps-cmn">
                                    <div className="Collap-heading">
                                         {/* {chevrondown} */}
                                        <h2 onClick={CollapClick}>Installation  
                                            <span className="Arrow-down">
                                            <svg viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="10" height="10" class="css-1mwek35"><g transform="translate(904.92214,-879.1482)"><path d="
                                                m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
                                                -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
                                                0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
                                                -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
                                                -174.68583 0.6895,0 26.281,25.03215 56.8701,
                                                55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
                                                -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
                                                -104.0616 -231.873,-231.248 z
                                                " fill="currentColor"></path></g></svg>
                                            </span>
                                         </h2>
                                    </div>
                                    {
                                        toggle?
                                    <div className="collap-content">
                                          <h3>Getting Started</h3>
                                         <ul className="collp-unorder1">
                                             <li><Link exact activeClassName="active-link" href="#">Add React to a Website</Link></li>
                                             <li><Link exact activeClassName="active-link" href="#">Create a New React App</Link></li>
                                             <li><Link exact activeClassName="active-link" href="#">CDN Lnks</Link></li>
                                             <li><Link exact activeClassName="active-link" href="#">Release Channels</Link></li>
                                         </ul>
                                    </div>
                                    :null
                                    }
                              </li>  
                              <li className="collapese-2 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2 onClick={CollapClick2}>Main concepts</h2>
                                    </div> 
                                    {
                                        toggle2?
                                    <div className="collap-content"> 
                                         <ul className="collp-unorder1">
                                            <li><a href="#">Hello World</a></li>
                                            <li><a href="#">Introducing JSX</a></li> 
                                            <li><a href="#">Rendering Elements</a></li>
                                            <li><a href="#">Components and Props</a></li>
                                            <li><a href="#">State and Lifecycle</a></li>
                                            <li><a href="#">Handling Events</a></li>
                                            <li><a href="#">Lists and Keys</a></li>
                                            <li><a href="#">Forms</a></li>
                                            <li><a href="#">Lifting State Up</a></li>
                                            <li><a href="#">Composition vs Inheritance</a></li>
                                            <li><a href="#">Thinking In React</a></li>
                                         </ul>
                                    </div>
                                    :null
                                    }
                              </li>  
                              <li className="collapese-3 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>ADVANCED GUIDES</h2>
                                    </div> 
                              </li>  
                              <li className="collapese-4 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>API REFERENCE</h2> 
                                    </div> 
                              </li>  
                              <li className="collapese-5 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>HOOKS</h2>
                                    </div> 
                              </li>  
                              <li className="collapese-6 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>TESTINg</h2>
                                    </div> 
                              </li> 
                              <li className="collapese-7 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>CONCURRENT MODE (EXPERIMENTAL)</h2>
                                    </div> 
                              </li> 
                              <li className="collapese-7 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>CONTRIBUTING</h2>
                                    </div> 
                              </li>
                              <li className="collapese-7 collaps-cmn">
                                    <div className="Collap-heading">
                                        <h2>FAQ</h2>
                                    </div> 
                              </li>
                         </ul>
                     </div> 
                 </div>
              </div>
          </div>
        </>
    )
}
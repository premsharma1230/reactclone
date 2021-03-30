import React from 'react';
// import Footerlogo from '../image/footer-logo';
export default function Footer () {
    return (
        <>
            <section className="Bottom-Link">
                 <div className="container">
                 <div class="Btn-wrp">
                       <a class="btn1" title="Get started">Get started</a>
                       <a class="btn2" title="tutorial">Take the Tutorial</a>
                     </div>
                 </div>
             </section>
             <footer>
                <div className="container">
                    <div className="Footer-content">
                          <div className="ft-Left">
                              <a href="https://opensource.facebook.com/projects/">
                                  <img src=  "" alt="img"/>
                              </a> 
                              <p>
                              Copyright © 2021 Facebook Inc.    
                              </p>
                          </div>
                           <div className="ft-Right">
                           <div className="ft1 ft-cmn">
                               <div className="Ft-heading">
                                     <h2>  DOCS </h2>
                               </div>
                               <ul>
                                   <li>
                                       <a href ="#">Installation</a>
                                   </li>
                                   <li>
                                       <a href ="#">Main Concepts</a>
                                   </li>
                                   <li>
                                       <a href ="#">Advanced Guides</a>
                                   </li>
                                   <li>
                                       <a href ="#">API Reference</a>
                                   </li>
                                   <li>
                                       <a href ="#">Hooks</a>
                                   </li>
                                   <li>
                                       <a href ="#">Testing</a>
                                   </li>
                                   <li>
                                       <a href ="#">Concurrent Mode (Experimental)</a>
                                   </li>
                                   <li>
                                       <a href ="#">Contributing</a>
                                   </li>
                                   <li>
                                       <a href ="#">FAQ</a>
                                   </li>
                               </ul>
                          </div>
                            <div className="ft2 ft-cmn">
                               <div className="Ft-heading">
                                     <h2>  CHANNELS  </h2>
                               </div>
                               <ul>
                                   <li>
                                       <a href ="#">GitHub</a>
                                   </li>
                                   <li>
                                       <a href ="#">Stack Overflow</a>
                                   </li>
                                   <li>
                                       <a href ="#">Discussion Forums</a>
                                   </li>
                                   <li>
                                       <a href ="#">Reactiflux Chat</a>
                                   </li>
                                   <li>
                                       <a href ="#">DEV Community</a>
                                   </li>
                                   <li>
                                       <a href ="#">Facebook</a>
                                   </li>
                                   <li>
                                       <a href ="#">Twitter</a>
                                   </li>
                               </ul>
                          </div>
                          <div className="ft3 ft-cmn">
                               <div className="Ft-heading">
                                     <h2>  COMMUNITY  </h2>
                               </div>
                               <ul> 
                                   <li>
                                       <a href ="#">Code of Conduct</a>
                                   </li>
                                   <li>
                                       <a href ="#">Community Resources</a>
                                   </li>  
                               </ul>
                          </div>
                          <div className="ft4 ft-cmn">
                               <div className="Ft-heading">
                                     <h2>  MORE  </h2>
                               </div>
                               <ul> 
                                   <li> <a href ="#">Tutorial</a> </li>
                                   <li> <a href ="#">Blog</a> </li>  
                                   <li> <a href ="#">Acknowledgements</a> </li>  
                                   <li> <a href ="#">React Native</a> </li>  
                                   <li> <a href ="#">Privacy</a> </li>  
                                   <li> <a href ="#">Terms</a> </li>  
                                   <li> <a href ="#">Facebook Open Source</a> </li>  
                               </ul>
                          </div>
                           </div>
                     </div>
                 </div>
             </footer>
        </>
    )
}
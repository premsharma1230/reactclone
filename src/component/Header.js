import React from 'react'; 
import Logo from '../image/logo192.png';
import {Link} from 'react-router-dom';
function Header() {
    return ( 
        <>
        <header>
            <div className="container">
                <nav>
                    <div className="Logo">
                        <Link to = "/">
                         <img src={Logo} alt="img"/> 
                         <h2>React</h2>
                         </Link>
                        
                   </div>
                   <div className="Nav-item-wrapper1  Nav-item-cmn">
                       <ul className="nav-unorder1">
                           <li>
                               <Link to = "/getting">Docs</Link>
                            </li>
                           <li>
                           <Link to = "/tutorail">Tutorial</Link>
                            </li>
                           <li>  <Link to = "/blog">Blog</Link></li>
                           <li> <Link to = "/community">Community</Link></li>
                       </ul>
                   </div>
                   <div className="Nav-item-wrapper2 Nav-item-cmn">
                       <ul className="nav-unorder2">
                           <li>
                               <a href="#">
                               <form>
                               {/* <i class="fas fa-search"></i> */}
                                   <input type ="text" name="txt" placeholder="Search" required/>
                               </form>
                               </a></li>
                           <li><a href="#">v17.0.2</a></li>
                           <li><a href="#">Languages</a></li>
                           <li><a href="#">GitHub</a></li> 
                       </ul>
                   </div>
                </nav>
           </div>
        </header>
        
        </>
    )
} 
export default Header;



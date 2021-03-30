import React from 'react'; 
import Logo from '../image/logo192.png';

function Header() {
    return ( 
        <>
        <header>
            <div className="container">
                <nav>
                    <div className="Logo">
                         <img src={Logo} alt="img"/>
                         <h2>React</h2>
                   </div>
                   <div className="Nav-item-wrapper1  Nav-item-cmn">
                       <ul className="nav-unorder1">
                           <li><a href="#">Docs</a></li>
                           <li><a href="#">Tutorial</a></li>
                           <li><a href="#">Blog</a></li>
                           <li><a href="#">Community</a></li>
                       </ul>
                   </div>
                   <div className="Nav-item-wrapper2 Nav-item-cmn">
                       <ul className="nav-unorder2">
                           <li><a href="#">
                               <form>
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
         <Banner/>
        </>
    )
}

export default Header;

// -----banner----//

  const Banner = () =>{
    return (
        <section className="Banner-Wrapper">
                <div className="Container">
                    <div className="Banner-Content">
                          <h1>React</h1>
                          <p> 
                             A JavaScript library for building user interfaces
                          </p>
                          <div className="Btn-wrp">
                              <a className="btn1" title="Get started">Get started</a>
                              <a className="btn2" title="tutorial">Take the Tutorial</a>
                          </div>
                    </div>
                </div>
        </section>
    )
}


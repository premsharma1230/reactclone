// -----banner----//
import {Link} from 'react-router-dom';

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
                              <Link to = "/getting" className="btn1" title="Get started">Get started</Link>
                              <Link to = "/tutorail" className="btn2" title="tutorial">Take the Tutorial</Link>
                          </div>
                    </div>
                </div>
        </section>
    )
}

export default Banner;
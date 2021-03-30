import React from 'react';


export default function Simplecomp(props) {
    return (
        <>
          <section className ="Simple-Wrapper">
            <div className ="container">
                <div className ="Simp-content">
                    <div className="Simp-Left Simp-cmn">
                       <h2>  {props.h2}  </h2>
                       <p>
                       React components implement a <b>render()</b> 
                        method that takes input data and returns what to display. 
                        This example uses an XML-like syntax called JSX. Input data
                         that is passed into the component can be accessed by<b>render()</b> 
                        via <b>this.props.</b> 
                       </p>
                       <p>
                      <strong>JSX is optional and not required to use React.</strong>  Try the <span>Babel REPL</span> to see the raw JavaScript code produced by the JSX compilation step.
                       </p>
                    </div>
                    <div className="Simp-Right Simp-cmn">
                        <div className="S1">
                           <div className="Simp-heading">
                             <h2>LIVE JSX EDITOR</h2> 
                              <label>
                                  <input type="checkbox" name="checkbox1" id="checkbox1"/>
                                  JSX
                              </label> 
                           </div>
                           <div className="Editorcontent" contentEditable="true">
                              
                           </div>
                        </div>
                        <div className="S2">
                           <div className="Simp-heading">
                             <h2>Result</h2> 
                           </div>
                           <div className="Editorcontent" contentEditable="true">
                              Result
                           </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
       
        </>
    )
}
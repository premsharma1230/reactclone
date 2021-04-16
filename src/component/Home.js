import React from 'react'; 
import  Simplecomp from './Simplecomponent';
import Banner from './Banner';
export default function Home (){
    return(
        <> 
            <Banner/>
            <Component/>
            <Simplecomp h2 ="A Simple Component"/>
            <Simplecomp h2 ="A Stateful Component"/>
            <Simplecomp h2 ="An Application"/>
            <Simplecomp h2 ="A Component Using External Plugins"/> 
        </>
    )
}
 

const Component =()=>{
    return( 
        <section className ="Component-Wrapper">
              <div className="container">
                  <div className ="Component-Content">
                    <Comp1 heading ="Declarative"/>
                    <Comp1 heading ="Component-Based"/>
                    <Comp1 heading ="Learn Once, Write Anywhere"/>
                  </div>
              </div>
        </section>
    )
}

const Comp1 =(props) =>{
    return (
        <div className="Comp1">
          <h2>
             {props.heading}
          </h2>
          <p>
          React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
          </p>
          <p>
          Declarative views make your code more predictable and easier to debug.
          </p>
        </div>
    )
}
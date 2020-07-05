import React, { Component } from 'react';

export default class Hero extends Component {
    render() {
        return (
            <section id="hero">
        <div className="card-title">
          <h1 className="heading_primary mb-5">
            hola amigos
          </h1>
          <h3 className="heading_tertiary">
            we're living in CDMX and learning to code in Ruby on Rails
          </h3>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="card-deck">
             <div className="card">
             <caption className="card_text">
                <h3 className="heading_tertiary mb-5">I'm Jamieson</h3>
                <p className="">
                  Originally from Denver, Colorado, I'm a big lover of adventure and the outdoors. 
                </p>
                </caption>
                
                <img className="card_image" src="./images/jamo_jump.jpg"></img>
              
             </div>
                
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card-deck">
             <div className="card">
             <caption className="card_text">
                <h3 className="heading_tertiary mb-5">I'm Harrison</h3>
                <p className="">
                  Originally from Phoenix, Arizona. I live for the pool. 
                </p>
                </caption>
                
                <img className="card_image" src="./images/harry_cdmx.jpg"></img>
              
             </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
        )
    }
}

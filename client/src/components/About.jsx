import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about">
        <div className="container-fluid about_box">
          <div className="row">
            <div className="about_heading">
              <h2 className="heading_secondary">
                Follow Our Journey
              </h2>
            </div>
            <div className="card-deck">
              <div className="col-lg-4 col-md-12">
                <div className="card-about">
                  <h2 className="card-about_heading">
                    We like to code
                  </h2>
                  <p className="para_text">
                    Whether via our classes at Le Wagon or independent studies,
                    the goal is always to continue to learn and apply new concepts
                    every day, and utilize the innumerable resources that we
                    continue to discover. Here are some of our favorite
                    resources.
                  </p>
                  <button className="btn btn-lg btn-dark">
                    <a className="link-style" href="">
                      Resources >>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-about">
                  <h2 className="card-about_heading">
                    We like adventure
                  </h2>
                  <p className="para_text">
                    With the end goal of landing a job working for a start-up or
                    tech company after graduation, we jumped head first into a
                    full-stack coding bootcamp with Le Wagon Mexico.
                  </p>
                  <button className="btn btn-lg btn-dark">
                    <a className="link-style" href="">
                      Lifestyle >>
                    </a>
                  </button>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="card-about">
                  <h2 className="card-about_heading">
                    We like to write about it
                  </h2>
                  <p className="para_text">
                    Rather than overload you with 100% strictly coding related content, we like to mix in a little bit of fun and adventure because, well... balance is important. 
                  </p>
                  <button className="btn btn-lg btn-dark">
                    <a className="link-style" href="">
                      Resources >>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        )
    }
}

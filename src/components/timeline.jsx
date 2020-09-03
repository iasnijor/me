import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-code" />
                      </div>
                     
                      <div className="timeline-label">
                        <h2>Technology and Innovation Intern at PNC Bank<span> June 2020- July 2020</span></h2>
                        <p>I was tasked with extracting the file and previewing thumbnail of the file inside the ag-grid layout. On top of that I was working with Elastic search
                           for storing various data on the server through REST API calls such as POST, PUT and GET. I reported daily to the production team using JIRA and Confluence as a managing and documenting platform.</p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-code" />
                      </div>
                     
                      <div className="timeline-label">
                        <h2>Research Assitant at Dr. Alina Lazar<span> 2018-Present</span></h2>
                        <p>I am a Research Assitant to Dr.Alina Lazar, professor at Youngstown State University.Our research is focused on Classification Method, a branch of Machine Learning.We have been applying different set of Classification Rules on Categorical Demographic data to predict Transporation Modes</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Youngstown State University <span>2017-Presnt</span></h2>
                        <p>I decided to pursue my undergrad at Youngstown State University,Youngstown, Ohio. I am majoring in Computer Science with a minor in Mathematics. My areas of interest are Software Developmentr and Machine Learning. Currently I am a Senior at YSU and completed courses such as Operating System, Software engineering, Computer Orgnization, Advance Object Oriented Programming, Data structures and Objects, Algorithms, Theory of Finite Automata and Server Side Programming, etc.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>High School<span> 2003-2015</span></h2>
                        <p>I pursued my high school education at Nepal from National Intregration College(NIC).My field of study was science where I studied physics, chemistry , mathematics and computer science.I have had intrest in programming since my early high school days and was keen to know about programming always.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/iasnijor/Os" target="_blank" rel="noopener noreferrer">Ext2 File Intregrity</a></h3>
											<span>File system scanner</span>
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/project-2.jfif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/iasnijor/Allegro-game-"target="_blank" rel="noopener noreferrer">Game Development</a></h3>
											<span>Multi Level game </span>
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/project-3.jfif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/iasnijor/SoftwareEngineering2018Fall-" target="_blank" rel="noopener noreferrer">Resource Scheduling System</a></h3>
											<span>Schedule Rooms and Labs</span>
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/project-4.jfif)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/iasnijor/Stock" target="_blank" rel="noopener noreferrer">Stock</a></h3>
											<span>Stock Startegy Simulator</span>
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/project-5.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/iasnijor/Calculator" target="_blank" rel="noopener noreferrer">Big Integer Calculation</a></h3>
											<span>Long Integer Calculator</span>
											
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/project-6.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/iasnijor/Two-pass-Assembler"target="_blank" rel="noopener noreferrer">Two pass Assembler</a></h3>
											<span>Marie program Reader</span>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>*/}
					</div>
				</section>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Enjoy</span>
					<h2 className="colorlib-heading">Recent Pictures</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<img src="images/pic-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
						<div className="desc">
							
							<p>Niagra Falls</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<img src="images/pic-2.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
						<div className="desc">
							
							<p>Mill Creek Park,Youngstown</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<img src="images/pic-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
						<div className="desc">
							
							<p>Lake Erie</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<img src="images/pic-4.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<p>Brooklyn Bridge</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<img src="images/pic-5.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
						<div className="desc">
							
							<p>New Orleans</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<img src="images/pic-6.jpeg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" />
						<div className="desc">
							{/*<span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>*/}
							<p>Mill Creek at Winter</p>
						</div>
					</div>
					</div>
				</div>
				{/*}
				<div className="row">
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

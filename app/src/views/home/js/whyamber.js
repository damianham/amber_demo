import React from 'react';

export default class WhyAmber extends React.Component {

	componentDidMount() {
		window.hljs.initHighlightingOnLoad()
	}

	render(props, state) {
		return (
			<section className="home">
        <div className="row">
          <div className="col-sm-12 main">
              <h2>Why Amber?</h2>

							<ol>
								<li>BARE METAL PERFORMANCE</li>
								<li>EXTREMELY LOW LEARNING CURVE</li>
								<li>CODE GENERATORS AND RECIPES</li>
								<li>MVC CONVENTIONS</li>
								<li>BUILT IN SECURITY</li>
								<li>RIGHT AMOUNT OF TOOLING</li>
								<li>MIT LICENSE</li>
							</ol>
          </div>
        </div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>BARE METAL PERFORMANCE</h4>
						<p>Amber provides the bare metal performance of the Crystal Language.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>EXTREMELY LOW LEARNING CURVE</h4>
						<p>Familiar design patterns and project structure layout so Rails
							developers will feel right at home.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>CODE GENERATORS AND RECIPES</h4>
						<p>A powerful CLI to with code generation and
							scaffolding features to rapidly build prototypes.
							Get started with a recipe to create and scaffold an
							application with a variety of features (e.g. Modular structure,
							React, Vue etc.)
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>MVC CONVENTIONS</h4>
						<p>Amber comes with a set of conventions to guide you in developing your application.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>BUILT IN SECURITY</h4>
						<p>Tools are built-in to prevent and mitigate common attacks against web applications.
							Minimize the risk of SQL injection, form tampering, cross-site request forgery,
							and several other attacks.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>RIGHT AMOUNT OF TOOLING</h4>
						<p>All of the tools you need are built-in: CLI, translations, database access,
							caching, validation, authentication, deployments, and encryption of secrets.
						</p>
					</div>
				</div>
			</section>
		);
	}
}

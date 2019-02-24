import React from 'react';
import {
  Link
} from 'react-router-dom';

export class HomeSidebar extends React.Component {

	render(props, state) {
		return (
			<div>

				<div className="list-group">
					<Link to="/whycrystal" className="list-group-item list-group-item-action">
						Why Crystal?
					</Link>

					<Link to="/whyamber" className="list-group-item list-group-item-action">
						Why Amber?
					</Link>

				</div>

			</div>
		)
	}
}

export class Home extends React.Component {

	componentDidMount() {
		window.hljs.initHighlightingOnLoad()
	}

	render(props, state) {
		return (
			<section className="home">
        <div className="row">
          <div className="col-sm-12 main">
            <div className="col-sm-7">
              <h2>Welcome to Amber Framework!</h2>
              <p>Thank you for trying out the Amber Framework.
              We are working hard to provide a super fast and reliable framework that provides
              all the productivity tools you are used to without sacrificing the speed.</p>
              <div className="list-group">
                <a className="list-group-item list-group-item-action" target="_blank"
                href="https://docs.amberframework.org">Getting Started with Amber Framework</a>
                <a className="list-group-item list-group-item-action" target="_blank"
                href="https://github.com/veelenga/awesome-crystal">List of Awesome Crystal projects and shards</a>
                <a className="list-group-item list-group-item-action" target="_blank"
                href="https://crystalshards.xyz">What is hot in Crystal right now</a>
              </div>
            </div>
          </div>
        </div>

				<div className="row">
					<div className="col-sm-12 main">
						<p>
							This application was generated with the recipe <span className="home-main-info">damianham/amber_demo</span>
						</p>

						<p>
							To generate a new application with this recipe use;
						</p>

						<pre>
							<code className="crystal">
								amber new -d sqlite -r damianham/amber_demo
							</code>
						</pre>

						<p>
							Change sqlite for mysql or pg accordingly
						</p>

						<p>
							You can find this recipe at
							<span className="home-main-info">https://github.com/damianham/amber_demo</span>
						</p>

					</div>
				</div>
			</section>
		);
	}
}

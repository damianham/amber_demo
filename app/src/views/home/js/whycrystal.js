import React from 'react';

export default class WhyCrystal extends React.Component {

	componentDidMount() {
		window.hljs.initHighlightingOnLoad()
	}

	render(props, state) {
		return (
			<section className="home">
        <div className="row">
          <div className="col-sm-12 main">
            <h2>Why Crystal?</h2>

						<ol>
							<li>EXTREMELY LOW LEARNING CURVE</li>
							<li>COMPILE TIME CHECKS & METHOD OVERLOADING</li>
							<li>BLAZING FAST PERFORMANCE</li>
							<li>THE WEB FRAMEWORK YOU WANT IS ALREADY HERE</li>
							<li>CRYSTAL IS WRITTEN IN CRYSTAL! IT’S EASY TO UNDERSTAND AND CONTRIBUTE TO THE LANGUAGE</li>
						</ol>

          </div>
        </div>

				<div className="row">
					<div className="col-sm-12 main">
						<h4>BLAZING FAST PERFORMANCE</h4>
						<p>
							When comparing the performance of Ruby to Crystal, often, it can be stated in orders of magnitude rather than percentages.
						</p>
						<p>
							Crystal’s built-in HTTP server has been able to handle over 2 million requests per second in benchmark testing. And many of the web frameworks are consistently delivering sub-millisecond response times for web applications.
						</p>
						(<a href="https://crystal-lang.org/2018/01/08/top-5-reasons-for-ruby-ists-to-use-crystal.html">source</a> https://crystal-lang.org/2018/01/08/top-5-reasons-for-ruby-ists-to-use-crystal.html)
						<hr/>
						<p>
							Recursive Fibonnaci sequence (45)
							<img src="/dist/images/ruby-fib.png" />
							<img src="/dist/images/crystal-fib.png" />
						</p>
						<ol>
							<li>Crystal - 3.857 seconds</li>
							<li>Java - 4.672 seconds</li>
							<li>Go - 6.703 seconds</li>
							<li>C++ - 6.969 seconds</li>
							<li>C - 6.999 seconds</li>
							<li>C# - 7.166 seconds</li>
							<li>Node - 12.76 seconds</li>
							<li>Ruby - 124 seconds (x32)</li>
							<li>Python - 344 seconds</li>
							<li>PHP - 362 seconds</li>
						</ol>

						(<a href="https://github.com/drujensen/fib/blob/master/crystal-language.pdf">source</a> https://github.com/drujensen/fib/crystal-language.pdf)
					</div>
				</div>


			</section>
		);
	}
}

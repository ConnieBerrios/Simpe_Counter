//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application

function SimpleCounter(props) {
	return (
		<div className="div1">
			<div className="calendar">
				{" "}
				<img
					src="https://ae01.alicdn.com/kf/HTB1pnVQNFzqK1RjSZFvq6AB7VXaq/12-Alice-in-Wonderland-Herald-White-Rabbit-Wall-Clock-Wood-Queen-Of-Hearts-Home-Room-Decor.jpg"
					style={{ width: "200px", height: "200px" }}></img>
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="One">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.PropTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);

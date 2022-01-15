import { AnalogDisplay } from "./analog-display.js";
import { DigitalDisplay } from "./digital-display.js";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { time: new Date().toLocaleString("en") };
		this.launchClock();
	}

	launchClock() {
		setInterval(() => {
			this.setState({ time: new Date().toLocaleString("en") });
		}, 1000);
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(AnalogDisplay, { time: this.state.time }),
			React.createElement(DigitalDisplay, { time: this.state.time })
		);
	}
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById("content"));
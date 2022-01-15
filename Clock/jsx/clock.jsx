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
		return (
			<div>
				<AnalogDisplay time={this.state.time} />
				<DigitalDisplay time={this.state.time} />
			</div>
		);
	}
}

ReactDOM.render(<Clock />, document.getElementById("content"));

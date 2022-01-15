class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			currentTime: new Date().toLocaleString()
		};
	}

	launchClock() {
		setInterval(() => {
			this.setState({
				counter: ++this.state.counter,
				currentTime: new Date().toLocaleString()
			});
		}, 1000);
	}

	render() {
		if (this.state.counter > 2) return;
		return <Logger time={this.state.currentTime}></Logger>;
	}
}

class Logger extends React.Component {
	constructor(props) {
		super(props);
		console.log("constructor");
	}

	componentWillMount() {
		console.log("componentWillMount 실행");
	}

	componentDidMount(e) {
		console.log("componentDidMount 실행");
		console.log('DOM Node : ', ReactDOM.findDOMNode(this));
	}

	componentWillReceiveProps(newProps) {
		console.log("componentWillReceiveProps 실행");
		console.log(`새로운 속성 : ${newProps}`);
	}

	shouldComponentUpdate(newProps, newState) {
		console.log("shouldComponentUpdate 실행");
		console.log(`새로운 속성 : ${newProps}`);
		console.log(`새로운 상태 : ${newState}`);
		return true;
	}

	componentWillUpdate(newProps, newState) {
		console.log("componentWillUpdate 실행");
		console.log(`새로운 속성 : ${newProps}`);
		console.log(`새로운 상태 : ${newState}`);
	}

	componentDidUpdate(oldProps, oldState) {
		console.log("componentDidUpdate 실행");
		console.log(`이전 상태 : ${oldProps}`);
		console.log(`이전 속성 : ${oldState}`);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount 실행");
	}

	render() {
		return <div>{this.props.time}</div>;
	}
}

ReactDOM.render(<Content />, document.getElementById("root"));

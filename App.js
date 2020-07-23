import React, { Component, Fragment } from 'react';
import './App.css';
// import Joke from './Joke';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
    }
    

// var unirest = require("unirest");

// var req = unirest("GET", "https://webknox-trivia-knowledge-facts-v1.p.rapidapi.com/trivia/search");

// req.query({
// 	"topic": "dog"
// });

// req.headers({
// 	"x-rapidapi-host": "webknox-trivia-knowledge-facts-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "cecc3a01f3msh3ad1f8c78be3775p163da2jsn14d409d6beee",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });





	componentDidMount() {
		fetch('https://official-joke-api.appspot.com/random_joke')
			.then((res) => res.json())
			.then((json) => {
				// console.log('json:', json);
				this.setState({ data: json });
				console.log(this.state.data.setup);
			});
	}

	handleClick = () => {
		fetch('https://official-joke-api.appspot.com/random_joke')
			.then((res) => res.json())
			.then((json) => {
				// console.log('json:', json);
				this.setState({ data: json });
				console.log(this.state.data.punchline);
			});
	};

	render() {
		return (
			<div className='App'>
				<h1> Dad Jokes</h1>
				<button onClick={this.handleClick}>FUNNY GUY! </button>
				<p>{this.state.data.setup}</p>
				<p>{this.state.data.punchline}</p>
			</div>
		);
	}
}
export default App;

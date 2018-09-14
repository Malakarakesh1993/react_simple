import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	  render() {
		var request = new XMLHttpRequest();

		request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
		request.onload = function () {

		  // Begin accessing JSON data here
		  var data = JSON.parse(this.response);

		  if (request.status >= 200 && request.status < 400) {
			data.forEach(movie => {
			  console.log(movie.title);
			  console.log(movie.description);
			});
		  } else {
			console.log('error');
		  }
		}

		request.send();
		
		return (
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		  </div>
		);
	  }
}

export default App;

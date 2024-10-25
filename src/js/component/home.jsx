import React, { useState, useEffect } from 'react';

const Home = () => {
	let counter = 0;
	let tensCounter = 0;
	let hunCounter = 0;
	let thouCounter = 0;
	let tenThouCounter = 0;
	let hunThouCounter = 0;

	
	function updateCounter() {
		document.getElementById('app').innerHTML =
		`<div style="display: flex; gap: 10px; background-color: black; color: white; padding: 10px; justify-content: center; font-size: 3rem;">
		  <div> IMAGE </div>
		  <div>${hunThouCounter}</div>
		  <div>${tenThouCounter}</div>
		  <div>${thouCounter}</div>
		  <div>${hunCounter}</div>
		  <div>${tensCounter}</div>
		  <div>${counter}</div>
		</div>`; // Display on the page

	// function updateCounter() {
	// 	// document.getElementById('app').innerHTML = hunThouCounter + "" + tenThouCounter + "" + thouCounter + "" + hunCounter + "" + tensCounter + "" + counter   //display on the page
	// 	document.getElementById('app').innerHTML = displayCount //display on the page


		console.log(counter); // This will display the counter value in the console
		counter++;

		if (counter === 10) {
			counter = 0
			tensCounter += 1;
		  }
		if (tensCounter === 10 ){
			tensCounter = 0;
			hunCounter += 1;
		}
		if (hunCounter === 10 ){
			hunCounter = 0;
			thouCounter += 1;
		}
		if (thouCounter === 10 ){
			thouCounter = 0;
			tenThouCounter += 1;
		}
		if (tenThouCounter === 10 ){
			tenThouCounter = 0;
			hunThouCounter += 1;
		}
		

		
	}
	
	// Call the updateCounter function every second (1000 milliseconds)
	setInterval(updateCounter, 10);

};

export default Home;
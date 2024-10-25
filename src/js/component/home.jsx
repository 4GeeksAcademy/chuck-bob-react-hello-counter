import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    // Initialize counters
    this.counter = 0;
    this.tensCounter = 0;
    this.hunCounter = 0;
    this.thouCounter = 0;
    this.tenThouCounter = 0;
    this.hunThouCounter = 0;
    this.interval = null;
  }

  componentDidMount() {
    // Start the interval when the component mounts
    this.interval = setInterval(() => {
      this.updateCounter();
    }, 10); // Set to 1000 ms (.01 second)
  }

  componentWillUnmount() {
    // Clear interval to prevent memory leaks
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateCounter() {
    // Increment the counters
    this.counter++;

    if (this.counter === 10) {
      this.counter = 0;
      this.tensCounter += 1;
    }
    if (this.tensCounter === 10) {
      this.tensCounter = 0;
      this.hunCounter += 1;
    }
    if (this.hunCounter === 10) {
      this.hunCounter = 0;
      this.thouCounter += 1;
    }
    if (this.thouCounter === 10) {
      this.thouCounter = 0;
      this.tenThouCounter += 1;
    }
    if (this.tenThouCounter === 10) {
      this.tenThouCounter = 0;
      this.hunThouCounter += 1;
    }

    // Force a re-render by calling setState
    this.forceUpdate();
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          gap: '10px',
          backgroundColor: 'black',
          color: 'white',
          padding: '3px',
          justifyContent: 'center',
          fontSize: '4rem',
        }}
      >
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>
  			<img
    			src="https://www.citypng.com/public/uploads/preview/white-clock-icon-symbol-png-11639648062guyflnf40u.png"
    			alt="Example Image"
    			style={{ width: '100px', height: '100px' }} 
  			/>
		</div>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>{this.hunThouCounter}</div>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>{this.tenThouCounter}</div>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>{this.thouCounter}</div>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>{this.hunCounter}</div>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>{this.tensCounter}</div>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>{this.counter}</div>
      </div>
    );
  }
}

export default Home;

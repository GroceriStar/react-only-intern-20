import React, { Component } from 'react';

class WeekChecker extends Component {
  render() {
    // Get current day
    let today = new Date().getDay();
    // If it is weekend
    if (today === 6 || today === 0)
      return <div>It's the weekend!</div>;
    // If it is weekday
    return <div>Sorry, today is definitely a workday.</div>;
  }
}

export default WeekChecker;
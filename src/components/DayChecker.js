import React, { Component } from 'react';

class DayChecker extends Component {
  getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }

  render() {
    // Get current date
    let today = new Date().getDay();
    let day = new Date().getDate();
    // If it is weekend
    if (today === 6 || today === 0)
      return <div>Today is {this.getDayName(today)}, the {day}.</div>;
    // If it is weekday
    return <div>Today is {this.getDayName(today)}, the {day}.</div>;
  }
}

export default DayChecker;
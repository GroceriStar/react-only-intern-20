import React, { Component } from 'react';

class DayChecker extends Component {
  getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }

  getMonthName(number) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[number];
  }

  render() {
    // Get current date
    let today = new Date().getDay();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    // If it is weekend
    if (today === 6 || today === 0)
      return <div>Today is {this.getDayName(today)}, {this.getMonthName(month)} {day} - You can watch TV all day today.</div>;
    // If it is weekday
    return <div>Today is {this.getDayName(today)}, {this.getMonthName(month)} {day} - You should go to work today.</div>;
  }
}

export default DayChecker;
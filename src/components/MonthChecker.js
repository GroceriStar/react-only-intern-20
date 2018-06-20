import React, { Component } from 'react';

class MonthChecker extends Component {
  getMonthName(number) {
    let months = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December'
    ];
    return months[number];
  }

  render() {
    // Get current month
    let month = new Date().getMonth();
    return <div>As I just said, the current month is {this.getMonthName(month)}.</div>;
  }
}

export default MonthChecker;
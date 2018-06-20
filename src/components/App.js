import { Button } from 'reactstrap';
import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import MonthChecker from './MonthChecker';

class App extends Component {
  render() {
    return [
      <Header />,
      <DayChecker />,
      <MonthChecker />
    ];
  }
}

export default App;

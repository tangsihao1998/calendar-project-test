import React, { Component } from 'react'
import './CalendarPage.scss';

import CalendarScreen from 'screens/CalendarScreen';

class CalendarPage extends Component {
  render() {
    return (
      <div className="CalendarPage">
        <CalendarScreen />
      </div>
    )
  }
}

export default CalendarPage;
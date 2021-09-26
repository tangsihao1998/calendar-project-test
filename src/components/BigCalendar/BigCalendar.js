import React, { Component } from 'react'
import './BigCalendar.scss';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


class BigCalendar extends Component {
  render() {
    return (
      <React.Fragment>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      </React.Fragment>
    )
  }
}

export default BigCalendar;
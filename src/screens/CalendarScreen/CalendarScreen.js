import React, { Component } from 'react';
import './CalendarScreen.scss';

import SmallCalendar from 'components/SmallCalendar';
import BigCalendar from 'components/BigCalendar';

class CalendarScreen extends Component {
  viewAllEvent = () => {
    console.log('View All Event')
  }

  render() {
    return (
      <div className="CalendarScreen">
        <div className="LeftSide__Container">
          <SmallCalendar />
          <div className="Event__Container">
            <div className="EventContainer__Header">
              <div className="Header__Left">
                <div className="Header__Title">Upcoming Events</div>
                <div className="Header__DateTime">Today, 4 Apr</div>
              </div>
              <div className="Header__Right">
                <button className="ViewAll__Btn" onClick={this.viewAllEvent}>View All</button>
              </div>
            </div>
          </div>
        </div>
        <div className="RightSide__Container">
          <BigCalendar />
        </div>
      </div>
    )
  }
}

export default CalendarScreen;
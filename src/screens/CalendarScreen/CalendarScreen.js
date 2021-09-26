import React, { Component } from 'react';
import './CalendarScreen.scss';

import SmallCalendar from 'components/SmallCalendar';
import BigCalendar from 'components/BigCalendar';
import EventCard from 'components/EventCard/EventCard';
// Import Redux
import { connect } from 'react-redux';
import actions from 'actions';
import selectors from 'selectors';

class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDisplay: '',
      eventsArray: [
        {
          title: 'First Session With Alex Stan',
          startTime: "2021-09-25T17:00:00.000Z",
          endTime: "2021-09-25T17:30:00.000Z",
          client: true,
          stream: true,
          backgroundColor: 'lightOrange',
        },
        {
          title: 'First Session With Alex Stan',
          startTime: "2021-09-25T17:00:00.000Z",
          endTime: "2021-09-25T17:30:00.000Z",
          client: false,
          stream: false,
          backgroundColor: 'darkOrange',
        },
        {
          title: 'First Session With Alex Stan',
          startTime: "2021-09-25T17:00:00.000Z",
          endTime: "2021-09-25T17:30:00.000Z",
          client: true,
          stream: true,
          backgroundColor: 'darkBlue',
        },
      ]
    }
  }

  viewAllEvent = () => {
    // Call API get all events
    console.log('View All Event')
  }

  convertDisplayDate = (dateSelect) => {
    let dateDisplay, monthDisplay, dayDisplay;
    const todayTime = new Date();
    if (dateSelect) {
      switch (dateSelect.getMonth()) {
        case 0: {
          monthDisplay = 'Jan';
          break;
        }
        case 1: {
          monthDisplay = 'Feb';
          break;
        }
        case 2: {
          monthDisplay = 'Mar';
          break;
        }
        case 3: {
          monthDisplay = 'Apr';
          break;
        }
        case 4: {
          monthDisplay = 'May';
          break;
        }
        case 5: {
          monthDisplay = 'Jun';
          break;
        }
        case 6: {
          monthDisplay = 'July';
          break;
        }
        case 7: {
          monthDisplay = 'Aug';
          break;
        }
        case 8: {
          monthDisplay = 'Sep';
          break;
        }
        case 9: {
          monthDisplay = 'Oct';
          break;
        }
        case 10: {
          monthDisplay = 'Nov';
          break;
        }
        case 11: {
          monthDisplay = 'Dec';
          break;
        }
        default:
          break;
      }
      switch (dateSelect.getDay()) {
        case 0: {
          dayDisplay = 'Sunday';
          break;
        }
        case 1: {
          dayDisplay = 'Monday';
          break;
        }
        case 2: {
          dayDisplay = 'Tuesday';
          break;
        }
        case 3: {
          dayDisplay = 'Wednesday';
          break;
        }
        case 4: {
          dayDisplay = 'Thursday';
          break;
        }
        case 5: {
          dayDisplay = 'Friday';
          break;
        }
        case 6: {
          dayDisplay = 'Saturday';
          break;
        }
        default:
          break;
      }
      if (dateSelect.getFullYear() === todayTime.getFullYear() && 
        dateSelect.getMonth() === todayTime.getMonth() && 
        dateSelect.getDate() === todayTime.getDate()) {
        dateDisplay = `Today, ${dateSelect.getDate()} ${monthDisplay}`;
      } else {
        dateDisplay = `${dayDisplay}, ${dateSelect.getDate()} ${monthDisplay}`;
      }
    }
    return dateDisplay;
  }

  render() {
    const { eventsArray } = this.state;
    const { selectedDate } = this.props;
    return (
      <div className="CalendarScreen">
        <div className="LeftSide__Container">
          <SmallCalendar />
          <div className="Event__Container">
            <div className="EventContainer__Header">
              <div className="Header__Left">
                <div className="Header__Title">Upcoming Events</div>
                <div className="Header__DateTime">{this.convertDisplayDate(selectedDate)}</div>
              </div>
              <div className="Header__Right">
                <button className="ViewAll__Btn" onClick={this.viewAllEvent}>View All</button>
              </div>
            </div>

            <div className="EventContainer__Card">
              {
                eventsArray.map(eachEvent => {
                  return (
                    <EventCard eventData={eachEvent}/>
                  );
                })
              }
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

const mapStateToProps = state => ({
  selectedDate: selectors.getSelectedDate(state),
});

const mapDispatchToProps = dispatch => ({
  // setSelectedDate: (selectedDate) => dispatch(actions.setSelectedDate(selectedDate)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen);
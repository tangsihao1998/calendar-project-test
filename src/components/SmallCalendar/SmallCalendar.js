import React, { Component } from 'react'
import './SmallCalendar.scss';
// import library
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// Import Redux
import { connect } from 'react-redux';
import actions from 'actions';
import selectors from 'selectors';

class SmallCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      dateChange: new Date()
    }
  }
  
  componentDidMount() {
    const { value } = this.state;
    const { setSelectedDate } = this.props;
    setSelectedDate(value);
  }

  onCalendarDateChange = ($event) => {
    const { setSelectedDate } = this.props;
    setSelectedDate($event);
    this.setState({
      value: $event
    })
    console.log("🚀 ~ file: SmallCalendar.js ~ line 18 ~ SmallCalendar ~ event", $event)
  }

  render() {
    return (
      <React.Fragment>
        <Calendar
          className="SmallCalendar"
          tileClassName="CalendarTitle"
          onChange={this.onCalendarDateChange}
          defaultValue={this.value}
          // calendarType="ISO 8601"
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  // openAddDateModal: selectors.getOpenAddDateModal(state),
});

const mapDispatchToProps = dispatch => ({
  setSelectedDate: (selectedDate) => dispatch(actions.setSelectedDate(selectedDate)),
  // setDisableAddDateModal: () => dispatch(actions.setDisableAddDateModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(SmallCalendar);
import React, { Component } from 'react'
import './EventCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faUser } from '@fortawesome/free-solid-svg-icons';

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  openProfile = () => {
    console.log('open profile');
  }

  onStreaming = () => {
    console.log('streaming');
  }

  displayEventTime = (eventData) => {
    let TimeDisplay;
    const startTime = new Date(eventData.startTime);
    const endTime = new Date(eventData.endTime);
    TimeDisplay =`${startTime.getHours()}:${startTime.getMinutes()} - ${endTime.getHours()}:${endTime.getMinutes()}`    
    return TimeDisplay;
  };

  render() {
    const { eventData } = this.props;
    console.log("🚀 ~ file: EventCard.js ~ line 19 ~ EventCard ~ render ~ eachEvent", eventData)    
    return (
      <div className="EventCard">
        <div className={`Hightlight 
          ${eventData.backgroundColor === 'lightOrange' ? 'darkBlue': ''}
          ${eventData.backgroundColor === 'darkOrange' ? 'darkBlue': ''}
          ${eventData.backgroundColor === 'darkBlue' ? 'darkOrange': ''}`}>
        </div>
        <div className={`Right__Container
          ${eventData.backgroundColor === 'lightOrange' ? 'lightOrange': ''}
          ${eventData.backgroundColor === 'darkOrange' ? 'darkOrange': ''}
          ${eventData.backgroundColor === 'darkBlue' ? 'darkBlue': ''}`}>
          <div className="Left__Content">
            <div className={`Content__Title  
            ${eventData.backgroundColor === 'lightOrange' ? 'darkBlue': ''}
            ${eventData.backgroundColor === 'darkOrange' ? 'darkBlue': ''}
            ${eventData.backgroundColor === 'darkBlue' ? 'white': ''}`}>
              {eventData.title}
            </div>
            <div className={`Content__time  
            ${eventData.backgroundColor === 'lightOrange' ? 'darkBlue': ''}
            ${eventData.backgroundColor === 'darkOrange' ? 'darkBlue': ''}
            ${eventData.backgroundColor === 'darkBlue' ? 'white': ''}`}>
              {this.displayEventTime(eventData)}
            </div>
            {
              eventData.client ? (
                <div className="Content__Profile">
                  <FontAwesomeIcon className="client__avatar" icon={faUser}/>
                  <div 
                    className={`redirectLink  
                    ${eventData.backgroundColor === 'lightOrange' ? 'darkBlue': ''}
                    ${eventData.backgroundColor === 'darkOrange' ? 'darkBlue': ''}
                    ${eventData.backgroundColor === 'darkBlue' ? 'white': ''}`}
                    onClick={this.openProfile}>
                    View Client Profile
                  </div>
                </div>
              ): (<React.Fragment></React.Fragment>)
            }
          </div>
          <div className="Right__Content">
            {
              eventData.stream ? (  
              <button className={`streamButton  
                ${eventData.backgroundColor === 'lightOrange' ? 'darkBlue': ''}
                ${eventData.backgroundColor === 'darkOrange' ? 'darkBlue': ''}
                ${eventData.backgroundColor === 'darkBlue' ? 'white': ''}`}
                onClick={this.onStreaming}>
                <FontAwesomeIcon className={`stream__icon  
                ${eventData.backgroundColor === 'lightOrange' ? 'white': ''}
                ${eventData.backgroundColor === 'darkOrange' ? 'white': ''}
                ${eventData.backgroundColor === 'darkBlue' ? 'darkBlue': ''}`} icon={faVideo}/>
              </button>
              ): (<React.Fragment></React.Fragment>)
            }
            {/* <hr className={`${sticky ? 'sticky--line': ''}`}/> */}
          
          </div>
        </div>
      </div>
    )
  }
}

export default EventCard;
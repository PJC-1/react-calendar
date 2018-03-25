import React from 'react';
import moment from 'moment';
import './calendar.css';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
  }

  state = {
    momentContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false
  }

  render() {
    return (
      <div className="calendar-container">
        <h2>Calendar</h2>
      </div>
    );
  }
}

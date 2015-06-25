/** @jsx React.DOM */
var React = require('react');
var MonthWeekBin = require('./month-week-bin');
var _  = require('underscore');

var MonthBoard = React.createClass({
  render: function () {
    var monthWeeks = _.map(this.props.monthWeeks, function (weekData, key) {
      return <MonthWeekBin key={ key } weekData={ weekData } />;
    });

    return (
      <div>
        <h4>Month EventsContainer</h4>
        { monthWeeks }
      </div>
    );
  }
});

module.exports = MonthBoard;
var heading = React.createElement('h1', {}, 'Tap Room');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
var app = React.createElement('div', {}, heading);

ReactDOM.render(
  app,
  document.getElementById('taproom-app-root')
);
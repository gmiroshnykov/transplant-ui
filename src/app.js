var React = require('react');
var TransplantApp = require('./components/TransplantApp.jsx');

// FIXME: fetch repositories from backend
var REPOSITORIES = [];

React.renderComponent(
  TransplantApp({repositories: REPOSITORIES}),
  document.getElementById('app')
);

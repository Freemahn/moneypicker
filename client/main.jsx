import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

let App = React.createClass({
    render(){
        return(
            <h1>Hello World</h1>
        )
    }
});

Meteor.startup(function(){
    // Render app into root div
    ReactDOM.render(<App/>, document.getElementById('root'));
});
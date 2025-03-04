import React, { Component } from 'react';
import cookie from 'react-cookies';

class R086_CookieLoad extends Component {
  componentDidMount(){
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save(
      'userid',
      "This is content of cookie.",
      {
        path: '/',
        expires, 
      }
    );

    setTimeout(() => {
      alert(cookie.load('userid'));
    }, 1000);

  }
  render() {
    return (
      <div>
        <h3>react-cookies Load</h3>
      </div>
    );
  }
}

export default R086_CookieLoad;
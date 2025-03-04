import React, { Component } from 'react';
import cookie from 'react-cookies';

class R087_CookieRemove extends Component {
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
      cookie.remove('userid', {path: '/'});
    }, 1000);

    setTimeout(() => {
      alert(cookie.load('userid'));
    }, 2000);
  }
  render() {
    return (
      <div>
        <h3>react-cookies Remove</h3>
      </div>
    );
  }
}

export default R087_CookieRemove;
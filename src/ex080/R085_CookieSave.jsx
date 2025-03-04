import React, { Component } from 'react';
import cookie from 'react-cookies';

class R085_CookieSave extends Component {

  componentDidMount(){
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60); //1시간 추가
    cookie.save(
      'userid', //쿠키별로 주는 키값(id)
      'react',  //쿠키 내용
      {
        path:'/', // 경로를 '/' 줬을 경우 -> 모든 페이지에서 쿠키에 접근 가능. 주소를 통해서 접근 가능한 주소 등록가능
        expires, //쿠키 유효시간
        //secure: true, //https일 때 저장되도록
        //httpOnly: true, //javascript에서 쿠키 접근이 차단
      }
    );
  }

  render() {
    return (
      <div>
        <h3>react-cookiesSave</h3>
      </div>
    );
  }
}

export default R085_CookieSave;
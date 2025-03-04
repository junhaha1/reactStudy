import React, { Component } from 'react';

class R074_ReactCurrying extends Component {

  plusNumOrString(c, d){
    return c + d;
  }

  //return값이 함수인 함수를 Currying 함수
  plusFunc1(a) {
    return function(b) { 
      return this.plusNumOrString(a, b);
    }.bind(this)
  }

  plusFunc2 = a=> b=> this.plusNumOrString(a, b); //plusFunc1과 같은 함수 (Arrow로 표현)

  plusFunc(a) {
    return this.plusFunc1(a)(200); //첫번째 함수의 값 a, 두번째 값 200
  }

  render() {
    return (
      <div>
        <input type='button' value={'NumberPlus'} 
            onClick={e => console.log(this.plusFunc(100))}></input>
        <input type='button' value={'StringPlus'} 
            onClick={e => console.log(this.plusFunc('React'))}></input>
      </div>
    );
  }
}

export default R074_ReactCurrying;
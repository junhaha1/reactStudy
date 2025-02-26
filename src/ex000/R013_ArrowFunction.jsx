import { Component } from "react";

class R013_ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: "ReactTest",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(1); //내부 함수
    this.Function2(1, 1); //화살표 함수
    this.Function3(); //
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + ". Function");
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + ". Arrow Function : " + this.state.arrowFunc);
    console.log(this);
  };

  Function3() {
    // 콜백함수의 내부에서는 컴포넌트에 this로 접근이 불가능 하므로 변수에 할당.
    let this_bind = this;
    setTimeout(function () {
      console.log(this_bind.state.num + ". Es5 Callback Function noBind : ");
      // 콜백함수의 내부에서는 this는 window객체
      console.log(this);
      // window객체로 state에 접근하려는 시도는 에러 발생
      console.log(this.state.arrowFunc);
    }, 100); // 0.1초 뒤에 넘겨준 콜백함수를 호출
  }

  Function4() {
    // 콜백 함수를 this에 bind 하면 해당 함수 내부에서 this를 이용하여 컴포넌트에 접근 가능
    setTimeout(
      function () {
        console.log("4. Es5 Callback Function Bind : " + this.state.arrowFunc);
      }.bind(this),
      100
    );
  }

  Function5 = (num1, num2, num3) => {
    // 콜백 함수를 화살표 함수로 구현하면 this에 bind 하지 않아도 함수 내부에서
    // this로 컴포넌트에 접근이 가능
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + ". Arrow Callback Function : " + this.state.arrowFunc);
    }, 100);
  };

  render() {
    return <h2>[ THIS IS ArrowFunction ]</h2>;
  }
}

export default R013_ArrowFunction;
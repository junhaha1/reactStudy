import { makeAutoObservable} from 'mobx';

class CounterStore {
  number = 0;

  constructor() {
    makeAutoObservable(this); 
    //자동으로 모든 Properties는 observer가 됨. Properties를 변경시키는 것들은 action이 됨. 
  };

  increase = () => {
    console.log('증가');
    this.number++;
  };

  decrease = () => {
    console.log('감소');
    this.number--;
  };
}

export default CounterStore;
import { observable, action } from 'mobx';

class ExampleStore {
  @observable text = 'foo';

  @action setText = (text: string): void => {
    this.text = text;
  };
}

export default ExampleStore;

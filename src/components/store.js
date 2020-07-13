import { observable, decorate } from "mobx";


class MainStore {
  ufuk ="ufuk";
  pagenum = 0;
  token = null;
  desks= [];
  group = null;
  user = {
    
  };
  uri = "http://192.168.0.23:3000/"
}

decorate(MainStore, {
  pagenum: observable,
  token: observable,
  desks: observable,
  user: observable
})

const store = new MainStore()

export default store;

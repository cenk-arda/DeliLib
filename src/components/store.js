import { observable, decorate } from "mobx";


class MainStore {
  ufuk ="ufuk";
  pagenum = 0;
  token = null;
  desks= [];
  group = null;
  user = {

  }
}

decorate(MainStore, {
  pagenum: observable,
  token: observable,
  desks: observable,
  user: observable
})

const store = new MainStore()

export default store;

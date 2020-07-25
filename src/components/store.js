import { observable, decorate, action  } from "mobx";


class MainStore {
   ufuk ="ufuk";
  pagenum = 1;
  token = null;
  desks= [];
  group = null;
  user = {
  };


  uri = "https://polar-hollows-42744.herokuapp.com/"
}

decorate(MainStore, {
  pagenum: observable,
  token: observable,
  desks: observable,
  user: observable
})


const store = new MainStore()

export default store;

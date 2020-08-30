import { observable, decorate, action  } from "mobx";


class MainStore {
   ufuk ="ufuk";
  pagenum = 0;
  token = null;
  desks= [];
  group = null;
  groupNames = [];
  user = {

  };
  online = false;
  library = {};
  libraries = [];
  email= "";
  title = "";
  uri = "https://polar-hollows-42744.herokuapp.com/"
}

decorate(MainStore, {
  pagenum: observable,
  token: observable,
  desks: observable,
  user: observable,
  email: observable,
  libraries: observable,
  online: observable,
  group: observable,
  title: observable,
  groupNames: observable,
  library: observable
})


const store = new MainStore()

export default store;

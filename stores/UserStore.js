import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];
  page = 1;

  constructor() {
    makeAutoObservable(this);
  }

  addUsers(users) {
    this.users = [...this.users, ...users];
    this.page += 1;
  }
}

export default UserStore;

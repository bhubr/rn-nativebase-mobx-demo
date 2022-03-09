import { makeAutoObservable } from "mobx";

class UserStore {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  addUsers(users) {
    this.users = [...this.users, ...users];
  }
}

export default UserStore;

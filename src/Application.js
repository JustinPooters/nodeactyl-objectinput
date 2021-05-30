const Nodeactyl = require('nodeactyl');

class Application {
  constructor(host, key) {
    this.hostUrl = host;
    this.apiKey = key;
    this.api = new Nodeactyl.NodeactylApplication(host, key);
  }

  getAllUsers() {
    return new Promise((res, rej) => {
      this.api.getAllUsers().then((response) => {
          return console.log('mommy');
      }).catch(err => console.log(err));
    });
  }

  getUserDetails(object) {
    return new Promise((res, rej) => {
      this.api.getUserDetails(object.userId).then((response) => {
          return res(response);
      }).catch(err => console.log(err));
    });
  }

  createUser(object) {
    return new Promise((res, rej) => {
      this.api.createUser(object.email, object.username, object.firstName, object.lastName).then((response) => {
          return res(response);
      }).catch(err => console.log(err));
    });
  }
}

module.exports = Application;
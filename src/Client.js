const Nodeactyl = require('nodeactyl');

class Client {
  constructor(host, key) {
    this.hostUrl = host;
    this.apiKey = key;
    this.api = new Nodeactyl.NodeactylClient(host, key);
  }

  getAccountDetails() {
    return new Promise((res, rej) => {
      this.api.getAccountDetails().then((response) => {
          return res(response);
      }).catch(err => console.log(err));
    });
  }

  getAccountPermissions() {
    return new Promise((res, rej) => {
      this.api.getAccountPermissions().then((response) => {
          return res(response);
      }).catch(err => console.log(err));
    });
  }

  getServerDetails(object) {
    return new Promise((res, rej) => {
      this.api.getServerDetails(object.serverId).then((response) => {
          return res(response);
      }).catch(err => console.log(err));
    });
  }
}

module.exports = Client;
class Database {
  constructor({ connectioString }) {
    this.connectioString = connectioString
  }

  async sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  async connect() {
    await this.sleep(100)
    return this
  }

  async find(query) {
    await this.sleep(100)
    return [{name: 'JhonatanSousa'}]
  }
}

module.exports = Database
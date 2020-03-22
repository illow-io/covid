import db from './db';

class DataModel {
  constructor(db) {
    this.db = db;
  }
  async save(data) {
    return db.save(data);
  }

  async update(id, data) {
    db.update(id, data);
  }

  async remove(id) {
    db.remove(id);
  }

  async get() {
    db.getAll();
  }

  async getById(id) {
    db.get(id);
  }
}

export default new DataModel(db);

const save = data => {
  db.save(data);
};

const update = (id, data) => {
  db.update(id, data);
};

const remove = id => {
  db.remove(id);
};

const get = () => {
  db.getAll();
};

const getById = id => {
  db.get(id);
};

export { save, update, get, remove, getById };

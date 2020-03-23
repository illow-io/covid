const store = [];

export default {
  save: (id, data) => store.push({ id, data }),

  get: () => store,

  save: data => store.push({ data }),

  remove: id => store.filter(i => i.id !== id),

  getAll: id => store.filter(i => i.id === id)
};

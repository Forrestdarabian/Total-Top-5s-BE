const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("lists");
}

function findById(id) {
  return db("lists")
    .where({ id: Number(id) })
    .first();
}

function insert(user) {
  return db("lists")
    .insert(user)
    .then((ids) => ({ id: ids[0] }));
}

function update(id, user) {
  return db("lists").where("id", Number(id)).update(user);
}

function remove(id) {
  return db("lists").where("id", Number(id)).del();
}

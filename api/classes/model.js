const db = require("../../data/db-config")

function find() {
    return db("classes").orderBy("class_id")
}

function findBy(classes) {
    return db("classes").where(classes).first()
}

async function add() {
    return db("classes").where("name", lesson.name).first()
}

async function update(changes, id) {
    const data = await db("classes").where("class_id", id).update(changes)
    return db("classes").where("class_id", id).first()
}

async function remove(id) {
    return db("classes").where({ class_id: id }).del()
}

module.exports = {
  find,
  findBy,
  add,
  update,
  remove
}
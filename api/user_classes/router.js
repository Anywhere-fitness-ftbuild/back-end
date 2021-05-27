const router = require("express").Router()

const UserClass = require("./model")

const { valPair_onPost, valPair_onDelete } = require("../middleware")

router.get("/devtest", async (req, res, next) => {
  try {
    const data = await UserClass.find()
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const data = await UserClass.findBy({ user_id: req.params.id })
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/class/:id", async (req, res, next) => {
  try {
    const data = await UserClass.findByClass(req.params.id)
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.post("/", valPair_onPost, async (req, res, next) => {
  try {
    let data = await UserClass.add(req.body)
    data = data[0]
    return res.status(200).json({ message: `User ${req.body.user_id} was added to class ${req.body.class_id}`, data })  
  } catch (err) {
    next(err)
  }
})

router.delete("/", valPair_onDelete, async (req, res, next) => {
  try {
    let data = await UserClass.remove(req.body)
    data = data[0]
    return res.status(200).json(`User ${req.body.user_id} was removed from class ${req.body.class_id}`)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
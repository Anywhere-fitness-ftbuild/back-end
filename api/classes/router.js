const router = require("express").Router()
const Class = require("./model")
const { valClassId, valClass, } = require("../middleware")

router.get("/", async (req, res, next) => {
  try {
    const data = await Class.find()
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", valClassId, async (req, res, next) => {
  try {
    const data = await Class.findBy({ class_id: req.params.id })
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    return res.status(200).json("class posted")
  } catch (err) {
    next(err)
  }
})
 
router.put("/:id", valClassId, valClass, async (req, res, next) => {
  try {
    const data = await Class.update(req.body, req.params.id)
    return res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', valClassId, async (req, res) => {
  Class.remove(req.params.id)
  return res.status(200).json(`The class with id ${req.params.id} was removed`)  
});

module.exports = router

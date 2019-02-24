const express = require('express');
const router = express.Router();
import Mongo from '../modules/mongo.js';



router.get('/', async (req, res)=> {
  const todos = await Mongo.getCollection();
  res.send(await todos.find({}).toArray());  
  res.send(todos)
});

module.exports = router;

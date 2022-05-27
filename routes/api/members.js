const express = require("express");
const member = require("../../Members");
const route = express.Router();


// creating route for gettig members
route.get("/", (req, res) => {
    res.json(member);
  });
  
  // getting single member
  route.get('/:id', (req, res) =>{
      // check if memeber exist using some method
      const found = member.some(mem => mem.id === parseInt(req.params.id));
  
      // check if member found
      if (found){
          // use filter to get user with that id
          res.json(member.filter(mem => mem.id === parseInt(req.params.id)));
      } else{
          res.status(400).json({msg: `member with id ${req.params.id} not found`});
      }
  });

  module.exports = route;
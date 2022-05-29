const { Router } = require("express");
const express = require("express");
const member = require("../../Members");
const route = express.Router();
const uuid = require("uuid");

// creating route for gettig members
route.get("/", (req, res) => {
  res.json(member);
});

// getting single member
route.get("/:id", (req, res) => {
  // check if memeber exist using some method
  const found = member.some((mem) => mem.id === parseInt(req.params.id));

  // check if member found
  if (found) {
    // use filter to get user with that id
    res.json(member.filter((mem) => mem.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `member with id ${req.params.id} not found` });
  }
});

//   Create members
route.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  //   checking of email and name are submitted
  if (!newMember.email || !newMember.name) {
    return res.status(400).json({ msg: "Email and Name are required" });
  }

  // if submitted then push or add it to the existing memeber object
  member.push(newMember);
  // res.redirect('/');
  // print it out
  res.json(member);
});


// Update single member
route.put("/:id", (req, res) => {
    // check if memeber exist using some method
    const found = member.some((mem) => mem.id === parseInt(req.params.id));
  
    // if member found
    if (found) {

      // variable to hold data to replace existing member
      const updMember = req.body;

    //   lood through member
      member.forEach(mbr =>{
        //   check if the member in path is the one we want
        if (mbr.id === parseInt(req.params.id)){
            // if name or email provided update it else return existing one
            mbr.name = updMember.name ? updMember.name : mbr.name;
            mbr.email = updMember.email ? updMember.email : mbr.email;

            // returning the updated memeber
            res.json({msg: 'Memeber Updated', mbr});
        }
      });  
    } else {
      res.status(400).json({ msg: `member with id ${req.params.id} not found` });
    }
  });


  // deleting single member
route.delete("/:id", (req, res) => {
    // check if memeber exist using some method
    const found = member.some((mem) => mem.id === parseInt(req.params.id));
  
    // if member found
    if (found) {
      // return all members excepts the one we have deleted
      res.json({msg: 'Member deleted..!',member: member.filter((mem) => mem.id !== parseInt(req.params.id))});
    } else {
      res.status(400).json({ msg: `member with id ${req.params.id} not found` });
    }
  });

module.exports = route;

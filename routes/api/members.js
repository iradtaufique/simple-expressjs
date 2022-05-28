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
  // print it out
  res.json(member);
});

module.exports = route;

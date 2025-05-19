const express = require("express");
const routes = express.Router();
routes.get("/test", (req, res) => {
    // console.log("works")
    // res.json("azhan")
    // console.log(req.query.name);
})
module.exports = routes;

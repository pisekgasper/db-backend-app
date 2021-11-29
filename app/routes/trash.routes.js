module.exports = app => {
    const trash = require("../controllers/trash.controller.js");

    var router = require("express").Router();

    // Query the trash database
    router.get("/", trash.query);

    app.use('/api/trash', router);
};
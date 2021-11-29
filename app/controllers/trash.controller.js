const db = require("../models");
const { QueryTypes } = require('sequelize');

exports.query = async (req, res) => {
    if (req.query.q === undefined) {
        console.log("Parameter undefined!");
        res.send(undefined);
    }
    else {
        await db.sequelize.query(req.query.q, { type: QueryTypes.SELECT })
        .then(result => res.send(result))
        .catch(e => {
            res.send("Are you dumb?");
            console.log(e);
        });
    }
};
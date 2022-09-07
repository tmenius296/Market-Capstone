const database = require("./database");
const { connection, plan } = database;

module.exports = {
  getPlan: (req, res) => {
    console.log(req.query.userkey);

    try {
      connection
        .sync({
          logging: console.log,
          force: true,
        })
        .then(() => {
          return plan.findAll();
        })
        .then((data) => {
          res.status(200).send(data);
        });
    } catch {
      res.status(400).send();
    }
  },
  postPlan: (req, res) => {
    try {
      connection
        .sync({
          logging: console.log,
          force: true,
        })
        .then(() => {
          plan.create({
            mission: req.body.plan.mission,
            strengths: req.body.plan.strengths,
            targets: req.body.plan.strengths,
            goals: req.body.plan.goals,
          });
        })
        .then(() => {
          console.log("Connection successful!");
        })
        .catch((err) => {
          console.log("There's been some sort of error");
        });
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
};

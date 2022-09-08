const database = require("./database");
const { connection, plan, user } = database;

module.exports = {
  getUser: async (req, res) => {
    try {
      connection
        .sync({
          logging: console.log,
        })
        .then(async () => {
          console.log(user.findAll());
          return user.findAll(); //TODO return matching user keys
        })
        .then((data) => {
          res.status(200).send(data);
        });
    } catch {
      console.log("there has been a getuser error");
      res.status(400).send();
    }
  },
  postUser: async (req, res) => {
    try {
      connection
        .sync({
          logging: console.log,
        })
        .then(async () => {
          await user.create({
            userKey: req.body,
          });
        })
        .then(() => {
          console.log("Connection successful!");
        })
        .catch((err) => {
          console.log("There's been a postUser error");
        });
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },

  getPlan: async (req, res) => {
    try {
      connection
        .sync({
          logging: console.log,
        })
        .then(async () => {
          const plans = await plan.findAll();
          console.log("All plans", JSON.stringify(plans, null, 2));
          const convertedPlans = plans.map((plan) => ({
            mission: plan.mission,
            strengths: plan.strengths,
            targets: plan.targets,
            goals: plan.goals,
            userKey: plan.userKey,
          }));
          return convertedPlans;
        })
        .then((data) => {
          res.status(200).send(data);
        });
    } catch {
      console.log("there has been a get plan error");
      res.status(400).send();
    }
  },

  postPlan: async (req, res) => {
    try {
      connection
        .sync({
          logging: console.log,
        })
        .then(async () => {
          await plan.create({
            mission: req.body.mission,
            strengths: req.body.strengths,
            targets: req.body.targets,
            goals: req.body.goals,
            userKey: req.body.userKey,
          });
        })
        .then(() => {
          console.log("Connection successful!");
        })
        .catch((err) => {
          debugger;
          console.log("There's been a postPlan error");
        });
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
};

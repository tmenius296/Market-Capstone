let plans = ["plan1"];

module.exports = {
  getPlan: (req, res) => {
    try {
      if (plans.length > 0) {
        res.status(200).send(plans);
      } else {
        res.status(400).send("No plans match that user key!");
      }
    } catch {
      res.status(400).send();
    }
  },
  postPlan: (req, res) => {
    try {
      plans.push(req.body.plan);
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
};

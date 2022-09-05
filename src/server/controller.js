let names = [];

module.exports = {
  getHint: (req, res) => {
    const hints = [
      "Try playing using your hands",
      "Alt+F4 to boost attach power!",
      "You're too good to need hints, you got this",
    ];
    let randomIndex = Math.floor(Math.random() * hints.length);
    let randomHint = hints[randomIndex];

    res.status(200).send(randomHint);
  },
  getAllNames: (req, res) => {
    try {
      if (names.length > 0) {
        res.status(200).send(names);
      } else {
        res.status(200).send("No names to display!");
      }
    } catch {
      res.status(400).send();
    }
  },
  postName: (req, res) => {
    try {
      names.push(req.body.name);
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
  deleteNames: (req, res) => {
    try {
      names = [];
      res.status(200).send();
    } catch {
      res.status(400).send();
    }
  },
};

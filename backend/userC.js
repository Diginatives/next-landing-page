const Userdata = require("./userM");
const { reminderFunction } = require("./commen");
module.exports.saveNewUser = async (req, res) => {
  try {
    const { name, company, email, phone, project } = req.body;
    const newUsers = new Userdata({
      name,
      company,
      email,
      phone,
      project,
    });
    const data = await newUsers.save();
    if (data) {
      reminderFunction(data);
      res.status(201).send(data);
    } else {
      res.status(501).json({ error: err.message });
    }
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
};

const newUser = require("../model/newUser");

class CreateUser {
  async store(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    let user = await newUser.findOne({ email });

    if (!user) {
      newUser.create({ email }, { password });
    } else return alert("User already exists");
  }
}

module.exports = new CreateUser();

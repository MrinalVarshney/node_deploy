const fs=require('fs')
const data=JSON.parse(fs.readFileSync('data.json'))
const users=data.users;


exports.createUser = (req, res) => {
  users.push(req.body);
  res.json(users);
};

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex((p) => p.id === id);
  users.splice(index, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
};

exports.updateUser = (req, res) => {
  (req, res) => {
    const id = +req.params.id;
    const index = users.findIndex((p) => p.id === id);
    const user = users.find((p) => p.id === id);
    users.splice(index, 1, { ...user, ...req.body });
    res.send(201).json(req.body);
  };
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const index = users.findIndex((p) => p.id === id);
  const user = users.find((p) => p.id === id);
  users.splice(index, 1);
  res.json(user);
};

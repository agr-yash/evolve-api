const getAllUsers = async (req, res) => {
  res.status(200).json({ name: "Yash" });
};

module.exports = { getAllUsers };

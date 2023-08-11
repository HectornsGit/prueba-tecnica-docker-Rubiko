const getGreetings = (req, res, next) => {
  const response = { status: "ok" };

  if (process.env.GREETINGS) response.message = process.env.GREETINGS;

  res.status(200).send(response);
};

module.exports = getGreetings;

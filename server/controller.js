let newsletterEmailArray = [];

function newsletterSignUp(req, res) {
  console.log("we done got here");
  console.log(req.body);
  const { newsletterEmailSubmission } = req.body;
  console.log(newsletterEmailSubmission);
  newsletterEmailArray.push(newsletterEmailSubmission);
  console.log(newsletterEmailArray);
  res
    .status(200)
    .send(`${newsletterEmailSubmission} has successfully been submitted.`);
}

module.exports = { newsletterSignUp };

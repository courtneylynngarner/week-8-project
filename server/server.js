const express = require("express");
const cors = require("cors");

const app = express();

const ctrl = require("./controller");

app.use(cors());

app.use(express.json());

app.post("/api/newsletter-sign-up", ctrl.newsletterSignUp);

app.listen(4000, () => console.log("Server says Hi!"));

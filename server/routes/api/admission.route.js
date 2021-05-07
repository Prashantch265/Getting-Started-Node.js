const express = require("express");
const { check, validationResult } = require("express-validator");
const stdCtrl = require("../../controllers/student.controller");

const router = express.Router();

router.route("/admission").post(
  check("firstname", "First name is required")
    .notEmpty()
    .trim()
    .matches(/^[A-Za-z]+$/),
  check("lastname", "Last name is required")
    .notEmpty()
    .trim()
    .matches(/^[A-Za-z]+$/),
  check("dob", "Enter Date Of Birth").notEmpty().isDate(),
  check("gender", "Enter Gender").notEmpty(),
  check("contact", "Enter Valid Phone no.").notEmpty().isLength({ max: 10 }),
  check("email", "Please include a valid email").isEmail(),
  check(
    [
      "permanent_province",
      "permanent_district",
      "permanent_municipality",
      "permanent_wardno",
    ],
    "Please Enter Permanent Address"
  ).notEmpty(),
  check("schoolName", "Please Enter School Name").notEmpty().trim(),
  check("schoolAddress", "Please Enter School Address").notEmpty(),
  check("percentageGPA1", "Please Enter SEE GPA or Percentage").notEmpty(),
  check("passedYear1", "Please Enter SEE Passed Year").notEmpty(),
  check("highschoolName", "Please Enter High School Name").notEmpty().trim(),
  check("highschoolAddress", "Please  Enter High School Address").notEmpty(),
  check("percentageGPA2", "Please Enter +2 GPA or Percentage").notEmpty(),
  check("stream", "Please Enter Your Stream").notEmpty(),
  check("program", "Please Select A Program").notEmpty(),
  stdCtrl.create
);

module.exports = router;

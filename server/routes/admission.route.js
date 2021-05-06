const express = require("express");
const { check } = require("express-validator");
const admissionCtrl = require("../controllers/admission.controller");

const router = express.Router();

router.route("/admission").post(
  check("firstname")
    .notEmpty()
    .withMessage("Please Enter First Name")
    .isLength({ min: 3 })
    .withMessage("enter at least 3 charachters")
    .matches(/^[A-Za-z]+$/)
    .withMessage("only alphabets are allowed")
    .trim()
    .escape(),
  check("lastname")
    .notEmpty()
    .withMessage("Please Enter First Name")
    .isLength({ min: 3 })
    .withMessage("enter at least 3 charachters")
    .matches(/^[A-Za-z]+$/)
    .withMessage("only alphabets are allowed")
    .trim()
    .escape(),
  check("dob")
    .notEmpty()
    .withMessage("Please Enter DOB")
    .isDate()
    .withMessage("Invalid date"),
  check("gender").notEmpty().withMessage("Plese Choose Gender"),
  check("contact")
    .notEmpty()
    .withMessage("Please Enter Phone no.")
    .isLength({ max: 10 })
    .withMessage("Please Enter A Valid Phone no."),
  check("email").isEmail().withMessage("Please Enter A Valid Email"),
  check("province1.*.district1.*.municipality1.*.ward1")
    .notEmpty()
    .withMessage("Please Enter Permanent Address"),
  check("schoolname1").notEmpty().withMessage("Please Enter School Name"),
  check("schooladdress1").notEmpty().withMessage("Please Enter School Address"),
  check("percentageGPA1")
    .notEmpty()
    .withMessage("Please Enter SEE GPA or Percentage"),
  check("passedyear1")
    .notEmpty()
    .custom((value) => {
      if (!value.match(/^\d{4}$/))
        throw new Error("Please Enter SEE Passed Year");
    }),
  check("schoolname2").notEmpty().withMessage("Please Enter High School Name"),
  check("schooladdress2")
    .notEmpty()
    .withMessage("Please Enter High School Address"),
  check("percentageGPA2")
    .notEmpty()
    .withMessage("Please Enter +2 GPA or Percentage"),
  check("stream").notEmpty().withMessage("Please Select Your Stream"),
  check("passedyear2")
    .notEmpty()
    .custom((value) => {
      if (!value.match(/^\d{4}$/))
        throw new Error("Please Enter SEE Passed Year");
    }),
  check("program").notEmpty().withMessage("Please Select Program"),
  admissionCtrl.create
);

module.exports = router;

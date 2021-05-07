const Student = require("../../database/models/students.model");

const create = async (req, res) => {
  const {
    firstname,
    midname,
    lastname,
    dob,
    gender,
    contact,
    email,
    permanent_province,
    permanent_district,
    permanent_municipality,
    permanent_wardno,
    temporary_province,
    temporary_district,
    temporary_municipality,
    temporary_wardno,
    fathersName,
    fathersOccupation,
    fathersPhone,
    mothersName,
    mothersOccupation,
    mothersPhone,
    guardiansName,
    guardiansOccupation,
    guardiansPhone,
    schoolName,
    schoolAddress,
    percentageGPA1,
    passedYear1,
    highschoolName,
    highschoolAddress,
    percentageGPA2,
    stream,
    passedYear2,
    program,
  } = req.body;

  try {
    const student = Student.build({
      firstname: firstname,
      midname: midname,
      lastname: lastname,
      dob: dob,
      gender: gender,
      contact: contact,
      email: email,
      permanent_province: permanent_province,
      permanent_district: permanent_district,
      permanent_municipality: permanent_municipality,
      permanent_wardno: permanent_wardno,
      temporary_province: temporary_province,
      temporary_district: temporary_district,
      temporary_municipality: temporary_municipality,
      temporary_wardno: temporary_wardno,
      fathersName: fathersName,
      fathersOccupation: fathersOccupation,
      fathersPhone: fathersPhone,
      mothersName: mothersName,
      mothersOccupation: mothersOccupation,
      mothersPhone: mothersPhone,
      guardiansName: guardiansName,
      guardiansOccupation: guardiansOccupation,
      guardiansPhone: guardiansPhone,
      schoolName: schoolName,
      schoolAddress: schoolAddress,
      percentageGPA1: percentageGPA1,
      passedYear1: passedYear1,
      highschoolName: highschoolName,
      highschoolAddress: highschoolAddress,
      percentageGPA2: percentageGPA2,
      stream: stream,
      passedYear2: passedYear2,
      program: program,
    });

    await student.save();

    return res.status(200).json(student);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const update = async(req, res) => {
  const {} = req.body;
}
module.exports = {create};
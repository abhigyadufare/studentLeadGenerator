// import express from "express";
const express = require('express');
const createStudentProfile = require('../controller/studentForm.js');

const router = express.Router();

router.route("/form").post(createStudentProfile);

module.exports = router;
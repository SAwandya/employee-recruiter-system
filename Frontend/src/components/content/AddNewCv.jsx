import React from "react";
import ReusableForm from "../ReusableForm";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const AddNewCv = () => {
  const [applyas, setApplyas] = React.useState(null);

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      trueAndCorrect: data.trueAndCorrect[0],
    };

    console.log(formData);

    await axios
      .post("http://localhost:3000/api/user", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fields1 = [
    { type: "title", label: "About User" },

    {
      name: "gender",
      label: "GENDER",
      type: "radio",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      rules: { required: "Gender is required" },
    },
    {
      name: "fullName",
      label: "FULL NAME",
      type: "text",
      rules: { required: "Full Name is required" },
    },
    {
      name: "nameWithInitials",
      label: "NAME WITH INITIALS",
      type: "text",
      rules: { required: "Name with initials is required" },
    },
    {
      name: "postalAddress",
      label: "POSTAL ADDRESS",
      type: "text",
      rules: { required: "Postal address is required" },
    },
    {
      name: "district",
      label: "DISTRICT",
      type: "text",
      rules: { required: "District is required" },
    },
    {
      name: "dateOfBirth",
      label: "DATE OF BIRTH",
      type: "date",
      rules: { required: "Date of birth is required" },
    },
    {
      name: "nic",
      label: "NIC",
      type: "text",
      rules: {
        required: "NIC is required",
        pattern: {
          value: /^[0-9]{9}[vVxX]|[0-9]{12}$/,
          message: "NIC must be 9 digits followed by 'v/V' or 12 digits",
        },
      },
    },
    {
      name: "mobileNo",
      label: "MOBILE NUMBER",
      type: "number",
      rules: {
        required: "Mobile number is required",
        minLength: {
          value: 10,
          message: "Mobile number must be 10 digits",
        },
      },
    },
    {
      name: "LandPhoneNo",
      label: "LAND PHONE NUMBER",
      type: "number",
    },
    {
      name: "email",
      label: "EMAIL",
      type: "email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email format",
        },
      },
    },
    {
      name: "institute",
      label: "INSTITUTE",
      type: "select",
      options: [
        { value: "sliit", label: "SLIIT" },
        { value: "iit", label: "IIT" },
      ],
      rules: { required: "Institute is required" },
    },

    { type: "title", label: "Type Of Internship And Qualifications" },

    {
      name: "ApplyAs",
      label: "APPLY AS",
      type: "radio",
      options: [
        { value: "data entry operator", label: "DATA ENTRY OPERATOR" },
        { value: "internship", label: "INTERNSHIP" },
      ],
      onChange: (e) => setApplyas(e.target.value),
      rules: { required: "Please select an application type" },
    },
    {
      type: "fullcontent",
      label:
        "O/L RESULT FOR MATHS, SCIENCE AND ENGLISH ARE COMPULSORY. PLEASE USE THIS FORMAT TO ENTER YOUR RESULTS - (SUBJECT: RESULT)",
      gridSize: { md: 12 },
    },
    { name: "olsubject1", label: "Subject 01", type: "text" },
    { name: "olsubject2", label: "Subject 02", type: "text" },
    { name: "olsubject3", label: "Subject 03", type: "text" },
    { name: "olsubject4", label: "Subject 04", type: "text" },
    { name: "olsubject5", label: "Subject 05", type: "text" },
    { name: "olsubject6", label: "Subject 06", type: "text" },
    { name: "olsubject7", label: "Subject 07", type: "text" },
    { name: "olsubject8", label: "Subject 08", type: "text" },
    { name: "olsubject9", label: "Subject 09", type: "text" },

    { type: "title", label: "" },

    {
      type: "fullcontent",
      label: "A/L RESULT",
      gridSize: { md: 12 },
    },

    { name: "alsubject1", label: "Subject 01", type: "text" },
    { name: "alsubject2", label: "Subject 02", type: "text" },
    { name: "alsubject3", label: "Subject 03", type: "text" },
    { name: "alsubject4", label: "Subject 04", type: "text" },
    {
      name: "generalInfo",
      label: "GCE A/L GENERAL INFORMATION ON TECHNOLOGY BY",
      type: "text",
      gridSize: { md: 12 },
    },

    ...(applyas === "internship"
      ? [
          {
            name: "categoryOfApply",
            label: "CATEGORY OF APPLY",
            type: "select",
            options: [
              { value: "se intern", label: "SE INTERN" },
              {
                value: "data entry operator intern",
                label: "DATA ENTRY OPERATOR INTERN",
              },
              {
                value: "human resource intern",
                label: "HUMAN RESOURCE INTERN",
              },
            ],
            rules: { required: "Please select a category" },
          },
          {
            name: "HigherEducation",
            label: "HIGHER EDUCATION QUALIFICATIONS",
            type: "text",
            rules: { required: "Higher education details are required" },
          },
        ]
      : [
          {
            name: "location",
            label: "PREFERRED LOCATION",
            type: "select",
            options: [
              { value: "head_office", label: "HEAD OFFICE" },
              { value: "matara_branch", label: "MATARA BRANCH" },
            ],
            rules: { required: "Preferred location is required" },
          },
        ]),

    { name: "otherQualification", label: "OTHER QUALIFICATIONS", type: "text" },

    { type: "title", label: "In Case Of Emergency" },

    { name: "contactName1", label: "EMERGENCY CONTACT NAME 01", type: "text" },
    {
      name: "contactNumber1",
      label: "EMERGENCY CONTACT NUMBER 01",
      type: "number",
      rules: { required: "Emergency contact number is required" },
    },
    { name: "contactName2", label: "EMERGENCY CONTACT NAME 02", type: "text" },
    {
      name: "contactNumber2",
      label: "EMERGENCY CONTACT NUMBER 02",
      type: "number",
    },

    { type: "title", label: "Previous Training at SLT" },

    {
      name: "previouseTrainingSlt",
      label: "HAVE YOU UNDERGONE PREVIOUS TRAINING AT SLT",
      type: "radio",
      options: [
        { value: true, label: "Yes" },
        { value: false, label: "No" },
      ],
      rules: { required: "This field is required" },
    },

    { type: "title", label: "Upload Documents" },

    { name: "cvLink", label: "ATTACH YOUR UPDATED CV", type: "file" },
    { name: "nicLink", label: "NIC (BOTH SIDES)", type: "file" },
    {
      name: "policeCertificateLink",
      label: "POLICE CLEARANCE REPORT (OPTIONAL)",
      type: "file",
    },
    {
      name: "InternshipRequestLetterLink",
      label: "INTERNSHIP REQUEST LETTER (INSTITUTE)",
      type: "file",
    },
    {
      name: "trueAndCorrect",
      label: "True and Correct",
      type: "checkbox",
      options: [
        {
          value: true,
          label: "I confirm the above information is true and correct",
        },
      ],
      rules: { required: "You must agree to proceed" },
    },
  ];

  return (
    <Box
      sx={{
        padding: 7,
        maxWidth: "1000px",
        margin: "0 auto",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        sx={{
          textAlign: "left",
          mb: 4,
          color: "#2e2e2e",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        ADD NEW CV
      </Typography>
      <ReusableForm fields={fields1} onSubmit={onSubmit} />
    </Box>
  );
};

export default AddNewCv;

import Joi from "joi";

const userNameSchema = Joi.object({
  fistName: Joi.string()
    .max(20)
    .required()
    .messages({
      'string.base': 'First Name must be a string',
      'string.empty': 'First Name is required',
      'string.max': 'First Name cannot be more than 20 characters',
      'any.required': 'First Name is required',
      'string.unique':'First Name should be unique'
    }),
  middleName: Joi.string().allow('', null),
  lastName: Joi.string()
    .required()
    .messages({
      'string.base': 'Last Name must be a string',
      'string.empty': 'Last Name is required',
      'any.required': 'Last Name is required',
    }),
});

// Sub-schema for guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string().allow('', null),
  fatherOccupation: Joi.string().allow('', null),
  fatherContact: Joi.string().allow('', null),
  motherName: Joi.string().allow('', null),
  motherOccupation: Joi.string().allow('', null),
  motherContact: Joi.string().allow('', null),
});

// Sub-schema for local guardian
const localGuardianSchema = Joi.object({
  name: Joi.string().allow('', null),
  occupation: Joi.string().allow('', null),
  contact: Joi.string().allow('', null),
  address: Joi.string().allow('', null),
});

// Main student schema
const studentJoiValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'ID is required',
  }),
  name: userNameSchema.required(),
  gender: Joi.string()
    .valid('male', 'female')
    .required()
    .messages({
      'any.only': '{#value} is not supported',
      'any.required': 'Gender is required',
    }),
  dateOfBirth: Joi.string().allow('', null),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be valid',
    'any.required': 'Email is required',
  }),
  contactNumber: Joi.string().required().messages({
    'any.required': 'Contact Number is required',
  }),
  BloodGroup: Joi.string()
    .valid('A+', 'B+', 'A-')
    .required()
    .messages({
      'any.only': 'Invalid Blood Group',
      'any.required': 'Blood Group is required',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  Guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string()
    .valid('Active', 'Inactive')
    .default('Active'),
});

export default studentJoiValidationSchema
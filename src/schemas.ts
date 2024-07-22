import { ComponentType, Schema } from '@types';

export const medicalQuestionnaireSchema: Schema = {
  id: '1',
  version: '1.0',
  components: [
    {
      id: 'name4',
      formKey: 'name',
      type: ComponentType.InputField,
      label: 'Full Name',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'email5',
      formKey: 'email',
      type: ComponentType.EmailField,
      label: 'Email',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'phone5',
      formKey: 'phone',
      type: ComponentType.PhoneField,
      label: 'Phone Number',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'dob1',
      formKey: 'dob',
      type: ComponentType.InputField,
      label: 'Date of Birth',
      disabled: false,
      value: '',
      customProperties: { type: 'date' },
      layout: { col: { default: 24 } },
    },
    {
      id: 'gender2',
      formKey: 'gender',
      type: ComponentType.RadioField,
      label: 'Gender',
      disabled: false,
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
      selectedOptionsValues: [],
      layout: { col: { default: 24 } },
    },
    {
      id: 'address2',
      formKey: 'address',
      type: ComponentType.TextareaField,
      label: 'Address',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'medicalHistory1',
      formKey: 'medicalHistory',
      type: ComponentType.TextareaField,
      label: 'Medical History',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'allergies1',
      formKey: 'allergies',
      type: ComponentType.CheckboxField,
      label: 'Allergies',
      disabled: false,
      options: [
        { label: 'Peanuts', value: 'peanuts' },
        { label: 'Dairy', value: 'dairy' },
        { label: 'Gluten', value: 'gluten' },
        { label: 'Other', value: 'other' },
      ],
      selectedOptionsValues: [],
      layout: { col: { default: 24 } },
    },
    {
      id: 'medications1',
      formKey: 'medications',
      type: ComponentType.TextareaField,
      label: 'Current Medications',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'insuranceProvider1',
      formKey: 'insuranceProvider',
      type: ComponentType.InputField,
      label: 'Insurance Provider',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'policyNumber1',
      formKey: 'policyNumber',
      type: ComponentType.InputField,
      label: 'Policy Number',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'emergencyContact1',
      formKey: 'emergencyContact',
      type: ComponentType.InputField,
      label: 'Emergency Contact',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'emergencyContactPhone1',
      formKey: 'emergencyContactPhone',
      type: ComponentType.PhoneField,
      label: 'Emergency Contact Phone Number',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'submit5',
      formKey: 'submit',
      type: ComponentType.Button,
      text: 'Submit',
      layout: { col: { default: 24 } },
    },
  ],
};

export const employeeAnnualReviewSchema: Schema = {
  id: '2',
  version: '1.0',
  components: [
    {
      id: 'employeeName1',
      formKey: 'employeeName',
      type: ComponentType.InputField,
      label: 'Employee Name',
      placeholder: 'Your name',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'email6',
      formKey: 'email',
      type: ComponentType.EmailField,
      label: 'Email',
      placeholder: 'example@gmail.com',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'department1',
      formKey: 'department',
      type: ComponentType.InputField,
      label: 'Department',
      placeholder: 'Department name',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'reviewPeriod1',
      formKey: 'reviewPeriod',
      type: ComponentType.InputField,
      label: 'Review Period',
      disabled: false,
      value: '',
      customProperties: { type: 'date' },
      layout: { col: { default: 24 } },
    },
    {
      id: 'performanceRating1',
      formKey: 'performanceRating',
      type: ComponentType.RadioField,
      label: 'Performance Rating',
      disabled: false,
      options: [
        { label: 'Excellent', value: 'excellent' },
        { label: 'Good', value: 'good' },
        { label: 'Average', value: 'average' },
        { label: 'Poor', value: 'poor' },
      ],
      selectedOptionsValues: [],
      layout: { col: { default: 24 } },
    },
    {
      id: 'goalsAchieved1',
      formKey: 'goalsAchieved',
      type: ComponentType.CheckboxField,
      label: 'Goals Achieved',
      disabled: false,
      options: [
        { label: 'Met all deadlines', value: 'deadlines' },
        { label: 'Exceeded expectations', value: 'expectations' },
        { label: 'Improved skills', value: 'skills' },
      ],
      selectedOptionsValues: [],
      layout: { col: { default: 24 } },
    },
    {
      id: 'areasForImprovement1',
      formKey: 'areasForImprovement',
      type: ComponentType.TextareaField,
      label: 'Areas for Improvement',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'trainingRequired1',
      formKey: 'trainingRequired',
      type: ComponentType.TextareaField,
      label: 'Training Required',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'additionalComments1',
      formKey: 'additionalComments',
      type: ComponentType.TextareaField,
      label: 'Additional Comments',
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'reviewerName1',
      formKey: 'reviewerName',
      type: ComponentType.InputField,
      label: 'Reviewer Name',
      placeholder: "Enter the reviewer's name",
      disabled: false,
      value: '',
      layout: { col: { default: 24 } },
    },
    {
      id: 'submit6',
      formKey: 'submit',
      type: ComponentType.Button,
      text: 'Submit Review',
      layout: { col: { default: 24 } },
    },
  ],
};

export const personalSchema: Schema = {
  id: '3',
  version: '1.0',
  components: [
    {
      id: '1',
      formKey: 'personal-info',
      type: ComponentType.Group,
      layout: {
        col: {
          default: 24,
        },
      },
      components: [
        {
          id: '1-1',
          formKey: 'first-name',
          type: ComponentType.InputField,
          label: 'First Name',
          value: '',
          placeholder: 'Enter your first name',
          layout: {
            col: {
              default: 12,
            },
          },
        },
        {
          id: '1-2',
          formKey: 'last-name',
          type: ComponentType.InputField,
          label: 'Last Name',
          value: '',
          placeholder: 'Enter your last name',
          layout: {
            col: {
              default: 12,
            },
          },
        },
        {
          id: '1-3',
          formKey: 'email',
          type: ComponentType.EmailField,
          label: 'Email',
          value: '',
          placeholder: 'Enter your email',
          layout: {
            col: {
              default: 24,
            },
          },
        },
      ],
    },
    {
      id: '2',
      formKey: 'preferences',
      type: ComponentType.Group,
      layout: {
        col: {
          default: 24,
        },
      },
      components: [
        {
          id: '2-1',
          formKey: 'favorite-color',
          type: ComponentType.SelectField,
          label: 'Favorite Color',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' },
          ],
          selectedOptionsValues: [],
          placeholder: 'Select your favorite color',
          layout: {
            col: {
              default: 24,
            },
          },
        },
        {
          id: '2-2',
          formKey: 'subscribe',
          type: ComponentType.CheckboxField,
          label: 'Subscribe to newsletter',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selectedOptionsValues: [],
          layout: {
            col: {
              default: 24,
            },
          },
        },
        {
          id: '2-3',
          formKey: 'subscribe',
          type: ComponentType.RadioField,
          label: 'Your sex',
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ],
          selectedOptionsValues: [],
          layout: {
            col: {
              default: 24,
            },
          },
        },
      ],
    },
    {
      id: '3',
      formKey: 'phone',
      type: ComponentType.PhoneField,
      label: 'Phone Number',
      value: '',
      placeholder: 'Enter your phone number',
      layout: {
        col: {
          default: 24,
        },
      },
    },
    {
      id: '4',
      formKey: 'address',
      type: ComponentType.TextareaField,
      label: 'Address',
      value: '',
      placeholder: 'Enter your address',
      layout: {
        col: {
          default: 24,
        },
      },
    },
    {
      id: '5',
      formKey: 'submit',
      type: ComponentType.Button,
      text: 'Submit',
      layout: {
        col: {
          default: 24,
        },
      },
    },
  ],
};

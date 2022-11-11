import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
  lastName: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  password: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .required('Required'),
});

export const inputLogin = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
  password: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .required('Required'),
});

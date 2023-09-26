import * as yup from 'yup';

export const regexEmail = new RegExp(
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
);

const checkSamePassword = (
  value: string | undefined,
  ctx: yup.TestContext<yup.AnyObject>,
) => {
  if (!value || !ctx.parent.password) {
    return true;
  }
  return value === ctx.parent.password;
};

export const schemeLogin = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const schemeRegister = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Email is required').matches(regexEmail, 'Email is wrong format'),
  password: yup.string().required('Password is required').min(8, 'Password length must be greater than 8 characters'),
  confirmPassword: yup.string().required('Confirm password is required')
  .test({
    name: 'oneOf',
    exclusive: false,
    params: {},
    message: 'Confirm password must be same the password',
    test: checkSamePassword,
  }),
});

export type PayloadLoginType = yup.InferType<typeof schemeLogin>;
export type PayloadRegisterType = yup.InferType<typeof schemeRegister>;
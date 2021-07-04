// jest: NODE_ENV TEST
// LOG && SingUp
// создавать пользователя и вписывать его в базу и проверять

const regeneratorRuntime = require('regenerator-runtime');
const request = require('supertest');
const { createApp } = require('../src/app');
const { User } = require('../src/models');
const { sequelize } =require('../src/models')
const yup = require('yup');
const CONSTANTS = require('../src/constants');
const util = require('util');
const jwt = require('jsonwebtoken');

const app = createApp;

function getUserData() {
    return {
    firstName: 'Test',
    lastName: 'Testovich',
    displayName: 'Testik',
    email: 'test123@gmail.com',
    password: 'Qwerty_123',
    role: CONSTANTS.CUSTOMER,
    balance: 1000,
    };
}

const userData = getUserData();

const authSuccessBodySchema = yup
    .object({
    data: yup.object({
        user: yup.object().required(),
        tokenPair: yup
        .object({
            accessToken: yup.string().required(),
            refreshToken: yup.string().required(),
        })
        .required(),
    }),
    })
    .required();

const authErrorSchema = yup.object({
  errors: yup.array().of(yup.object()).required(),
});

beforeAll(() => User.create(userData));
afterAll(() => sequelize.close());

describe('LOGIN', () => {
  test('User will be logged successfully', async () => {
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({
      email: userData.email,
      password: userData.password,
    });
    expect(status).toBe(201);
    expect(await authSuccessBodySchema.isValid(body).toBeTruthy());
  });
});

/*
describe('LOGIN', () => {
  test('User will be logged successfully', async () => {
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({
      email: userData.email,
      password: userData.password,
    });
    expect(status).toBe(201);
    expect(await authSuccessBodySchema.isValid(body).toBeTruthy());
  });
  test('User will be logged with 403 status', async () => {
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({
      email: 'bad-email',
      password: 'qwerty',
    });
    expect(status).toBe(403);
    expect(await authErrorSchema.isValid(body).toBeTruthy());
  });
  test('User must pass to login', async () => {
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({});
    expect(status).toBe(400);
    expect(await authErrorSchema.isValid(body).toBeTruthy());
  });
});
describe('SIGN UP', () => {
  test('User should be able to sign up successfully', async () => {
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({
      email: userData.email,
      password: userData.password,
    });
    expect(status).toBe(201);
  });
  test('User should get bad request error on invalid data sending', async () => {
    const invalidUserData = {
      firstName: 'Test',
      lastName: 'Testovich',
      displayName: 'Testik',
      email: 'test123',
      password: '123',
      role: CONSTANTS.CUSTOMER,
      balance: 1000,
    };
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({ invalidUserData });
    expect(status).toBe(400);
    expect(await authErrorSchema.isValid(body).toBeTruthy());
  });
  test('User should get conflict error on userd email', async () => {
    const { status, body } = await (
      await request(app).post('/api/auth/login')
    ).send({
      email: userData.email,
      password: userData.password,
    });
    expect(status).toBe(409);
    expect(await authErrorSchema.isValid(body).toBeTruthy());
  });
});
describe('AUTH', () => {
  test('Expired access token received unauthorized error', async () => {
    const acToken = {
      sign: util.promisify(jwt.sign),
      verify: util.promisify(jwt.verify),
    };
    await request(app)
      .post('/api/getContestById')
      .set('Authorization', acToken);
    expect(status).toBe(401);
    expect(await authErrorSchema.isValid(response.body).toBeTruthy());
  });
});
*/
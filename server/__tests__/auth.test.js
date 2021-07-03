const request = require('supertest');
const {createApp} = require('../src/app');
const {User, sequelize} = require('../src/models');
const {permissions: {role}} = require('../src/config/app');
const yup = require('yup');
const { array } = require('yup/lib/locale');
const CONSTANTS = require('../src/constants');


const app = createApp();

const userData = {
    firstName: 'Maison',
    lastName: 'Mount',
    display: 'Mount19',
    email: 'Maison19@gmail.com',
    password: 'qwerty',
    role: CONSTANTS.CUSTOMER,
    balance: 10000,
};

const authSuccessBodySchema = yup.object({
    data: yup.object({
        user: yup.object().required(),
        tokenPair: yup.object({
            accessToken: yup.string(). required(),
            refreshToken: yup.string().required(),
        }).required()
    }),
}).required();

const authErrorSchema = yup.object({
    errors: yup.array().of(yup.object()).required();
});

beforeAll(()=> User.create(userData))
afterAll(() => sequelize.close());

describe('LOGIN', ()=>{
    test('User will be to logged successfully', async ()=>{
        const{status, body} = await (
            await request(app).post('/api/auth/login')
            ).send({
                email: userData.email,
                password: userData.password,
            });
    expect(status).toBe(200);
    expect(await authSuccessBodySchema.isValid(body).toBeTruthy());
    });
    test('User will be to logged with 403 status', async ()=>{
        const{status, body} = await (
            await request(app).post('/api/auth/login')
            ).send({
                email: 'bad-email',
                password: 'qwerty',
            });
    expect(status).toBe(403);
    expect(await authSuccessBodySchema.isValid(body).toBeTruthy());
    });
    test('User must pass to login', async ()=>{
        const{status, body} = await (
            await request(app).post('/api/auth/login')
            ).send({});
    expect(status).toBe(400);
    expect(await authSuccessBodySchema.isValid(body).toBeTruthy());
    });
});


describe()
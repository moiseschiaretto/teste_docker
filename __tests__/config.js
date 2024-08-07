require('dotenv').config();

const authToken = process.env.AUTH_TOKEN;
const baseUrl = 'https://reqres.in';
const endPoint = '/api/users/';
const contentType = 'application/json';
const accept = 'application/json; charset=utf-8';
const userID = 1;

module.exports = {
  baseUrl,
  endPoint,
  contentType,
  accept,
  userID,
  authToken,
};

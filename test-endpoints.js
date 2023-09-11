import axios from 'axios';
import { faker } from '@faker-js/faker';

// Replace with your API endpoint URL
const apiUrl = 'https://hngx-backend-stage-two.onrender.com/api';

let resourceId = ''; // id of a particular person

async function createPerson() {
  try {
    const response = await axios.post(apiUrl, { name: faker.person.fullName() });
    console.log('Testing POST /api');
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    resourceId = response.data.data._id;
    console.log('\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function getAllPersons() {
  try {
    const response = await axios.get(apiUrl);
    console.log('Testing GET /api');
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    console.log('\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function getSinglePerson() {
  try {
    const response = await axios.get(`${apiUrl}/${resourceId}`);
    console.log(`Testing GET /api/${resourceId}`);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    console.log('\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function updatePerson() {
  try {
    const response = await axios.put(`${apiUrl}/${resourceId}`, { name: faker.person.fullName() });
    console.log(`Testing PUT /api/${resourceId}`);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    console.log('\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function deletePerson() {
  try {
    const response = await axios.delete(`${apiUrl}/${resourceId}`);
    console.log(`Testing DELETE /api/${resourceId}`);
    console.log('Response status:', response.status);
    console.log('Response data:', response.data);
    console.log('\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const testCases = [
  async () => {
    await createPerson();
  },
  async () => {
    await getAllPersons();
  },
  async () => {
    await getSinglePerson();
  },
  async () => {
    await updatePerson();
  },
  async () => {
    await deletePerson();
  },
];

async function runTestCases() {
  for (const asyncFn of testCases) {
    await asyncFn();
  }
}

runTestCases()
  .then(() => {
    console.log('All tests for the api endpoints is completed.');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

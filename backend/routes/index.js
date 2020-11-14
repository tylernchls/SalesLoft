const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const BASE_URL = 'https://api.salesloft.com/v2/people.json';

const config = {
  headers: { 'Authorization': 'Bearer ' + process.env.API_KEY}
};

const getPeople = async () => {
  try {
    let peopleData = [];
    const res = await axios.get(BASE_URL, config);
    const people = res.data.data.forEach(person => {
      let name = person.display_name;
      let email = person.email_address;
      peopleData.push({ name, email });
    });
    return peopleData;
  } catch (e) { console.error(e) };
};

const frequencyCounter = async () => {
  try {
    let onlyEmailData = [];
    const peopleData = await getPeople();
    const peoplesEmails = peopleData.map(emailList => {
      onlyEmailData.push(emailList.email);
    });
    return onlyEmailData;
  } catch (e) { console.log(e) };
}

router.route('/')
  .get((req, res) => {
    getPeople().then((data) => {
      res.send(data);
    }) 
  });

router.route('/frequency')
  .get((req, res) => {
    frequencyCounter().then((data) => {
      res.send(data);   
    });  
  });

module.exports = router; 
const express = require('express');
const axios = require('axios');
const router = express.Router();
const testEmailData = require('../test-data');
const stringSimilarity = require('string-similarity');

require('dotenv').config();

const BASE_URL = 'https://api.salesloft.com/v2/people.json';

const config = {
  headers: { 'Authorization': 'Bearer ' + process.env.API_KEY},
  params: {
    per_page: 100,
    page: 2
  }
};

const getPeopleData = async () => {
  try {
    let peopleData = [];
    const req = await axios.get(BASE_URL, config);
    const people = req.data.data.map(person => {
      let name = person.display_name;
      let email = person.email_address;
      let title = person.title;
      peopleData.push({ name, email, title });
    });
    const peopleArray = Object.values(peopleData);
    return peopleArray;
  } catch (e) { console.error(e) };
};

const getEmailData = async () => {
  try {
    let onlyEmailData = [];
    const peopleData = await getPeopleData();
    const peoplesEmails = peopleData.map(emailList => {
      onlyEmailData.push(emailList.email);
    });    
    return onlyEmailData;
  } catch (e) { console.log(e) };
};

const getFrequencyCount = async () => {
  let actualCount = [];
  const emailData = await getEmailData();
  let count = emailData.map((email, ) => {
    actualCount.push({"Email":email, "Frequency":countLetterFrequency(email)});   
  });
  const frequencyArray = Object.values(actualCount); 
  return frequencyArray;
};

const countLetterFrequency = (string) => {  
  let count = {};
  string.split('').forEach(((letter) =>  {   
     count[letter] ? count[letter]++ : count[letter] = 1;
  }));
  return count;
};

const getDuplicates = (string) => {
  const EmailDataArray = Object.values(testEmailData.emailData);
  let possibleMatches = stringSimilarity.findBestMatch(string, EmailDataArray);
  return possibleMatches.bestMatch;  
};

router.route('/')
  .get((req, res) => {
    res.send('Welcome to my Express Server');
  });

router.route('/people')
  .get((req, res) => {  
    getPeopleData().then((data) => { 
      res.send(data);
    }).catch((err) => { console.log(err) });
  });

router.route('/emails')
  .get((req, res) => {
    getEmailData().then((data) => {
      res.send(data);   
    }).catch((err) => { console.log(err) });  
  });

router.route('/frequency')
  .get((req, res) => {
    getFrequencyCount().then((response) => {
      res.send(response);  
    }).catch((err) => { console.log(err) });
  });

router.route('/duplicates')
  .post((req, res) => {   
    let payload = Object.keys(req.body).toString()
    res.send(getDuplicates(payload));
  })

module.exports = router; 
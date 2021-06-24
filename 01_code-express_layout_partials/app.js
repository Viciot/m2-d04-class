/**
 * TOC Express dynamic views
 * 
 * 1. require hbs
 * 2. Set the View Engine
 * 3. app.all() with the res.render() method
 * 4. set the views directory to tell express where templated are
 * 5. require the data
 * 6. Pass data to the res.render() method
 */

const express = require('express');
const path = require('path');
// * 1. require hbs
const hbs = require('hbs')

const app = express();

// * 2. Set the View Engine
app.set('view engine', 'hbs')

// * 4. set the views directory to tell express where templated are
app.set(path.join(__dirname, '/views'))

app.all('/', (req, res)=> {
  // res.sendFile(path.join(__dirname, "./index.html"));
  // * 3. app.all() with the res.render() method
  res.render('index', { pageTitle: "Home Page", cohortName: "Pizza Bytes" })
})

app.all('/about', (req, res)=> {
  // res.sendFile(path.join(__dirname, "./about.html"));
  // * 3. app.all() with the res.render() method
  res.render('about')
})

app.listen(3000)
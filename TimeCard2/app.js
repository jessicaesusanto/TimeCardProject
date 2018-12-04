'use strict';

const express = require('express');

const path = require('path');
const config = require('./config');
var mustache = require("mustache");
var fs = require("fs");

const app = express();

app.use('/public', express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get the data model for "employees"
function getModel () {
	return require(`./employees/model-${config.get('DATA_BACKEND')}`);
}

app.set('views', path.join(__dirname, 'views'));

//Redirect root to /employees
app.get('/', (req, res) => {
    res.redirect('/employees');
});

/**
 * GET /employees/employees
 *
 * Display the login page.
 */
app.get('/employees', (req, res) => {
    var page = fs.readFileSync("views/login.html.mustache").toString();
    var html = mustache.render(page);
    res.status(200).send(html);
});

/**
 * GET /employees/logon
 *
 * Display the employee profile.
 */
app.get('/employees/logon', (req, res) => {
    var page = fs.readFileSync("views/profile.html.mustache").toString();
    var html = mustache.render(page, { employee: {}});
    res.status(200).send(html);
});

/**
 * GET /employees/logout
 *
 * Log the employee out and redirect to the login page.
 */
app.get('/employees/logout', (req, res) => {
    var page = fs.readFileSync("views/login.html.mustache").toString();
    var html = mustache.render(page);
    res.status(200).send(html);
});

/**
 * GET /employees/register
 *
 * Display the registration page.
 */
app.get('/employees/register', (req, res) => {
    var page = fs.readFileSync("views/register.html.mustache").toString();
    var html = mustache.render(page, {employee: {}});
    res.status(200).send(html);
});

/**
 * GET /employees/manage
 *
 * Display the management page.
 */
app.get('/employees/manage', (req, res, next) => {
    var pageToken = (req.query.pageToken == 'false') ? false : req.query.pageToken;
  getModel().list(10, pageToken, (err, entities, cursor) => {
    if(err) {
        next(err);
        return;
    }
    var page = fs.readFileSync("views/management.html.mustache").toString();
    console.log(cursor)
    var html = mustache.render(page, {employees: entities, next_page_token: cursor});
    res.status(200).send(html);
});
});

/**
 * GET /employees/clockin-out
 *
 * Display the 'Clock In' and 'Clock Out' buttons.
 */
app.get('/employees/clockin-out', (req, res) => {
    var page = fs.readFileSync("views/clockin.html.mustache").toString();
    var html = mustache.render(page);
    res.status(200).send(html);
});

/**
 * GET /employees/add
 *
 * Display a new form for adding a new employee.
 */
app.get('/employees/add', (req, res) => {
    var page = fs.readFileSync("views/homepage.html.mustache").toString();
    var html = mustache.render(page, {employee: {}, action: 'Add'});
    res.status(200).send(html);
});

/**
 * POST /employees/add
 *
 * Add a new employee.
 */
app.post('/employees/add', (req, res, next) => {
	  const data = req.body;

	  // Save the data to the database.
	  getModel().create(data, (err) => {
	    if (err) {
	      next(err);
	      return;
	    }
          res.redirect('/employees/manage');
	  });
	});

/**
 * GET /employees/:id/edit
 *
 * Display an employee for editing.
 */
app.get('/employees/:employee/edit', (req, res, next) => {
  getModel().read(req.params.employee, (err, entities) => {
    if (err) {
      next(err);
      return;
    }
    var page = fs.readFileSync("views/homepage.html.mustache").toString();
    var html = mustache.render(page, { employee: entities, action: 'Edit'});
    res.status(200).send(html);
  });
});

/**
 * POST /employees/:id/edit
 *
 * Update an employee.
 */
app.post('/employees/:employee/edit', (req, res, next) => {
  const data = req.body;

  getModel().update(req.params.employee, data, (err) => {
    if (err) {
      next(err);
      return;
    }
      res.redirect('/employees/manage');
  });
});

/**
 * GET /employees/:id/delete
 *
 * Delete an employee.
 */
app.get('/employees/:employee/delete', (req, res, next) => {
    getModel().delete(req.params.employee, (err) => {
    if (err) {
        next(err);
        return;
    }
    res.redirect('/employees/manage');
});
});

// Local server
if (module === require.main) {
  // [START server]
  // Start the server
    const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
# Staffing UI

- Run `bower install` in this directory to install required JS libraries.
- Run `ruby -run -e httpd -- -p 5000 .`
- open [http://localhost:5000](http://localhost:5000) in your browser to see the contents of this folder.
- Press `control-c` to stop the server.

## To run page tests

- Run `npm install -g protractor` from anywhere
- Run `webdriver-manager update` from anywhere
- Run `webdriver-manager start` from anywhere
- Run `protractor conf.js` in the test directory

## To run the controller tests
- Run `npm install -g karma karma-cli` from anywhere
- Run `npm install` in this directory
- Run `karma start` in the test directory

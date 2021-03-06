![learnyounode tests](https://github.com/choilmto/learnyounode-13/workflows/learnyounode%20tests/badge.svg)

# Instructions for use
## On Local machine
`npm run build` only builds http-json-api-server.ts.

`npm test` will show the output of the tests.

`npm start` builds and tests http-json-api-server.ts.

## On GitHub
On push to master, the output of the tests can be found under the Actions tab.
There is also a status badge at the top of this README summarizing test results.

# Exercise
Create a file named http-json-api-server.js.

Write an HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'. Expect the request to contain a query string
with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:

   {
     "hour": 14,
     "minute": 23,
     "second": 15
   }

Add second endpoint for the path '/api/unixtime' which accepts the same
query string but returns UNIX epoch time in milliseconds (the number of
milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
For example:

   { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to
your program.

─────────────────────────────────────────────────────────────────────────────

## HINTS

The request object from an HTTP server has a url property that you will
need to use to "route" your requests for the two endpoints.

You can parse the URL and query string using the Node core 'url' module.
new URL(request.url) will parse content of request.url and provide you
with an object with helpful properties.

For example, on the command prompt, type:

   $ node -pe "new URL('/test?q=1', 'http://example.com')"

Documentation on the url module can be found by pointing your browser
here:
file:///home/cindy/Documents/work/NodeSchool/lyn13/node_modules/learnyouno
de/docs-nodejs/url.html

Your response should be in a JSON string format. Look at JSON.stringify()
for more information.

You should also be a good web citizen and set the Content-Type properly:

   res.writeHead(200, { 'Content-Type': 'application/json' })

The JavaScript Date object can print dates in ISO format, e.g. new
Date().toISOString(). It can also parse this format if you pass the string
into the Date constructor. Date.getTime() will also come in handy.

# Miscellany
## Purpose
The purpose of this repo is to enhance collaboration and reduce the need for
Slack to share code. Upon review, this could become the template for
collaboration in other Node School modules. The exercise and tests are from
exercise 13 of learnyounode, which is a part of [Node School](https://nodeschool.io/#workshoppers).

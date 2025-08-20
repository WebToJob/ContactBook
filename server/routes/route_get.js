// write a function that returns the JSON data for get request response from the database
// it doesn't handle routes but just returns the data when called by the routes handlers
// it also connected from the database using mongoose

function get() {
    return "Hello world from route_get.js!";
}

module.exports.get = get;


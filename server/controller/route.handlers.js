// write a function that returns the JSON data for get request response from the database
// it doesn't handle routes but just returns the data when called by the routes handlers
// it also connected from the database using mongoose

export function getAllContacts() {
    return "Hello world from route.handlers.js!";
}

export function getOneContact(id=0) {
    return `Hello world from routes_contacts.js! Contact ID: ${id}`;
}

export function createContact(contact=null) {
    return `Hello world from routes_contacts.js! Contact created:`
}

export function updateContact(id=0, contact=null) {
    return `Hello world from routes_contacts.js! Contact updated: ${id}`;
}

export function deleteContact(id=0) {
    return `Hello world from routes_contacts.js! Contact deleted: ${id}`;
}

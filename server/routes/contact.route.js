import { Router } from 'express';
import { getAllContacts, getOneContact, createContact, updateContact, deleteContact } from '../controller/route.handlers.js';
const contactRoute = Router();

contactRoute.get('/', (req, res) => {
    res.send(getAllContacts())
});
contactRoute.get('/id', (req, res) => {
    res.send(getOneContact())
});
contactRoute.post('/create', (req, res) => {
    res.send(createContact())
});
contactRoute.put('/update', (req, res) => {
    res.send(updateContact())
});
contactRoute.delete('/delete', (req, res) => {
    res.send(deleteContact())
});

export default contactRoute;

// const fs = require('fs/promises')
import { nanoid } from 'nanoid';
import { promises as fs } from 'fs';
import { resolve } from 'path';
// const fs = require('fs').promises;
// const path = require('path');

// const contactsPath = path.resolve('models/contactsDraft.json');
const contactsPath = resolve('models/contactsDraft.json');

export const listContacts = async () => {
  try {
    return JSON.parse(await fs.readFile(contactsPath, 'utf8'));
  } catch (error) {
    console.log(error.message);
  }
};

export const getContactById = async (contactId) => {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, 'utf8'));
    return await data.find((item) => item.id === contactId);
  } catch (error) {
    console.log(error.message);
  }
};

export const removeContact = async (contactId) => {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, 'utf8'));
    const filteredList = await data.filter((item) => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(filteredList));
    return JSON.parse(await fs.readFile(contactsPath, 'utf8'));
  } catch (error) {
    console.log(error.message);
  }
};

export const addContact = async ({ name, email, phone }) => {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, 'utf8'));
    const newContact = { id: nanoid(), name, email, phone };
    const newList = [...data, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newList));
    return newContact;
  } catch (error) {
    console.log(error.message);
  }
};

// const updateContact = async (contactId, body) => {};

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   // updateContact,
// };

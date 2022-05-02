import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');

export const addFilter = createAction('filter/value');

import { createReducer } from '@reduxjs/toolkit';
import { addContact, addFilter } from './actions';

export const contactsReducer = createReducer(null, {
  [addContact]: (_, action) => {
    return action.payload;
  },
});

export const filterReducer = createReducer('', {
  [addFilter]: (_, action) => {
    return action.payload;
  },
});

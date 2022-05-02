import { configureStore } from '@reduxjs/toolkit';
import { mockApi } from './slice';

import { contactsReducer, filterReducer } from './reducers';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    mockApi.middleware,
  ],
});

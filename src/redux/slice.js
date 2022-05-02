import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626d6447034ec185d3327154.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, number: phone }) => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name,
          phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = mockApi;

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import ContactsListItem from 'components/ContactListItem/ContactListItem';
import { useGetContactsQuery } from '../../redux/slice';

export default function ContactList() {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetContactsQuery();

  const [filteredContacts, setFilteredContacts] = useState(null);

  useEffect(() => {
    if (data) {
      dispatch(addContact(data));
    }
  }, [data]);

  useEffect(() => {
    if (contacts) {
      const getFilteredList = () => {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      };
      setFilteredContacts(getFilteredList);
    }
  }, [filter, contacts]);

  return (
    <>
      {data ? isFetching : <p>Loading...</p>}

      <ul>
        {filteredContacts &&
          filteredContacts.map(contact => (
            <ContactsListItem key={contact.id} {...contact} />
          ))}
      </ul>
    </>
  );
}

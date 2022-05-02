import { useDeleteContactMutation } from '../../redux/slice';

export default function ContactsListItem(contacts) {
  const { name, phone, id } = contacts;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li>
      <span style={{ marginRight: 10 }}>{name}</span> {phone}
      <button
        type="button"
        style={{ marginLeft: 20 }}
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
}

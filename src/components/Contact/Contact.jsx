const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

export default Contact;

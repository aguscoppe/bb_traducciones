const Contact = ({ contact }) => {
  const { title, data } = contact;
  return (
    <section id='contact'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        {data.map((el) => (
          <div key={el.text}>
            <i className={el.icon}></i>
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;

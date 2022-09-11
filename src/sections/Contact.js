import { getLink } from '../utils';

const Contact = ({ contact }) => {
  const { title, data } = contact;
  return (
    <section id='contact'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        <div className='contact-container'>
          {data.map((el) => (
            <div className='contact-item' key={el.text}>
              <div className='contact-icon'>
                <i className={el.icon}></i>
              </div>
              <div className='contact-text'>
                {el.text.map((item) => getLink(item))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

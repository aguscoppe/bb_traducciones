import { getLink } from '../utils';

const Footer = ({ contact, services, specializations }) => {
  return (
    <footer id='footer'>
      <div className='footer-container container'>
        <div className='footer-item'>
          <h5>{services.title}</h5>
          <ul>
            {services.data.map((el) => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ul>
        </div>
        <div className='footer-item'>
          <h5>{specializations.title}</h5>
          <div className='footer-specializations'>
            <ul>
              {specializations.data.map((el, i) =>
                i <= 4 ? <li key={el}>{el}</li> : null
              )}
            </ul>
            <ul>
              {specializations.data.map((el, i) =>
                i > 4 ? <li key={el}>{el}</li> : null
              )}
            </ul>
          </div>
        </div>
        <div className='footer-item'>
          <h5>{contact.title}</h5>
          <ul>
            {contact.data.map((el) => {
              return el.text.map((text) => <li key={text}>{getLink(text)}</li>);
            })}
          </ul>
        </div>
      </div>
      <hr />
      <p className='copyright'>B&#38;B Traducciones &copy; 2022</p>
    </footer>
  );
};

export default Footer;

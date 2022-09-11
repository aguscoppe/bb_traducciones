import User from '../components/User';

const About = ({ about }) => {
  const { title, data } = about;
  return (
    <section id='about'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        {data.map((user, index) => (
          <User key={user.name} user={user} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;

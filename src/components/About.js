const About = ({ about }) => {
  const { title, data } = about;
  return (
    <section id='about'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        {data.map((user, index) => (
          <div key={user.name} className='user'>
            <div id={`user-${index}`}>
              <h2>{user.name}</h2>
              <p>{user.description}</p>
            </div>
            <div className='user-img'>
              <img src={user.image} alt={user.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

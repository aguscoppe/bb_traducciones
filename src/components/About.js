const About = ({ about }) => {
  const { title, data } = about;
  return (
    <section id='about'>
      <div className='container'>
        <h1>{title}</h1>
        {data.map((user) => (
          <div key={user.name}>
            <div>
              <h2>{user.name}</h2>
              <p>{user.description}</p>
            </div>
            <div>
              <img src={user.image} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

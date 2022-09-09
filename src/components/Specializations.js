const Specializations = ({ specializations }) => {
  const { title, data } = specializations;
  return (
    <section id='specializations'>
      <div className='container'>
        <h1>{title}</h1>
        <ul>
          {data.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Specializations;

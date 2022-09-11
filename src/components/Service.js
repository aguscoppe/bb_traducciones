const Service = ({ service }) => {
  return (
    <div className='icon-container'>
      <i className={service.icon}></i>
      <p>{service.name}</p>
    </div>
  );
};

export default Service;

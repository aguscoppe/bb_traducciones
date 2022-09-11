const User = ({ user, index }) => {
  return (
    <div className='user'>
      <div id={`user-${index}`}>
        <h2>{user.name}</h2>
        <p>{user.description}</p>
      </div>
      <div className='user-img'>
        <img src={user.image} alt={user.name} />
      </div>
    </div>
  );
};

export default User;

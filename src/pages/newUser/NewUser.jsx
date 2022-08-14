import './newUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='John' />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='John Smith' />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='john@gmail.com' />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password' />
        </div>
        <div className='newUserItem'>
          <label>Birthday</label>
          <input type='text' placeholder='10.12.1999' />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='text' placeholder='+1 123 456 78' />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='password' placeholder='New York | USA' />
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select name='active' id='active' className='newUserSelect'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' name='male' value='male' id='male' />
            <label for='male'>Male</label>
            <input type='radio' name='female' value='female' id='female' />
            <label for='female'>Female</label>
            <input type='radio' name='other' value='other' id='other' />
            <label for='other'>Other</label>
          </div>
        </div>
        <button className='newUserButton'>Create</button>
      </form>
    </div>
  );
};

export default NewUser;

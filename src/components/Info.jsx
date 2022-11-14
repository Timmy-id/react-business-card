import React from 'react';

const Info = () => {
  return (
    <div className="info--section">
      <h1>Oluwatimilehin Idowu</h1>
      <p>Frontend Developer</p>
      <small>
        <a>oluwatimilehin.id@gmail.com</a>
      </small>
      <div className='contact--btns'>
        <a href='mailto:oluwatimilehin.id@gmail.com'>
          <i className='fa-sharp fa-solid fa-envelope'></i>
          Email
        </a>
        <a href='https://www.linkedin.com/in/oluwatimilehin-idowu'>
          <i className='fa-brands fa-linkedin'></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Info;

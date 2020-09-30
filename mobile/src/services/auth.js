

const login = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'svcuyaervbcukearvueavuyt',
        user: {
          name:'user',
          email:'test.user@gmail.com',
        },
      });
    }, 2000);
  });
};

export default login;
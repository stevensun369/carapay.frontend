const protect = (userLogin, navigate) => {
  if (!userLogin.userInfo) {
    navigate('/')
  }
}

export default protect

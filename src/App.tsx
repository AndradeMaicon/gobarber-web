import React from 'react';

// import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  )
}

export default App;

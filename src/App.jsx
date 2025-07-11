import Header from './components/Header.jsx';
import Signup from './components/SignUp.jsx';
import StateLogin from './components/StateLogin.jsx';
import Login from './components/StateLogin.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <StateLogin/>
        {/* <Signup/> */}

      </main>
    </>
  );
}

export default App;

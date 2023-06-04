import './styles/App.css';
import AppRoutes from './components/AppRoutes';
import { connect } from "react-redux";
import loginAction from './redux/actions/auth/loginAction';
import { useEffect } from 'react';
import { getToken } from "./storage/localStorage";

function App({loginByToken, state}) {
  useEffect(() => {
    const token = getToken();
    if(token !== "" && token){
      loginByToken();
    }
  }, [loginByToken]);

  return (
    <div className="App">
      {
        state.loading === false ?
        <div className='container'>
          <AppRoutes />
        </div> : null
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.auth.loginState,
});
const mapDispatchToProps = {
  loginByToken: loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

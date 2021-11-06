// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import LandingPage from './pages/LandingPage';

function App() {

  // useEffect(() => {
  //   getGamesList()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);


  return (
    <div>
      Hello

      <Switch>
      <Route exact={true} path='/' component={LandingPage}/>
        <Route exact={true} path='/profile' component={ProfilePage}/>
      </Switch>

    </div>
  );
}

export default App;

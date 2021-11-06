import { Switch, Route } from "react-router"
import Login from "../../components/Login"
import Register from "../../components/Register"

const LandingPage = () => {
    return (
        <div>
            Login/SignUp Component

            <Switch>
                <Route exact={true} path='/' component={Login} />
                <Route exact={true} path='/signup' component={Register} />
            </Switch>
        </div>
    )
}

export default LandingPage

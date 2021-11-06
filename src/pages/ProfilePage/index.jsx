import { Switch, Route, useRouteMatch } from "react-router-dom";

// style
// import styles from './ProfilePage.module.css';

// import DisplayComponent from '../components/DisplayComponent';
import history from '../../config/history';

const ProfilePage = () => {

    const { url } = useRouteMatch()


    return (
        <div>Profile</div>
        // <div className={styles.container}>
        //     <div className={styles.container}>
        //         Constant Container
        //     </div>
        //     <div>
        //         <div onClick={() => history.push(`${url}/posts`)}>
        //             GoTo 2
        //         </div>
        //         <div onClick={() => history.push(`${url}/saved`)}>
        //           Goto  Hello 3
        //         </div>
        //         <div onClick={() => history.push(`${url}/info`)}>
        //             Goto Hello 4
        //         </div>
        //     </div>

        //     <Switch>
        //         <Route exact path={`${url}/posts`}><DisplayComponent name="POSTS" /></Route>
        //         <Route exact path={`${url}/saved`}><DisplayComponent name="SAVED" /></Route>
        //         <Route exact path={`${url}/info`}><DisplayComponent name="INFO" /></Route>
        //     </Switch>
        // </div>
    )
}

export default ProfilePage

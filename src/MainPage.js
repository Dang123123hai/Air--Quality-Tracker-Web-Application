
import Navbar from './Navbar'
import QuizPage from './Pages/QuizPage'
import HomePage from './HomePage'
import Tracker from './Pages/Tracker'
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import './Navbar.css'

const MainPage = () => {
    return(
        <BrowserRouter>
            <div>
                <Navbar/>
                <div>
                    <Switch>
                        <Route path = "/" exact component ={HomePage}/>
                        <Route path = "/Tracker" exact component ={Tracker}/>
                        <Route path = "/QuizPage" exact component ={QuizPage} />
                        <Route path ="/Home" component={HomePage}/>
                    </Switch>
                </div>
            <p className = 'footer'>©Created by Group 7 🦀🐕🐱🦉</p>
            </div>
        </BrowserRouter>
    )
}

export default MainPage
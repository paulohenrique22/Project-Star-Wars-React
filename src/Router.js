import React from 'react'
import { Switch, Route } from 'react-router-dom';
import App from './Components/Home/App'
import Search from './Components/Search/Search'
import Char from './Components/Char/Char'


function Router (){
    return (
        <div>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Search/:Pesquisa" component={Search} />
                <Route path="/Char/:Pesquisa" component={Char} />
            </Switch>
        </div>
    )
}
export default Router ;
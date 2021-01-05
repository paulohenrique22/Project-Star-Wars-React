import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
</>, document.getElementById('root'));


serviceWorker.unregister();





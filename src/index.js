import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Namebar from "./components/header";
import {About} from "./components/about";
import {Contact} from "./components/contact";
import {Projects} from "./components/projects";
import {WorkHistory} from "./components/work";
import {Education} from "./components/edu";
import Copyright from "./components/footer";

ReactDOM.render(
    <div>
        <Namebar/>
        <div className={"body"}>
            <aside>
                <h2>Hunter Line</h2>
                <h3>Junior Software Developer & Student</h3>
                <img src="https://via.placeholder.com/350x300" alt=""/>
                <About/>
                <hr/>
                {/*<Certs/>*/}
                {/*<hr/>*/}
                <Contact/>
                <hr/>
            </aside>
            <main>
                <Projects/>
                <hr/>
                <WorkHistory/>
                <hr/>
                <Education/>
            </main>
        </div>
        <Copyright/>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

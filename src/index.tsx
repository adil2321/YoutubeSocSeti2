import React from 'react';
import './index.css';
import {state, subscriber} from "./Redax/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessages, addPost, onchageAddMessages, onchageMessgaeNewTetxtTerea, StateType} from "./Redax/State";
import {BrowserRouter} from "react-router-dom";



 const renderEnter = (state:StateType) => {
    ReactDOM.render(
        <BrowserRouter> <App  appState={state} addPost={addPost}
                              onchageMessgaeNewTetxtTerea={onchageMessgaeNewTetxtTerea} addMessages={addMessages}
                              onchageAddMessages={ onchageAddMessages}
        />
        </BrowserRouter>,document.getElementById('root')
    );
}

renderEnter(state)
subscriber(renderEnter)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






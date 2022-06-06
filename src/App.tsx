import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";

import { Routes, Route} from "react-router-dom";
import {addPost, onchageMessgaeNewTetxtTerea, state, StateType} from "./Redax/State";

type PropsApp = {
    /* MyPostsItem:Array<{id:number ,name:string ,like:number}>
     DialogItem:Array<{id:number,name:string}>
     Messages:Array<{id:number,message:string}>*/
    appState: StateType
    addPost:()=>void
    onchageMessgaeNewTetxtTerea:(PostMessage:string)=>void
    addMessages:()=>void
    onchageAddMessages:(TextOnchage:string)=>void

}

export const App = (props: PropsApp) => {

    return (

            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/message" element={
                            <Dialogs state={props.appState.MessagesPage} addMessages={props.addMessages} onchageAddMessages={props.onchageAddMessages}/>}/>
                        <Route path="/Profile" element={
                            <Profile state={props.appState.ProfilePage} addPost={addPost}
                                     onchageMessgaeNewTetxtTerea={props.onchageMessgaeNewTetxtTerea} />}/>
                    </Routes>
                </div>
            </div>



    )
}


export default App;

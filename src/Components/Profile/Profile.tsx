import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, onchageMessgaeNewTetxtTerea, ProfilePageElements} from "../../Redax/State";


type ProfilePropsType={
    state:ProfilePageElements
    addPost:()=>void
    onchageMessgaeNewTetxtTerea:(PostMessage:string)=>void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div >
            <ProfileInfo/>
           <MyPosts profileState={props.state} addPost={props.addPost}
                    onchageMessgaeNewTetxtTerea={onchageMessgaeNewTetxtTerea}

           />
        </div>
    );
};




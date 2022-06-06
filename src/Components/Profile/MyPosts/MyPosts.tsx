import React, {createRef} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageElements} from "../../../Redax/State";





type MyPostsPropsType={
    profileState:ProfilePageElements
    addPost:()=>void
    onchageMessgaeNewTetxtTerea:(PostMessage:string)=>void

}


export const MyPosts = (props:MyPostsPropsType) => {





    let  MyPostsElements=props.profileState.MyPostsItem.map((el)=><Post message={el.name} like={el.like} key={el.id}/>)



    let newPostElement = createRef<HTMLTextAreaElement>()



    const add = () => {
        if(newPostElement.current){
           /* let text=newPostElement.current.value*/
            props.addPost()

        }
    }

    const onChangeTextareaHandler = () => {
        if(newPostElement.current){
            let text=newPostElement.current.value
            props.onchageMessgaeNewTetxtTerea(text)
            newPostElement.current.value=''
        }

    }

    return (
        <div className={s.postsBlock}>
            <div>
               <h3> My posts</h3>
            </div>
            <div>
                <textarea ref={newPostElement} onChange={onChangeTextareaHandler} value={props.profileState.messgaeNewTetxtTerea} />
            </div>
            <div>
                <button onClick={add}>Add post</button>
            </div>

            <div className={s.item}>
                { MyPostsElements}
            </div>


        </div>
    );
};


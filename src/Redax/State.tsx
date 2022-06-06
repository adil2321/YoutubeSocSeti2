import React from "react";
/*import {renderEnter} from "../render";*/




 export let renderEnter = (state:StateType) => {
     console.log('fd')
     console.log('k')
}

export const subscriber = (callback: (state:StateType) => void ) => {   //(callback: (state: StateType)
     renderEnter = callback
}


export const state: StateType = {

    ProfilePage: {

        messgaeNewTetxtTerea: 'it-inkubator',
        MyPostsItem: [
            {id: 0, name: 'Hi,how are you ?', like: 15},
            {id: 1, name: 'It my first post', like: 43},
        ],

    },
    MessagesPage: {
        DialogItem: [
            {id: 1, name: 'Adil'},
            {id: 2, name: 'Akl'},
            {id: 3, name: 'Koko'},
            {id: 4, name: 'Erma'},
        ],

        messageAddDialog: 'adil',
        Messages: [
            {id: 0, message: 'Hi'},
            {id: 1, message: 'How is your it-Kamasutra'},
            {id: 2, message: 'Yo'},
        ]
    }
}



export const addMessages = () => {
    let newPost = {
        id: Math.random(),
        message: state.MessagesPage.messageAddDialog,
    }
    state.MessagesPage.Messages.push(newPost)
    renderEnter(state)
}

export const onchageAddMessages = (textOnchage: string) => {
    state.MessagesPage.messageAddDialog = textOnchage
    renderEnter(state)
}


export const addPost = () => {
    let newPost = {
        id: 3,
        name: state.ProfilePage.messgaeNewTetxtTerea,
        like: 0
    }
    state.ProfilePage.MyPostsItem.push(newPost)
    state.ProfilePage.messgaeNewTetxtTerea = ''
    renderEnter(state)

}

export const onchageMessgaeNewTetxtTerea = (PostMessage: string) => {
    state.ProfilePage.messgaeNewTetxtTerea = PostMessage
    renderEnter(state)
}


export type StateType = {

    ProfilePage: ProfilePageElements
    MessagesPage: MessagesPageElements


}
export type MessagesPageElements = {
    messageAddDialog: string
    Messages: Array<DialogType>
    DialogItem: Array<DialogElement>
}

export type ProfilePageElements = {
    MyPostsItem: Array<MyPostsElement>
    messgaeNewTetxtTerea: string
}

export type MyPostsElement = {
    id: number
    name: string
    like: number


}
export type DialogElement = {
    id: number
    name: string
}
export type DialogType = {
    id: number
    message: string
}

import React from 'react';
import {DialogItems} from './DialogItem/DialogItems';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {MessagesPageElements} from "../../Redax/State";

/*import {DialogItems} from "./DialogItems";*/





type DialogsPropsType={
    state:MessagesPageElements
    addMessages:()=>void
    onchageAddMessages:(TextOnchage:string)=>void

}



export const Dialogs = (props:DialogsPropsType) => {

    let dialogsElements = props.state.DialogItem.map((el, id) =>
        <DialogItems key={el.id} name={el.name} id={el.id}/>);

    let MessageElements = props.state.Messages.map((el) =>
        <Message message={el.message} addMessages={props.addMessages} state={props.state}   onchageAddMessages={props.onchageAddMessages} key={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {MessageElements}
            </div>

        </div>

    );
};


import s from "./../Dialogs.module.css";
import React from "react";
import {MessagesPageElements} from "../../../Redax/State";

type MessagePropsType = {
    message: string
    addMessages:()=>void
    state:MessagesPageElements
    onchageAddMessages:(TextOnchage:string)=>void


}
export const Message = (props: MessagePropsType) => {


    const ref=React.createRef<HTMLTextAreaElement>()


    const addPage= () => {
        if(ref.current){
            /*const addText=ref.current.value*/
            props.addMessages()

        }

    }

    const onChangeTextareaHandler = () => {
      if(ref.current){
          let text= ref.current.value
          props.onchageAddMessages(text)
          /*ref.current.value=''*/

      }

    }










    return (
        <div>
            <div className={s.dialog}>{props.message}</div>
            <div>
                <textarea ref={ref}
                          onChange={onChangeTextareaHandler} value={props.state.messageAddDialog} ></textarea>
            </div>
            <div>
                <button onClick={addPage}>add</button>
            </div>
        </div>
    )

}
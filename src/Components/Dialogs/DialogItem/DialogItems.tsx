
import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
type DialogItemsPropsType = {
    name: string
    id: number
}
export const DialogItems = (props: DialogItemsPropsType) => {


    let path = '/dialog/' + props.id
    return (

        <div className={s.dialog + ' ' + s.active}>

            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
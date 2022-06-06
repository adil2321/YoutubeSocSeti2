import React from 'react';
import s from './Post.module.css'


type PostPropsType={
    message:string
    like:number
}

export const Post = (props:PostPropsType) => {

    return (
        <div className={s.item}>
            <div>

                <img src={'https://img.championat.com/s/735x490/news/big/x/e/v-znachit-virtus-pro-organizacija-predstavila-novyj-logotip_15422783561214372278.jpg'}/>
                {props.message}
                <div><span> like </span></div>{props.like}
            </div>

        </div>
    );
};


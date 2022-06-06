import React from 'react';
import s from './ProfileInfo.module.css'




export const ProfileInfo = () => {
    return (
        <div>
            <img src={'https://st2.depositphotos.com/3591429/11817/i/600/depositphotos_118173074-stock-photo-woman-splashing-water-on-beach.jpg'}/>
            <div className={s.descriptionBlock}>ava+description</div>

        </div>
    );
};


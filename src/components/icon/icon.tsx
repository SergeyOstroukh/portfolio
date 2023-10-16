import React from 'react';
import iconThree from '../../assets/images/sprite.svg'

type Icon={
    iconId:string
    width?:string
    height?:string
    viewBox?:string
}
export const Icon = (props:Icon) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || '50'} height={props.height|| '50'} viewBox={props.viewBox || '0 0 50 50'} fill="none">
            <use xlinkHref={`${iconThree}#${props.iconId}`}/>
        </svg>

    );
};


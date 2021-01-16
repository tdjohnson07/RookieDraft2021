import React from 'react';
import {useSelector} from 'react-redux';

export default function RoundHeader(){
    const draftIndex = useSelector((state) => state.draftIndexReducer);
    

    let round = Math.floor(draftIndex/12) + 1;
    let pick = (draftIndex + 1)%12 ? (draftIndex + 1)%12 : 12; 

    return (
        <div>
            <h2>{"Round: " + round + " Pick: " + pick + " Overall: " + (draftIndex + 1)}</h2>
        </div>
    )
}
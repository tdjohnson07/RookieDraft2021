import React from 'react';
import {useSelector} from 'react-redux';

export default function TeamDrafting(){
    const draftIndex = useSelector((state) => state.draftIndexReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);


    return (
        <div>
            <h2>On the Clock: {draftOrder[draftIndex]?.name}</h2>
            <img className="teamLogo"  src={process.env.PUBLIC_URL + draftOrder[draftIndex]?.imagePath} alt="logo"/>
            <h2>Team Needs: {draftOrder[draftIndex]?.needs}</h2>
            <h2>2020 Results: {draftOrder[draftIndex]?.results}</h2>
        </div>
    )
}
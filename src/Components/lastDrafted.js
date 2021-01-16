import React from 'react';
import {useSelector} from 'react-redux';

export default function LastDrafted(){
    const draftIndex = useSelector((state) => state.draftIndexReducer);
    const playersDrafted = useSelector((state) => state.playersDraftedReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);

    let teamLogo;
        if(draftIndex > 0){
           teamLogo = <img className="teamLogo"  src={process.env.PUBLIC_URL + draftOrder[draftIndex-1]?.imagePath} alt="logo"/>
        }

    return (
        <div>
            <h2>Last Drafted: {playersDrafted[draftIndex -1]?.fullName}</h2>
            <h2>Position: {playersDrafted[draftIndex -1]?.position}</h2>
            <h2>School: {playersDrafted[draftIndex -1]?.school}</h2>
            <h2>Drafted By: {playersDrafted[draftIndex -1]?.draftedBy}</h2>
            {teamLogo}
      </div>
    )
}
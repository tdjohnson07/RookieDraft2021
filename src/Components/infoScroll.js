import React from 'react';
import {useSelector} from 'react-redux';
import ScrollText from 'react-scroll-text';

export default function InfoScroll(){
    const playersDrafted = useSelector((state) => state.playersDraftedReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);
    let roundText = "";

    for(let i = 0; i<draftOrder.length; i++){
     let playerPicked = " ";
     if(playersDrafted?.length > i){
         playerPicked = " " +  " - "  + playersDrafted[i].fullName + ", " + playersDrafted[i].position + ", " + playersDrafted[i].school + " "; 
     }
      roundText = roundText + (i+1).toString() + ": " +  draftOrder[i].name + playerPicked;
    }


    return (
        <div>
            <ScrollText speed={100} className="pickScroll">{roundText}</ScrollText>
      </div>
    )
}
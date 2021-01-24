import React from 'react';
import {useSelector} from 'react-redux';
import ScrollText from 'react-scroll-text';

export default function InfoScroll(){
    const playersDrafted = useSelector((state) => state.playersDraftedReducer);
    const draftOrder = useSelector((state) => state.draftOrderReducer);
    let displayText = "";
    let round1Text = "Round 1 : ";
    let round2Text = "Round 2 : ";
    let round3Text = "Round 3 : ";
    let round4Text = "Round 4 : ";

    for(let i = 0; i<draftOrder.length; i++){
     let playerPicked = " ";
     if(playersDrafted?.length > i){
         playerPicked = "  - "  + playersDrafted[i].fullName + ", " + playersDrafted[i].position + ", " + playersDrafted[i].school + " "; 
     }
     if(i < 12){
        round1Text = round1Text + (i+1).toString() + ": " +  draftOrder[i].name + playerPicked;
     }
     else if (i < 24){
        round2Text = round2Text + (i+1).toString() + ": " +  draftOrder[i].name + playerPicked;
     }
     else if (i < 36){
        round3Text = round3Text + (i+1).toString() + ": " +  draftOrder[i].name + playerPicked;
     }
     else {
        round4Text = round4Text + (i+1).toString() + ": " +  draftOrder[i].name + playerPicked;
     }
      
    }

    displayText = round1Text + round2Text + round3Text + round4Text;
    return (
        <div>
            <ScrollText speed={100} className="pickScroll">{displayText}</ScrollText>
      </div>
    )
}
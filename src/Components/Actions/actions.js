export const updateTeamDrafting = (team) => ({
    type: "UPDATE_TEAM_DRAFTING",
    payload: team
})

export const updateDraftIndex = () => ({
    type: "UPDATE_DRAFT_INDEX"
})

export const addDraftedPlayerToTeam = (player, team) => ({
    type: "ADD_DRAFTED_PLAYER_TO_TEAM",
    payload: {player: player, team: team}
})

export const replaceDraftedPlayerOnTeam = (playerToRemove, playerToAdd) => ({
    type: "REPLACE_PLAYER_ONTEAM",
    payload: {playerToRemove: playerToRemove, playerToAdd: playerToAdd}
})

export const addPlayerDrafted = (player) => ({
    type: "ADD_PLAYER_DRAFTED",
    payload: player
})

export const removePlayerDrafted = (player) => ({
    type: "REMOVE_PLAYER_DRAFTED",
    payload: player
})

export const replacePlayerAvailable = (playerToRemove, playerToAdd) => ({
    type: "REPLACE_PLAYER_AVAILABLE",
    payload: {playerToRemove: playerToRemove, playerToAdd: playerToAdd}
})

export const replacePlayerDrafted = (playerToRemove, playerToAdd) => ({
    type: "REPLACE_PLAYER_DRAFTED",
    payload: {playerToRemove: playerToRemove, playerToAdd: playerToAdd}
})

export const updateDraftOrder = (team, index) => ({
    type: "UPDATE_DRAFT_ORDER",
    payload: {team: team, index: index}
})
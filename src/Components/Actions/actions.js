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

export const addPlayerDrafted = (player) => ({
    type: "ADD_PLAYER_DRAFTED",
    payload: player
})

export const removePlayerDrafted = (player) => ({
    type: "REMOVE_PLAYER_DRAFTED",
    payload: player
})
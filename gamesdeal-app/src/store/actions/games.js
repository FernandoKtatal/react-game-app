export const addGamesResquest = () => ({
    type: "ADD_GAMES_REQUESTS",
});

export const addGamesSuccess = data => ({
    type: "ADD_GAMES_SUCCESS",
    payload: {
        data,
    }
});

export const searchGamesRequest = gameName => ({
    type: "SEARCH_GAMES_REQUESTS",
    payload: {
        gameName,
    }
});

export const searchGamesSucess = data => ({
    type: "SEARCH_GAMES_SUCCESS",
    payload: {
        data,
    }
})
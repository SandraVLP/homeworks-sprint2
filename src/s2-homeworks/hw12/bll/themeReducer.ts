const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': 
        return{
            ...state,
            themeId: action.id
        }
        default:
            return state
    }
}

type ActionType = {
    type: 'SET_THEME_ID';
    id: number;
};

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any

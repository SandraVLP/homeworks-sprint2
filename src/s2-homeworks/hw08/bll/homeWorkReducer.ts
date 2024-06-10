import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state].sort((a, b) => 
                action.payload === 'up' 
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            );
            return newState;
        }
        case 'check': {
            const newState = state.filter(user => user.age > action.payload);
            return newState;
           
        }
        default:
            return state
    }
}

import { State } from '@/models/reducer';

enum Types {
    ACTUAL_USER = 'ACTUAL_USER',
    GET_USER = 'GET_USER',
}

export const initialState: State = {
    userName: '',
};

export const Reducer = (state = initialState, action: any): State => {
    switch (action.type) {
        case Types.ACTUAL_USER:
            return { ...state, ...SetActualUser(action, state) };
        case Types.GET_USER:
            return { ...state, ...GetActualUser(action, state) };
        default:
            return state;
    }
};

const SetActualUser = (action: any, state: State) => {
    return { userName: action.payload }
}

const GetActualUser = (action: any, state: State) => {
    return { userName: action.payload }
}
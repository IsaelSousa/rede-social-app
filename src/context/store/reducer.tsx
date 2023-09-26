import { State } from '@/models/reducer';

enum Types {
    ACTUAL_USER = 'ACTUAL_USER',
    GET_USER = 'GET_USER',
    SET_POST = 'SET_POST',
    SET_LOADER = 'SET_LOADER'
}

export const initialState: State = {
    userName: '',
    loader: false,
    data: null
};

export const Reducer = (state = initialState, action: any): State => {
    switch (action.type) {
        case Types.ACTUAL_USER:
            return { ...state, ...SetActualUser(action, state) };
        case Types.GET_USER:
            return { ...state, ...GetActualUser(action, state) };
        case Types.SET_POST:
            return { ...state, ...SetGetPost(action, state) };
        case Types.SET_LOADER:
            return { ...state, ...SetLoader(action, state) };
        default:
            return state;
    }
};

const SetActualUser = (action: any, state: State) => {
    return { userName: action.payload };
}

const GetActualUser = (action: any, state: State) => {
    return { userName: action.payload };
}

const SetGetPost = (action: any, state: State) => {
    return { data: action.payload };
}

const SetLoader = (action: any, state: State) => {
    return { loader: action.payload };
}
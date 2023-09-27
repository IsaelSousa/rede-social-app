import React, { Dispatch, createContext, useContext, useReducer } from 'react';
import { Reducer, initialState } from './store/reducer';
import { State } from '@/models/reducer';

interface ContextProps {
    children: React.ReactNode;
}

export const Context = createContext<State | any>({} as State);

export const Provider = (props: ContextProps) => {
    return (
        <Context.Provider value={useReducer(Reducer, initialState)}>
            {props.children}
        </Context.Provider>
    );
}
export const useStateValue = () => useContext(Context);

export function useSelector<T>(selector: (state: State) => T): T {
    const [state] = useStateValue();
    return selector(state);
  }

  export const useDispatch = () => {
    const [state, dispatch] = useStateValue();
    return dispatch;
  }

// export function useProvider(): State {
//     return useContext(Context);
// }
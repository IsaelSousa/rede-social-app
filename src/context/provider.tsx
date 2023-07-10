import React, { createContext, useContext } from 'react';

interface ContextProps {
    children: React.ReactNode
}

type contextType = {

}

export const Context = createContext<contextType>({} as contextType);

export const Provider = (props: ContextProps) => {

    const state = {

    }

    const actions = {

    }

    return (
        <Context.Provider value={{ ...state, ...actions }}>
            {props.children}
        </Context.Provider>
    );
}

export function useProvider(): contextType {
    return useContext(Context);
}
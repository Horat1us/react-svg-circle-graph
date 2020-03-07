import * as React from "react";

export interface State {
    angle: number;
    border: number;
    radius: number;
    color1: string;
    color2: string;
}

export const initialState: Readonly<State> = {
    angle: 145,
    border: 5,
    radius: 45,
    color1: "#FFFF00",
    color2: "#2E2EFE",
};

export type Action<TKey extends keyof State = keyof State> = {
    attribute: TKey;
    value: State[TKey];
};
export type Dispatch = React.Dispatch<Action>;
export type Reducer = React.Reducer<State, Action>;
export const reducer: Reducer = (prevState, { attribute, value }) => {
    if (prevState[ attribute ] === value) {
        return prevState;
    }
    return {
        ...prevState,
        [ attribute ]: value,
    };
};

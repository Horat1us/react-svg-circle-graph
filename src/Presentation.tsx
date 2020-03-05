import * as React from "react";
import { CircleChart } from "./components/circle-chart";

export interface State {
    angle: number;
    border: number;
    radius: number;
    fill: string;
}

export const initialState: State = {
    angle: 145,
    border: 5,
    radius: 45,
} as Readonly<State>;

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
export const InputRange: React.FC<{ dispatch: Dispatch, value: State[keyof State], attribute: keyof State, unit: string } & React.HTMLProps<HTMLInputElement>> =
    ({ dispatch, value, attribute, unit, ...childProps }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(event.currentTarget.value, 10);
            dispatch({ attribute: attribute, value });
        };
        const id = `${attribute}Input`;
        return <div className="form-group">
            <label htmlFor={id}>
                Select {attribute} <span className="badge badge-secondary">{value}{unit}</span>
            </label>
            <input
                type="range" step={1} min={1} max={100} className="form-control-range" id="radiusInput"
                value={value}
                onChange={handleChange}
                {...childProps}
            />
        </div>
    };

export const Presentation: React.FC<{}> = () => {
    const [state, dispatch] = React.useReducer<Reducer>(reducer, initialState);

    return (
        <article>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Demonstration</div>
                        <div className="card-body">
                            <CircleChart height="200px" {...state}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <InputRange dispatch={dispatch} value={state.angle} attribute="angle" unit="°" max={360} min={1}/>
                    <InputRange dispatch={dispatch} value={state.border} attribute="border" unit="px" max={10}/>
                    <InputRange dispatch={dispatch} value={state.radius} attribute="radius" unit="px" max={100}/>
                </div>
            </div>

        </article>
    )
};

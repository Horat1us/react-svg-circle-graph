import * as React from "react";
import { Dispatch, State } from "./state";

export type InputProps = { dispatch: Dispatch, value: State[keyof State], attribute: keyof State, unit: string };

export const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> =
    ({ dispatch, value, attribute, unit, ...childProps }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = ["range", "number"].includes(childProps.type as string)
                ? parseInt(event.currentTarget.value, 10)
                : event.currentTarget.value;
            dispatch({ attribute: attribute, value });
        };
        switch (childProps.type) {
            case "range":
                Object.assign(childProps, {
                    ...childProps,
                    step: 1,
                    min: 1,
                    max: 100,
                });
                break;
        }
        const id = `${attribute}Input`;
        return <div className="form-group">
            <label htmlFor={id}>
                Select {attribute} <span className="badge badge-secondary">{value}{unit}</span>
            </label>
            <input
                className="form-control-range" id={id}
                value={value}
                onChange={handleChange}
                {...childProps}
            />
        </div>
    };

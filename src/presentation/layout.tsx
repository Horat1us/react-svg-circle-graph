import * as React from "react";
import { CircleChart } from "../components/circle-chart";
import { initialState, reducer, Reducer } from "./state";
import { Input } from "./input";

export const Layout: React.FC<{}> = React.memo(() => {
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
                    <Input dispatch={dispatch} value={state.angle} attribute="angle" unit="°" max={360} min={1} type="range"/>
                    <Input dispatch={dispatch} value={state.border} attribute="border" unit="px" max={10} type="range"/>
                    <Input dispatch={dispatch} value={state.radius} attribute="radius" unit="px" max={100} type="range"/>
                    <Input dispatch={dispatch} value={state.color1} attribute="color1" unit="" type="color"/>
                    <Input dispatch={dispatch} value={state.color2} attribute="color2" unit="" type="color"/>
                </div>
            </div>

        </article>
    )
});
Layout.displayName = "Presentation.Layout";

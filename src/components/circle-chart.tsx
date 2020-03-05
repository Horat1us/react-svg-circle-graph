import * as React from "react";
import { SvgCircleArc } from "../components/svg-circle-arc";

export interface CircleChartProps {
    angle: number;
    radius: number;
    border: number;
}

export type CircleChartSVGProps =
    CircleChartProps & React.SVGProps<SVGSVGElement>;

export const CircleChart = React.forwardRef<SVGSVGElement, CircleChartSVGProps>(
    (
        { angle, border, radius, ...childProps },
        ref,
    ) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 300 200" {...childProps} ref={ref}>
                <defs>
                    <linearGradient id="grad1">
                        <stop offset="0" stopColor="yellow"/>
                        <stop offset="25%" stopColor="blue"/>
                    </linearGradient>
                </defs>
                <SvgCircleArc
                    r={radius}
                    fill="none"
                    strokeWidth={border}
                    stroke="blue"
                    angle={angle * 1.2}
                    transform="rotate(90)"
                />
                <SvgCircleArc
                    r={radius}
                    angle={360 - angle * 0.8}
                    fill="none"
                    strokeWidth={border}
                    stroke="yellow"
                    transform="rotate(-135) scale(.75)"
                />
                <g transform={`translate(${radius * 2 + border * 4}, 0)`}>
                    <SvgCircleArc
                        r={radius}
                        angle={Math.min(180, angle)}
                        fill="none"
                        strokeWidth={border}
                        stroke="url(#grad1)"
                        transform={`rotate(-90)`}
                    />
                    {angle > 180 && <SvgCircleArc
                        r={radius}
                        angle={angle - 180}
                        fill="none"
                        strokeWidth={border}
                        stroke="yellow"
                        transform={`rotate(90)`}
                    />}
                </g>
            </svg>
        )
    }
);


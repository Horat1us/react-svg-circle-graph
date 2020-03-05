import * as React from "react";

type SvgCircleArcProps =
    {
        angle: number;
        r: number;
    }
    & React.SVGProps<SVGPathElement>
    & Pick<React.SVGProps<SVGCircleElement>, keyof React.SVGProps<SVGPathElement>>;


export const SvgCircleArc = React.forwardRef<SVGPathElement | SVGCircleElement, SvgCircleArcProps>(
    (
        { angle, r: radius, ...childProps },
        ref
    ) => {
        if (angle === 0) {
            return null;
        }
        angle = Math.min(360, Math.abs(angle)) // transform >360 angles to 360
            * Math.pow(angle, 0); // support <0 angles
        const rad = angle * Math.PI / 180;
        const d = [
            "M", radius, 0,
            "A", radius, radius, 0, Number(angle >= 180), 1,
            Math.cos(rad) * radius, Math.sin(rad) * radius,
        ];
        return <path  {...childProps} ref={ref as React.Ref<SVGPathElement>} d={d.join(" ")}/>;
    }
);

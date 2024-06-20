import { useRef, useEffect, ReactNode, useState } from 'react';
import { ReactSVGPanZoom, TOOL_AUTO, Tool, Value } from 'react-svg-pan-zoom';

interface SVGViewerProps {
    svgContent: ReactNode;
}

export const SVGViewer = (props: SVGViewerProps) => {
    const Viewer = useRef<ReactSVGPanZoom>(null);
    const [value, setValue] = useState<Value>(Viewer.current?.getValue() || { 
        SVGHeight: 1440,
        SVGWidth: 1440,
        a: 0.2777777777777778,
        b: 0,
        c: 0,
        d: 0.2777777777777778,
        e: 0,
        f: 0,
        endX: null,
        endY: null,
        focus: false,
        miniatureOpen: true,
        mode: 'idle',
        startX: null,
        startY: null,
        version: 2,
        viewerHeight: 400,
        viewerWidth: 400
    });
    const [tool, setTool] = useState<Tool>(TOOL_AUTO);

    useEffect(() => {
        if (Viewer.current) {
            Viewer.current.fitToViewer();
        }
    }, [props.svgContent]);

    const handleClick = (event: any): any => {
        console.log(event.x, event.y, event.originalEvent);
    };

    return (
        <div style={{ height: "100%" }}>
            <ReactSVGPanZoom
                width={1000}
                height={450}
                value={value}
                onChangeValue={setValue}
                tool={tool}
                onChangeTool={setTool}
                onClick={handleClick}
                style={{ border: '1px solid #000' }}
                background="#FFF"
                SVGBackground="#FFF">
                <svg
                    width="100%"
                    height="100%"
                    style={{ width: '100%', height: '100%' }}
                >
                    {props.svgContent}
                </svg>
            </ReactSVGPanZoom>
        </div>
    );
};

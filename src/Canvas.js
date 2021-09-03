import React, {useEffect, useRef} from "react";
import useCanvas from "./useCanvas";

const Canvas = props => {  
  
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);
  
	return <canvas id="drawing-canvas" ref={canvasRef} {...rest}/>;
};

export default Canvas;
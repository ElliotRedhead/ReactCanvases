import React from "react";
import useCanvas from "./useCanvas";

const Canvas = props => {  
  
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);
	const canvasWidth = window.innerWidth;
	const canvasHeight = window.innerHeight;
  
	return <canvas id="drawing-canvas" width={canvasWidth} height={canvasHeight} ref={canvasRef} {...rest}/>;
};

export default Canvas;
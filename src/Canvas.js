import React from "react";
import useCanvas from "./useCanvas";

const Canvas = props => {  
  
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);
  
	return <canvas id="drawing-canvas" width="1500" height="800" ref={canvasRef} {...rest}/>;
};

export default Canvas;
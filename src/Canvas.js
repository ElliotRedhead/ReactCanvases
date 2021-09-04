import React from "react";
import useCanvas from "./useCanvas";

const Canvas = props => {  
  
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);
  
	return <canvas id="drawing-canvas" width="1920" height="1076" ref={canvasRef} {...rest}/>;
};

export default Canvas;
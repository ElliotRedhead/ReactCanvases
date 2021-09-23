import useCanvas from "./useCanvas";

interface props {
	draw: draw
}

const Canvas = (props:props):JSX.Element => {  
  
	const { draw, ...rest } = props;
	const canvasRef = useCanvas(draw);
	const canvasWidth = window.innerWidth;
	const canvasHeight = window.innerHeight;
  
	return <canvas
		id="drawing-canvas"
		width={canvasWidth}
		height={canvasHeight}
		ref={canvasRef}
		{...rest} />;
};

export default Canvas;

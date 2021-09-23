
import { useRef, useEffect } from "react";

const useCanvas = (draw:draw):React.RefObject<HTMLCanvasElement> => {
  
	const canvasRef = useRef<HTMLCanvasElement>(null);
  
	useEffect(() => {
    
		const canvas = canvasRef.current;
		const context:context = canvas?.getContext("2d");
		let frameCount = 0;
		let animationFrameId:number;
    
		const render = () => {
			frameCount++;
			draw(context, frameCount);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();
    
		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);
  
	return canvasRef;
};

export default useCanvas;

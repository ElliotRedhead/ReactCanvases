import Canvas from "./Canvas";
import "./Canvas.css";

interface triangleAttrs {
	initialX:number;
	initialY:number;
	size: number;
}


const AnimatedTriangles = ():JSX.Element => {

	const triangleAttrs:triangleAttrs = {
		initialX: 300,
		initialY: 200,
		size: 100
	};


	const draw = (ctx:context, frameCount:number) => {
		if (ctx) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);


			const triangleXOrdOne = triangleAttrs.initialX;
			const triangleYOrdOne = triangleAttrs.initialY;
			const triangleXOrdTwo = triangleAttrs.initialX+triangleAttrs.size/2;
			const triangleYOrdTwo = triangleAttrs.initialY+triangleAttrs.size;
			const triangleXOrdThree = triangleAttrs.initialX-triangleAttrs.size/2;
			const triangleYOrdThree = triangleAttrs.initialY+triangleAttrs.size;
			const triangleCenterXOrd = (triangleXOrdOne + triangleXOrdTwo + triangleXOrdThree)/3;
			const triangleCenterYOrd = (triangleYOrdOne + triangleYOrdTwo + triangleYOrdThree)/3;


			ctx.fillStyle = "blue";
			ctx.beginPath();
			ctx.moveTo(triangleXOrdOne, triangleYOrdOne);
			ctx.lineTo(triangleXOrdTwo, triangleYOrdTwo);
			ctx.lineTo(triangleXOrdThree, triangleYOrdThree);
			ctx.lineTo(triangleXOrdOne, triangleYOrdOne);
			ctx.fill();
		
		}

	};
  
	return <Canvas draw={draw} />;
};

export default AnimatedTriangles;

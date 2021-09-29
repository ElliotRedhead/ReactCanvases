import Canvas from "./Canvas";
import "./Canvas.css";

interface triangleAttrs {
	initialX:number;
	initialY:number;
	size: number;
	longestLength: number;
}


const AnimatedTriangles = ():JSX.Element => {

	const triangleAttrs:triangleAttrs = {
		initialX: 500,
		initialY: 500,
		size: 100,
		longestLength: 500
	};


	const draw = (ctx:context, frameCount:number) => {
		if (ctx) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			const triangleXOrdOne = triangleAttrs.initialX;
			const triangleYOrdOne = triangleAttrs.initialY;
			
			// const distance = Math.sqrt((dx)**2 + (dy)**2);
			// offset x-ord by a known value to start with, then calculate the maximum that the y-ord can be offset by
			const triangleXOrdTwo = triangleXOrdOne + 1 * triangleAttrs.longestLength;
			const triangleYOrdTwo = Math.sqrt((triangleAttrs.longestLength)**2-(triangleXOrdOne-triangleXOrdTwo)**2);

			// generate coordinate that fulfils the rest of the triangle based on area
			const triangleXOrdThree = 400;
			const triangleYOrdThree = 400;

			


			const drawTriangle = (ctx:context) => {	
				if (ctx) {
					ctx.fillStyle = "white";
					ctx.beginPath();
					ctx.moveTo(triangleXOrdOne, triangleYOrdOne);
					ctx.lineTo(triangleXOrdTwo, triangleYOrdTwo);
					ctx.lineTo(triangleXOrdThree, triangleYOrdThree);
					ctx.lineTo(triangleXOrdOne, triangleYOrdOne);
					ctx.fill();
				}
			};

			// ctx.translate(triangleCenterXOrd, triangleCenterYOrd);
			// ctx.rotate(0.01 * Math.PI / 2);
			// ctx.translate(-triangleCenterXOrd, -triangleCenterYOrd);
			drawTriangle(ctx);

		}

	};
  
	return <Canvas draw={draw} />;
};

export default AnimatedTriangles;

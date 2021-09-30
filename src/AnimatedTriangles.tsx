import Canvas from "./Canvas";
import "./Canvas.css";

interface triangleAttrs {
	initialX:number;
	initialY:number;
	size: number;
	longestSide: number;
}


const AnimatedTriangles = ():JSX.Element => {

	const triangleAttrs:triangleAttrs = {
		initialX: 700,
		initialY: 500,
		size: 100,
		longestSide: 300
	};

	const randomDirectionIsPositive = ():boolean => {
		let vector;
		Math.random() > 0.5 ? vector = true : vector = false;
		return vector;
	};

	const draw = (ctx:context, frameCount:number) => {
		if (ctx) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			const triangleXOrdOne = triangleAttrs.initialX;
			const triangleYOrdOne = triangleAttrs.initialY;
			
			// const distance = Math.sqrt((dx)**2 + (dy)**2);
			// offset x-ord by a known value to start with, then calculate the maximum that the y-ord can be offset by
			let triangleXOrdTwo:number = triangleAttrs.initialX;
			if (randomDirectionIsPositive()) {
				triangleXOrdTwo = triangleXOrdOne + Math.random() * triangleAttrs.longestSide;
			} else {
				triangleXOrdTwo = triangleXOrdOne - Math.random() * triangleAttrs.longestSide;
			}

			let triangleYOrdTwo:number = triangleAttrs.initialY;

			if (randomDirectionIsPositive()){
				triangleYOrdTwo = triangleYOrdOne + Math.sqrt((triangleAttrs.longestSide)**2-(triangleXOrdOne-triangleXOrdTwo)**2);
			} else {
				triangleYOrdTwo = triangleYOrdOne - Math.sqrt((triangleAttrs.longestSide)**2-(triangleXOrdOne-triangleXOrdTwo)**2);
			}

			// TODO: generate third coordinate that fulfils the rest of the triangle based on area
			// height = (2xarea) / base
		


			const triangleXOrdThree = triangleAttrs.initialX + 50;
			const triangleYOrdThree = triangleAttrs.initialY + 50;


			


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

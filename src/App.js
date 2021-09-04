import React from "react";
import Canvas from "./Canvas";
import "./App.css";

const App = () => {

	const randomDirection = () => {
		let vector;
		Math.random() > 0.5 ? vector = true : vector = false;
		return vector;
	};

	const numberNodes = 100;
	const nodeAttrs = [];
	for (let i=0; i < numberNodes; i++){
		const randomX = Math.floor(Math.random()*1300) + 100;
		const transformX = 0.5*Math.random()*0.01;
		const transformXDirection = randomDirection();
		const randomY = Math.floor(Math.random()*500) + 100;
		const transformY = Math.random()*0.01;
		const transformYDirection = randomDirection();
		const rateGrowth = Math.random()*0.01 + 0.002;
		nodeAttrs.push({xOrd: randomX, yOrd: randomY, rateGrowth, transformX, transformXDirection, transformY, transformYDirection});
	}
	console.log(nodeAttrs);
	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#fff'; //white

		for (let i=0; i < numberNodes; i++){
			ctx.beginPath();
			let xPath;
			let yPath;

			if (nodeAttrs[i].transformXDirection){
				xPath = nodeAttrs[i].xOrd + 100*Math.sin(frameCount * nodeAttrs[i].transformX);
			} else {
				xPath = nodeAttrs[i].xOrd - 100*Math.sin(frameCount * nodeAttrs[i].transformX);
			}

			if (nodeAttrs[i].transformYDirection){
				yPath = nodeAttrs[i].yOrd + 100*Math.sin(frameCount * nodeAttrs[i].transformX);
			} else {
				yPath = nodeAttrs[i].yOrd - 100*Math.sin(frameCount * nodeAttrs[i].transformX);
			}

			const growth = 10*Math.sin(frameCount*nodeAttrs[i].rateGrowth)**2 + 5;
			ctx.arc(xPath, yPath, growth, 0, 2*Math.PI);
			ctx.fill();
		}
	};
  
	return <Canvas draw={draw} />;
};

export default App;

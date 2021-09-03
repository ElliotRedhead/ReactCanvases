import React from "react";
import Canvas from "./Canvas";
import "./App.css";

const App = () => {

	const numberNodes = 1000;
	const nodeAttrs = [];
	for (let i=0; i < numberNodes; i++){
		const randomX = Math.floor(Math.random()*1300) + 100;
		const randomY = Math.floor(Math.random()*500) + 100;
		const rateGrowth = Math.random()*0.01 + 0.002;
		nodeAttrs.push({xOrd: randomX, yOrd: randomY, rateGrowth});
	}

	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#fff'; //white

		for (let i=0; i < numberNodes; i++){
			ctx.beginPath();
			ctx.arc(nodeAttrs[i].xOrd, nodeAttrs[i].yOrd, 10*Math.sin(frameCount*nodeAttrs[i].rateGrowth)**2 + 0, 0, 2*Math.PI);
			ctx.fill();
		}
	};
  
	return <Canvas draw={draw} />;
};

export default App;

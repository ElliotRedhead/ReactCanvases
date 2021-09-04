import React from "react";
import Canvas from "./Canvas";
import "./App.css";

const App = () => {

	const randomDirection = () => {
		let vector;
		Math.random() > 0.5 ? vector = true : vector = false;
		return vector;
	};

	const numberNodes = 50;
	const nodeAttrs = [];
	for (let i=0; i < numberNodes; i++){
		const randomX = Math.floor(Math.random()*1300) + 50;
		const transformX = Math.random()*0.001;
		const transformXDirection = randomDirection();
		const randomY = Math.floor(Math.random()*500) + 100;
		const transformY = Math.random()*0.001;
		const transformYDirection = randomDirection();
		const rateGrowth = Math.random()*0.005;
		const opacity = Math.random()*0.005;
		const opacityChange = Math.random()*0.001;
		const opacityDirection = randomDirection();
		nodeAttrs.push({xOrd: randomX, yOrd: randomY, rateGrowth, transformX, transformXDirection, transformY, transformYDirection, opacity, opacityChange, opacityDirection});
	}
	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		for (let i=0; i < numberNodes; i++){
			let opacity;
			if (nodeAttrs[i].opacityDirection){
				opacity = Math.abs(nodeAttrs[i].opacity + Math.sin(frameCount * nodeAttrs[i].opacityChange));
			} else {
				opacity = Math.abs(nodeAttrs[i].opacity - Math.sin(frameCount * nodeAttrs[i].opacityChange));
			}
			ctx.fillStyle = `rgba(255,255,255,${opacity})`;
			
			ctx.beginPath();
			let xPath;
			let yPath;

			if (nodeAttrs[i].transformXDirection){
				xPath = nodeAttrs[i].xOrd + 500*Math.sin(frameCount * nodeAttrs[i].transformX)**2;
			} else {
				xPath = nodeAttrs[i].xOrd - 500*Math.sin(frameCount * nodeAttrs[i].transformX)**2;
			}

			if (nodeAttrs[i].transformYDirection){
				yPath = nodeAttrs[i].yOrd + 500*Math.sin(frameCount * nodeAttrs[i].transformY)**2;
			} else {
				yPath = nodeAttrs[i].yOrd - 500*Math.sin(frameCount * nodeAttrs[i].transformY)**2;
			}

			const growth = Math.sin(frameCount*nodeAttrs[i].rateGrowth)**2 + 30;
			ctx.arc(xPath, yPath, growth, 0, 2*Math.PI);
			ctx.fill();
		}
	};
  
	return <Canvas draw={draw} />;
};

export default App;

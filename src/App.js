import React from "react";
import Canvas from "./Canvas";
import "./App.css";

const App = () => {

	const randomDirection = () => {
		let vector;
		Math.random() > 0.5 ? vector = true : vector = false;
		return vector;
	};

	const numberNodes = 1000;
	const nodeAttrs = [];
	for (let i=0; i < numberNodes; i++){
		const initialX = Math.floor(Math.random() * 1920);
		const transformX = Math.random() * 0.001 + 0.0005;
		const transformXDirection = randomDirection();
		const initialY = Math.floor(Math.random()*1078);
		const transformY = Math.random() * 0.001 + 0.0001;
		const transformYDirection = randomDirection();
		const rateGrowth = Math.random() * 0.001;
		const initialOpacity = (Math.random()*3-1);
		const opacityChange = Math.random() * 0.005;
		const opacityDirection = randomDirection();
		let posX = initialX;
		let posY = initialY;
		let opacity = initialOpacity;
		let hue = Math.random() * (300-221) + 221;
		nodeAttrs.push({initialX, posX, initialY, posY, rateGrowth, transformX, transformXDirection, transformY, transformYDirection, initialOpacity, opacity, opacityChange, opacityDirection, hue});
	}


	const draw = (ctx, frameCount) => {
		frameCount = frameCount * 1.5;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		
		for (let i=0; i<nodeAttrs.length; i++){
			if (i % 3 !== 0){
				nodeAttrs[i].opacity = Math.sin(frameCount * nodeAttrs[i].opacityChange) + nodeAttrs[i].initialOpacity;
			} else {
				nodeAttrs[i].opacity = Math.sin(-frameCount * nodeAttrs[i].opacityChange) - nodeAttrs[i].initialOpacity;
			}

			ctx.fillStyle = `hsl(${nodeAttrs[i].hue},65%,45%,${nodeAttrs[i].opacity})`;
			
			ctx.beginPath();

			if (nodeAttrs[i].transformXDirection){
				nodeAttrs[i].posX = nodeAttrs[i].initialX + 300*Math.sin(frameCount * nodeAttrs[i].transformX);
			} else {
				nodeAttrs[i].posY = nodeAttrs[i].initialX - 300*Math.sin(frameCount * nodeAttrs[i].transformX);
			}
			if (nodeAttrs[i].posX < 0) {nodeAttrs[i].posX = Math.abs(nodeAttrs[i].posX);};
			if (nodeAttrs[i].posX > 1920) {nodeAttrs[i].posX = 1920 - (nodeAttrs[i].posX - 1920);};
			
			if (nodeAttrs[i].transformYDirection){
				nodeAttrs[i].posY = nodeAttrs[i].initialY + 300*Math.sin(frameCount * nodeAttrs[i].transformY);
			} else {
				nodeAttrs[i].posY = nodeAttrs[i].initialY - 300*Math.sin(frameCount * nodeAttrs[i].transformY);
			}
			if (nodeAttrs[i].posY < 0) {nodeAttrs[i].posY = Math.abs(nodeAttrs[i].posY);};
			if (nodeAttrs[i].posY > 1078) {nodeAttrs[i].posY = 1078 - (nodeAttrs[i].posY - 1078);};

			const growth = Math.sin(frameCount*nodeAttrs[i].rateGrowth)**2 + 5;
			ctx.arc(nodeAttrs[i].posX, nodeAttrs[i].posY, growth, 0, 2*Math.PI);
			ctx.fill();

			for (let j=i; j<nodeAttrs.length; j++){
				if(i!==j && j>i){
					const dx = nodeAttrs[i].posX - nodeAttrs[j].posX;
					const dy = nodeAttrs[i].posY - nodeAttrs[j].posY;
					const distance = Math.sqrt((dx)**2 + (dy)**2);
					if (distance < 125 && nodeAttrs[i].opacity >= 0.15 && nodeAttrs[j].opacity >= 0.15 && Math.abs(nodeAttrs[j].hue - nodeAttrs[i].hue) < 10){
						// stroke opacity determined by either distance between node or node opacity (whichever is weaker)
						const distanceOpacityFactor = (125 - distance) * 0.01;
						const nodeOpacityFactor = Math.min(nodeAttrs[i].opacity,nodeAttrs[j].opacity);
						const strokeOpacity = Math.min(distanceOpacityFactor, nodeOpacityFactor);
						ctx.beginPath();
						ctx.strokeStyle = `hsl(${nodeAttrs[i].hue},65%,45%,${strokeOpacity})`;
						ctx.moveTo(nodeAttrs[i].posX, nodeAttrs[i].posY);
						ctx.lineTo(nodeAttrs[j].posX, nodeAttrs[j].posY);
						ctx.stroke();
					}
				}
			}
		}
	};
  
	return <Canvas draw={draw} />;
};

export default App;

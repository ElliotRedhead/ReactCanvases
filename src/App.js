import React from "react";
import Canvas from "./Canvas";
import "./App.css";

const App = () => {
	const draw = (ctx, frameCount) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = '#000000';
		ctx.beginPath();
		ctx.arc(250, 100, 20*Math.sin(frameCount*0.01)**2, 0, 2*Math.PI);
		ctx.fill();
	};
  
	return <Canvas draw={draw} />;
};

export default App;

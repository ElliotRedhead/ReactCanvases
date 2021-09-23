type draw = {
	(ctx:context,
	frameCount:number): void;
}

// Context can be null or undefined prior to ref load
type context = CanvasRenderingContext2D|null|undefined

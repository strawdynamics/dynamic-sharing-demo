import { Canvas, createCanvas } from 'canvas';

export const generateCoolImage = (text: string): Canvas => {
	const canvas = createCanvas(640, 480);
	const ctx = canvas.getContext('2d');

	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = '#fff';
	ctx.font = '30px sans-serif';
	ctx.fillText(text, 30, 30);

	return canvas;
};

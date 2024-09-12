import { generateCoolImage } from '$lib/imageGenerator';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = (req) => {
	const qrInput = req.params.qrInput;

	const cnv = generateCoolImage(qrInput);

	return new Response(cnv.toBuffer());
};

<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { generateCoolImage } from '$lib/imageGenerator';
	import type { Canvas } from 'canvas';

	$: qrInput = $page.url.searchParams.get('qrInput');

	let coolCanvas: Canvas | undefined;

	$: if (qrInput) {
		coolCanvas = generateCoolImage(qrInput);
	}
</script>

<svelte:head>
	<title>Dynamic sharing demo</title>

	<meta property="og:image" content="{PUBLIC_BASE_URL}/i/{qrInput}.png" />
</svelte:head>

<h1>Hi there!</h1>

<p><a href="https://github.com/strawdynamics/dynamic-sharing-demo">Learn more on GitHub</a></p>

<p>Here is the QR input: {qrInput}</p>

<p>Here is an image based on the QR input (rendered by server):</p>
<img src="/i/{qrInput}.png" alt="A real cool image rendered on the server" />

{#if coolCanvas}
	<p>Here is an image based on the QR input (rendered by client):</p>

	<img src={coolCanvas.toDataURL('image/png')} alt="A real cool image rendered on the client" />
{/if}

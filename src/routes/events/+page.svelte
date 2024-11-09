<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const events = data.events;
</script>

<div class="my-4 w-full text-center">
	<h1 class="text-4xl">Upcoming Events</h1>
    <h2 class="text-xl mt-4">There are no upcoming events announced at this time.</h2>
</div>



<div class="my-4 w-full text-center">
	<h1 class="text-4xl">Past Events</h1>
</div>

<div class="grid md:grid-cols-2 w-full gap-2">
	{#each events as event}
		<div
			class="card card-side border-4 border-slate-800 bg-primary p-6 text-secondary-content shadow-xl"
		>
			<figure class="min-w-fit">
				<img src={event.imageURL} alt="" class="w-48 rounded-3xl" />
			</figure>
			<div class="card-body">
				<h3 class="card-title text-2xl">{event.startDate}</h3>
				<h4 class="text-lg font-semibold">{event.name}</h4>
				<p>{@html event.description}</p>
			</div>
		</div>
	{/each}
</div>
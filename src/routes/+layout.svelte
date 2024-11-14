<script>
	import '../app.pcss';
	import logoImg from '$lib/img/header_logo.png';
	import logoButton from '$lib/img/logo-150.png';

	export let data;
</script>

<div class="min-h-screen">
	<div class="navbar bg-neutral text-neutral-content uppercase">
		<div class="navbar-start">
			<!-- Menu for small screens -->
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost font-semibold text-white lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul
					tabindex="0"
					class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-neutral p-2 font-semibold text-white shadow"
				>
					<li><a href="/membership">Membership</a></li>
					<li><a href="/events">Events</a></li>
					<li>
						<a href="/courses">Courses</a>
						<ul class="p-2">
							<li><a href="/courses/pioneer">Pioneer DGC</a></li>
							<li><a href="/courses/cascades">Cascades DGC</a></li>
						</ul>
					</li>
					<li><a href="/calendar">Calendar</a></li>
					<li><a href="/board">Board</a></li>
					<li><a href="/donate">Donate</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="https://shop.plumasdiscgolf.com">Shop</a></li>
				</ul>
			</div>
			<!-- Logo -->
			<a href="/" class="btn btn-ghost hidden lg:block"
				><img
					src={logoImg}
					alt="Plumas Disc Golf's Logo"
					class="max-h-full scale-125 hover:scale-105"
				/></a
			>
		</div>
		<div class="navbar-center">
			<div>
				<a href="/" class="btn btn-ghost lg:hidden"
					><img
						src={logoImg}
						alt="Plumas Disc Golf's Logo"
						class="max-h-full hover:scale-105"
					/></a
				>
			</div>
			<!-- Menu for Larger screens -->
			<ul class="menu menu-horizontal hidden px-1 text-xl font-semibold text-white lg:flex">
				<li><a href="/membership">Membership</a></li>
				<li><a href="/events">Events</a></li>
				<li>
					<details>
						<summary>Courses</summary>
						<ul class="bg-neutral p-2 text-neutral-content">
							<li><a href="/courses/pioneer">Pioneer DGC</a></li>
							<li><a href="/courses/cascades">Cascades DGC</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/calendar">Calendar</a></li>
				<li><a href="/board">Board</a></li>
				<li><a href="/donate">Donate</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="https://shop.plumasdiscgolf.com">Shop</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<!-- <a class="btn">Button</a> -->
		</div>
	</div>

	<div class="">
		<slot />
	</div>

	<footer class="items-between footer sticky top-[100vh] bg-neutral p-4 text-neutral-content">
		<aside class="grid-flow-col items-center">
			<img src={logoImg} alt="Plumas Disc Golf's Logo" class="max-h-16 hover:scale-105" />
			<p>Copyright © {new Date().getFullYear()} - All right reserved</p>
		</aside>
		<div class="mx-auto mt-auto flex text-primary">
			<a href="/login">Admin Login</a>
			<a href="/logout">Logout</a>
		</div>
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<div></div>
			<a href="https://facebook.com/plumasdiscgolf"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="35"
					height="35"
					viewBox="0,0,256,256"
				>
					<g
						fill="#ffffff"
						fill-rule="nonzero"
						stroke="none"
						stroke-width="1"
						stroke-linecap="butt"
						stroke-linejoin="miter"
						stroke-miterlimit="10"
						stroke-dasharray=""
						stroke-dashoffset="0"
						font-family="none"
						font-weight="none"
						font-size="none"
						text-anchor="none"
						style="mix-blend-mode: normal"
						><g transform="scale(10.66667,10.66667)"
							><path
								d="M17,3h-10c-2.209,0 -4,1.791 -4,4v10c0,2.209 1.791,4 4,4h5.621v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965h1.586c2.209,0 4,-1.791 4,-4v-10c0,-2.209 -1.791,-4 -4,-4z"
							></path></g
						></g
					>
				</svg></a
			>
			<a href="https://instagram.com/plumasdiscgolf"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="35"
					height="35"
					viewBox="0,0,256,256"
				>
					<g
						fill="#ffffff"
						fill-rule="nonzero"
						stroke="none"
						stroke-width="1"
						stroke-linecap="butt"
						stroke-linejoin="miter"
						stroke-miterlimit="10"
						stroke-dasharray=""
						stroke-dashoffset="0"
						font-family="none"
						font-weight="none"
						font-size="none"
						text-anchor="none"
						style="mix-blend-mode: normal"
						><g transform="scale(10.66667,10.66667)"
							><path
								d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"
							></path></g
						></g
					>
				</svg></a
			>
			<a href="https://x.com/plumasdiscgolf.com"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="35"
					height="35"
					viewBox="0,0,256,256"
				>
					<g
						fill="#ffffff"
						fill-rule="nonzero"
						stroke="none"
						stroke-width="1"
						stroke-linecap="butt"
						stroke-linejoin="miter"
						stroke-miterlimit="10"
						stroke-dasharray=""
						stroke-dashoffset="0"
						font-family="none"
						font-weight="none"
						font-size="none"
						text-anchor="none"
						style="mix-blend-mode: normal"
						><g transform="scale(10.66667,10.66667)"
							><path
								d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,21h-18v-18h18zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z"
							></path></g
						></g
					>
				</svg></a
			>
		</nav>
	</footer>
</div>

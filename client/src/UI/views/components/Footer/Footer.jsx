/* eslint-disable jsx-a11y/alt-text */
import { signInAnonymously } from "firebase/auth";

import React from "react";

function Footer() {
	return (
		<>
			<section class='bg-black'>
				<div class='max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center'>
					<h1 class='font-extrabold leading-10 tracking-tight text-left text-white sm:leading-none md:text-6xl text-4xl lg:text-7xl'>
						<span class='inline md:block'>Join MemeStation and have fun!</span>
						<span class=' mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-400 to-orange-500 md:inline-block'>
							{" "}
							We Love
							<span class='bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300'>
								{" "}
								Meme's and Gif's
							</span>{" "}
						</span>
					</h1>
					<div class='mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg'>
						<button
							class='bg-tkb border text-sm text-white py-3 px-7 rounded-full'
							onClick={signInAnonymously}
						>
							Join Funny People here!
						</button>
					</div>
				</div>
			</section>
			<hr class='text-white mx-5' />
			<footer class='bg-black pb-5'>
				<div class='max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8'>
					<div class='sm:flex sm:items-center sm:justify-between'>
						<div class='flex justify-center text-teal-300 sm:justify-start'>
							<img
								class='rounded-full'
								src='https://seeklogo.com/images/L/l-o-l-surprise-logo-8A8CAF9674-seeklogo.com.png'
								width='40'
								height='40'
							/>
						</div>
						<p class='mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0'>
							Assembler &nbsp; Meme Career &nbsp; Privacy & Policy &nbsp; Only for Crazy Developers!
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;

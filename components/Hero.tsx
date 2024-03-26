
import React from 'react';

const Hero = () => {
	return (
		<div className='container mx-auto flex flex-wrap justify-between gap-5 mb-10'>
			<div className='w-full md:w-auto border rounded bg-sky-300 p-4'>
				<button className='border p-2 bg-white rounded mb-3'>News</button>
				<h3 className='mb-5 text-zinc-500'>Dear Clients!</h3>
				<p className='mb-10 text-zinc-500'>
					We notify you that from 02/02/2024 <br /> from 10:00 to 10:00 on 02/03/2024, <br /> maintenance work is planned, during <br /> which the Uzum Bank mobile application <br />
					may not be available. <br /> Thank you for being with us 💜
				</p>
			</div>
			<div className='w-full h-64 md:w-96 border rounded bg-sky-300 p-4'>
				<button className='border bg-white p-2 rounded mb-3'>News</button>
				<p className='mb-10 text-zinc-500'>
					«Uzum Bank» JSC informs about <br /> changes in the tariff line from 16 January <br /> 2024
				</p>
			</div>
			<div className='w-full h-48 md:w-96 border rounded bg-sky-300 p-4'>
				<button className='border bg-white p-2 rounded mb-3'>News</button>
				<p className='mb-10 text-zinc-500'>
					«Uzum Bank» JSC informs about <br />
					changes in the tariff line from 24 <br /> December 2023 💜
				</p>
			</div>
		</div>
	);
};

export default Hero;

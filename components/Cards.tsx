'use client';

import Image from 'next/image';
import React from 'react';

const Cards = () => {
	return (
		<div className=' container mx-auto  mb-9'>
			<h2 className=' text-5xl text-blue-700 font-semibold mb-10'>Save on transfers and earn on payments</h2>
			<div className='  flex items-center justify-between'>
				<div className=' border rounded bg-blue-700 relative w-[600px]  h-[400px]'>
					<h2 className='  text-3xl font-semibold   ml-8 mt-4 mb-5 text-white'>
						Transfers between cards <br />
						from 0,6%
					</h2>
					<p className='text-xl text-white ml-8 mb-5'>
						Uzum Bank always has a low <br /> commission for transfers between <br /> cards:
					</p>
					<p className='text-xl text-white ml-8'>
						0,6% from HUMO to HUMO <br /> 0,7% between UzCard and HUMO
					</p>
					<Image width={300} className=' absolute right-0 bottom-0' height={200} src={'https://uzumbank.uz/_nuxt/img/uzjeldor.7b3c5a4.svg'} alt='icon' />
				</div>
				<div className=' border rounded bg-blue-700 relative w-[600px]  h-[400px]'>
					<h2 className='  text-4xl font-semibold   ml-8 mt-4 mb-8 text-white'>
						Cashback up to 20% <br />
						for payments
					</h2>
					<p className='text-xl text-white ml-8 mb-5'>
						Make payments for the
						<br /> usual services and get
						<br /> your money back
					</p>

					<Image width={400} className=' absolute right-0 bottom-0' height={300} src={'https://uzumbank.uz/_nuxt/img/western.a015abc.svg'} alt='icon' />
				</div>
			</div>
		</div>
	);
};

export default Cards;

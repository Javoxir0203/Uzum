import Aside from '@/components/aside';
import ForIndividuals from '@/components/for_individuals';
import Image from 'next/image';
import React from 'react';

const Exchange_rates = () => {
	return (
		<div>
			<ForIndividuals />
			<div className=' container mx-auto  mt-10 mb-9'>
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
			<div>
				<div className='flex items-center gap-40 justify-center mb-10'>
					<div>
						<h2 className=' text-5xl  font-semibold text-blue-600 mb-5'>
							You only need a phone <br /> to pay
						</h2>
						<p className='text-xl mb-10'>
							It is more convenient and safer than physical bank cards and cash, <br /> and also allows you to protect your personal data when paying in <br /> stores.
						</p>
						<div className=' flex gap-5'>
							<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/humo_badge.2bc3c59.svg'} alt='Humo' />
							<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/light_visa_badge.a828ec7.svg'} alt='Viza' />
						</div>
					</div>
					<div>
						<Image width={500} height={400} src={'https://uzumbank.uz/_nuxt/img/terminal.2d56ccc.png'} alt='Phone' />
					</div>
				</div>
			</div>
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
			<Aside />
		</div>
	);
};

export default Exchange_rates;

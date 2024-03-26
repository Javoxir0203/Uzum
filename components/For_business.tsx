'use client';

import Image from 'next/image';

const For_business = () => {
	return (
		<div className='w-full'>
			<div className=' bg-gray-200 mb-10 py-16'>
				<div className=' container mx-auto grid grid-cols-2 items-center justify-center'>
					<div>
						<h3 className='text-3xl  mt-10   mb-10 font-semibold'>Businness will be!</h3>
						<p className='text-xl  mb-10'>
							We have almost completed our new project for legal entities. <br /> The final touches remain.
						</p>
						<p className='text-xl mb-5'>Do you want to know about the opening?</p>
						<p className='text-xl opacity-20 mb-8'>Leave your email or phone, we will send you a message on the day of launch</p>
						<div className='grid grid-cols-2 mb-5'>
							<form>
								<input type='text' className='text-xl p-2  border rounded  w-52 bg-white  text-black' placeholder='Email/Telephone' />
							</form>

							<button className=' py-2 text-xl w-52  bg-indigo-600 px-4 border rounded text-white mb-5 '>Send</button>
						</div>
					</div>
					<div>
						<Image src='https://uzumbank.uz/_nuxt/img/construction.69f2a3b.svg' alt='img bor' className='ml-10' width={500} height={350} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default For_business;

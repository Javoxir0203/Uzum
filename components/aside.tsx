import Link from 'next/link';
import React from 'react';

const Aside = () => {
	return (
		<div className='container mx-auto my-12'>
			<h2 className=' text-2xl mb-3'>Subscribe to our news and announcements</h2>
			<div className='flex items-center justify-between '>
				<div>
					<div className='flex  gap-5'>
						<form>
							<input type='text' className='text-xl p-2  border rounded  w-52 bg-white  text-black' placeholder='Email' />
						</form>
						<button className='border w-52 p-2 rounded text-xl bg-blue-400'>Send</button>
					</div>
				</div>
				<div>
					<Link className=' text-xl' href={'/'}>
						+998 78 777 07 99
					</Link>
					<br />
					<Link className='text-xl ml-16' href={'/Telegram'}>
						Telegram
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Aside;

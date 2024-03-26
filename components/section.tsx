import Link from 'next/link';
import React from 'react';

const Section = () => {
	return (
		<div className=' flex container mx-auto items-center justify-between mb-10'>
			<div>
				<h2 className=' text-2xl font-semibold gap-2'>Important links</h2>
				<Link href={'/'} className='text-xl '>
					Career
				</Link>
				<Link href={'/Tender'} className='text-xl  mt-4'>
					Tender
				</Link>
			</div>
			<div>
				<Link href={'/'}>+998 78 777 07 99</Link>
				<br />
				<Link href={'/Telegram'}>Telegram</Link>
			</div>
		</div>
	);
};

export default Section;

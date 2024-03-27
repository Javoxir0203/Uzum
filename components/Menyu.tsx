import Image from 'next/image';
import Link from 'next/link';

const Menyu: React.FC = () => {
	return (
		<>
			<div className='container mx-auto border-b flex justify-between'>
				<ul className='flex space-x-5 items-center h-[100%]'>
					<li>
						<Image width={200} height={100} className='w-32' src='https://depozit.uz/image_uploads/banks/55/original/1f135319fd6cc7502052a2a5b74831b5_webp.webp' alt='' />
					</li>
					<li className=' h-[100%]'>
						<Link href={'/'} className={'py-11 border-b-4 border-[#7000ff]'}>
							For individuals
						</Link>
					</li>
					<li>
						<Link href={'/for-business'}>For business</Link>
					</li>
				</ul>
				<ul className='flex items-center space-x-5'>
					<li>
						<select className='hover:bg-slate-200 p-3 rounded outline-none duration-200' name='' id=''>
							<option value=''>English</option>
							<option value=''>Rus</option>
							<option value=''>Uzbek</option>
						</select>
					</li>
					<li>
						<button className='py-3 px-5 rounded-md bg-[#7000ff] text-white'>Sign in to account</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Menyu;

'use client';

import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

const Navbar = () => {
	const [Loading, setLoading] = useState(false);
	const [product, setProduct] = useState(false);

	const toggleNav = () => {
		setLoading(!Loading);
		setProduct(false);
	};

	const toggle = () => {
		setProduct(!product);
	};

	const navList = () => {
		return (
			<>
				<ul className='flex space-x-5 font-light text-base'>
					<li className='py-7'>
						<div onClick={toggle} className='relative transition-all duration-500'>
							<span className='cursor-pointer'>Products</span>
							<div className={`absolute ${product ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2`}>
								<div className='p-4 flex flex-col  w-40'>
									<Link href='/Plastic cards'>Plastic cards</Link>
									<Link href='/Loan products'>Loan products</Link>
									<Link href='/Deposits'>Deposits</Link>
								</div>
							</div>
						</div>
					</li>
					<li className='py-7'>
						<Link href={'/'}>Money Transfers</Link>
					</li>
					<li className='py-7'>
						<Link href={'/ Tariffs'}>Tariffs</Link>
					</li>
					<li className='py-7'>
						<Link href={'/Job opening'}>Job opening</Link>
					</li>
					<li className='py-7'>
						<Link href={'/Tender'}>Tender</Link>
					</li>
					<li className='py-7'>
						<Link href={'/Exchange rates'}>Exchange rates</Link>
					</li>
				</ul>
			</>
		);
	};

	return (
		<>
			<div className='bg-white shadow-lg font-DM'>
				<div className='container mx-auto md:flex md:items-center justify-start'>
					<div className='flex items-center'>
						<button onClick={toggleNav} className='block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300'>
							<svg className={`w-6 h-6 ${Loading ? 'hidden' : 'block'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
							</svg>
							<svg className={`w-6 h-6 ${Loading ? 'block' : 'hidden'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
							</svg>
						</button>
					</div>
					<div className='w-full flex justify-between items-center'>
						<nav className='hidden md:flex space-x-4 '>{navList()}</nav>
						<CiSearch />
					</div>

					<div className={`${Loading ? '' : 'hidden'} md:hidden mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}>{navList()}</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;

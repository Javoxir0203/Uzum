'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

const Footer = () => {
	return (
		<div className='w-full'>
			<div className='bg-indigo-700'>
				<div className='container mx-auto grid grid-cols-5 text-white '>
					<div className='mb-3 mt-5'>
						<h2 className='text-2xl font-semibold mb-5'>Products</h2>
						<ul>
							<li>
								<Link href={'/'}>Cards</Link>
							</li>
							<li>
								<Link href={'/'}>Credits</Link>
							</li>
							<li>
								<Link href={'/'}>Deposits</Link>
							</li>
							<li>
								<Link href={'/'}>Accounts</Link>
							</li>
							<li>
								<Link href={'/'}>Wallets</Link>
							</li>
							<li>
								<Link href={'/'}>Money transfers</Link>
							</li>
						</ul>
					</div>
					<div className='mb-3 mt-5'>
						<h2 className='text-2xl font-semibold mb-5'>Services</h2>
						<ul>
							<li>
								<Link href={'/'}>My home</Link>
							</li>
							<li>
								<Link href={'/'}>UzASBO</Link>
							</li>
							<li>
								<Link href={'/'}>HUMO Pay</Link>
							</li>
							<li>
								<Link href={'/'}>Transfer to requisites</Link>
							</li>
							<li>
								<Link href={'/'}>Kindergarten payments</Link>
							</li>
						</ul>
					</div>
					<div className='mb-3 mt-5'>
						<h2 className='text-2xl font-semibold mb-5'>About the bank</h2>
						<ul>
							<li>
								<Link href={'/'}>Bank structure</Link>
							</li>
							<li>
								<Link href={'/'}>Management</Link>
							</li>
							<li>
								<Link href={'/'}>Bank details</Link>
							</li>
							<li>
								<Link href={'/'}>Bank charter</Link>
							</li>
							<li>
								<Link href={'/'}>State symbols</Link>
							</li>
							<li>
								<Link href={'/'}>Essential facts</Link>
							</li>
							<li>
								<Link href={'/'}>Local acts</Link>
							</li>
							<li>
								<Link href={'/'}>Development strategy</Link>
							</li>
							<li>
								<Link href={'/'}>Bank mission</Link>
							</li>
							<li>
								<Link href={'/'}>Documents</Link>
							</li>
							<li>
								<Link href={'/'}>License of JS Uzum Bank</Link>
							</li>
							<li>
								<Link href={'/'}>Events</Link>
							</li>
						</ul>
					</div>
					<div className='mb-3 mt-5'>
						<h2 className='text-2xl font-semibold mb-5'>Shareholders and investors</h2>
						<ul>
							<li>
								<Link href={'/'}>Meeting of shareholders</Link>
							</li>
							<li>
								<Link href={'/'}>Auditing</Link>
							</li>
							<li>
								<Link href={'/'}>Information about dividends</Link>
							</li>
							<li>
								<Link href={'/'}>Affiliates</Link>
							</li>
							<li>
								<Link href={'/'}>Emission</Link>
							</li>
							<li>
								<Link href={'/'}>Business plan</Link>
							</li>
							<li>
								<Link href={'/'}>Corporate governance</Link>
							</li>
							<li>
								<Link href={'/'}>Financial data</Link>
							</li>
							<li>
								<Link href={'/'}>Stocks</Link>
							</li>
							<li>
								<Link href={'/'}>Documents</Link>
							</li>
							<li>
								<Link href={'/'}>Information disclosure</Link>
							</li>
						</ul>
					</div>
					<div className='mb-3 mt-5'>
						<h2 className='text-2xl font-semibold mb-5'>Email</h2>
						<ul>
							<li>
								<Link href={'/'}>info@uzumbank.uz</Link>
							</li>
							<li>
								<Link href={'/'}>Interactive services</Link>
							</li>
							<li>
								<Link href={'/'}>Appeals of individuals and legal</Link>
							</li>
							<li>
								<Link href={'/'}>entities</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='w-full'>
				<div className='container mx-auto flex items-center gap-8 py-4'>
					<div className='flex items-center justify-between gap-6'>
						<FaFacebookF />
						<FaTelegramPlane />
						<SlSocialVkontakte />
					</div>

					<Link href={'/'}>
						<span className='text-[12px]'>© 2019 - 2024 JSC “Uzum Bank”. The bank operates on the basis of license No. 88 dated November 28, 2022. All rights reserved. When using materials from this website, a link to the source is required.</span>
					</Link>

					<Image src={'https://informer.yandex.ru/informer/90956455/3_1_ECECECFF_CCCCCCFF_0_pageviews'} alt='icon' width={100} height={50} />
				</div>
			</div>
		</div>
	);
};

export default Footer;

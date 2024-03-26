import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<nav className=' container mx-auto'>
				<Link href={'/money-transfer'}>
					<button className='p-4 '>Money Transfer</button>
				</Link>
				<Link href={'/tariffs'}>
					<button className='p-4'>Tariffs</button>
				</Link>
				<Link href={'/products'}>
					<button className='p-4'>JobOpenings</button>
				</Link>
				<Link href={'/tender'}>
					<button className='p-4'>Tender</button>
				</Link>
				<Link href={'/exchange'}>
					<button className='p-4 b'>Exchange rates</button>
				</Link>
			</nav>

			{children}
		</>
	);
};

export default Layout;

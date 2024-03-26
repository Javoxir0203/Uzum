import Aside from '@/components/aside';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MoneyTransfer = () => {
	return (
		<div className='w-full '>
			<div className=' bg-gray-100 mb-10 py-14'>
				<div className=' container mx-auto  '>
					<div className=' mb-5'>
						<h2 className=' text-5xl  mb-10 font-semibold'>International money transfers</h2>
						<hr data-v-37f4e740='' role='separator' aria-orientation='horizontal' className='divider v-divider theme--light mb-8'></hr>
						<p className='text-xl'>To send and receive, you only need a mobile phone and the Apelsin app. And there is no need to look for the nearest bank branch.</p>
					</div>
				</div>
			</div>
			<div className=' container mx-auto mb-10'>
				<h2 className=' text-5xl font-semibold mb-10 ml-[450px]'>Our partners</h2>
				<div className=' flex gap-8'>
					<div>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/visa-logo.2a1415e.svg'} alt='omg' />
							</button>
						</div>
						<div className='flex  gap-24 mb-4 mt-4'>
							<h2 className=' font-semibold'>Visa Direct</h2>
							<p>Commission from 1%</p>
						</div>
						<p className='text-blue-500'>More details</p>
					</div>
					<div>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image
									width={100}
									height={50}
									src={
										'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiByeD0iMzgiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjU1LjA3MTUiIGN5PSI3Ni43MDQ1IiByPSIzMi4zODY0IiBmaWxsPSIjRUIwMDFCIi8+CjxjaXJjbGUgY3g9Ijk0LjkyODEiIGN5PSI3Ni43MDQ2IiByPSIzMi4zODY0IiBmaWxsPSIjRjc5RTFCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzQuOTk5NyAxMDIuMjM0QzgyLjU4MjkgOTYuMzA3IDg3LjQ1NzYgODcuMDc0NiA4Ny40NTc2IDc2LjcwMzdDODcuNDU3NiA2Ni4zMzI3IDgyLjU4MjkgNTcuMTAwNCA3NC45OTk3IDUxLjE3MjhDNjcuNDE2NiA1Ny4xMDA0IDYyLjU0MTkgNjYuMzMyNyA2Mi41NDE5IDc2LjcwMzdDNjIuNTQxOSA4Ny4wNzQ2IDY3LjQxNjYgOTYuMzA3IDc0Ljk5OTcgMTAyLjIzNFoiIGZpbGw9IiNGRjVGMDAiLz4KPC9zdmc+Cg=='
									}
									alt='omg'
								/>
							</button>
						</div>
						<div className='flex  gap-24 mb-4 mt-4'>
							<h2 className=' font-semibold'>MoneySend</h2>
							<p>Commission from $ 1.3</p>
						</div>
						<p className='text-blue-500'>More details</p>
					</div>
					<div>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={900} src={'https://uzumbank.uz/_nuxt/img/visa-logo.2a1415e.svg'} alt='omg' />
							</button>
						</div>
						<div className='flex  gap-24 mb-4 mt-4'>
							<h2 className=' font-semibold'>Western Union</h2>
							<p>Commission from $ 1.3</p>
						</div>
						<p className='text-blue-500'>More details</p>
					</div>
				</div>
				<Aside />
			</div>
		</div>
	);
};

export default MoneyTransfer;

import Aside from '@/components/aside';
import Image from 'next/image';
import React from 'react';

const Tender = () => {
	return (
		<div>
			<div className=' container mx-auto mb-10'>
				<div>
					<h2 className=' text-5xl font-semibold mb-10 mt-4 ml-[460px]'>Tender</h2>
				</div>
				<div className=' grid grid-cols-3'>
					<div>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-5'>
							Поставка программного обеспечения КИБ <br /> Сёрчинформ
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-5'>
							Предоставление доступа к сервисам <br /> Cloudflare
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-5'>
							Приобретение программно-аппаратного <br /> комплекса
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div className='mt-5'>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-4'>
							Приобретение межсетевых экранов Palo Alto <br />
							Networks
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div className='mt-5'>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-4'>
							Поставка телекоммуникационного <br />
							оборудования HPE Aruba
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div className='mt-5'>
						<div className='bg-gray-300 w-96 h-60 '>
							<button className=' border rounded items-center  ml-32 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-4'>
							Поставка программного обеспечения Veeam <br />
							Backup & Replication Enterprise Plus
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
				</div>
			</div>
			<Aside />
		</div>
	);
};

export default Tender;

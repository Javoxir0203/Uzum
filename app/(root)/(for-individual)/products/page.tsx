import Aside from '@/components/aside';
import Image from 'next/image';

const JobOpenings = () => {
	return (
		<div className='  w-full'>
			<div className='bg-gray-300'>
				<div className=' container mx-auto mb-10'>
					<div className='flex  items-center justify-center gap-72'>
						<div>
							<h2 className=' text-3xl font-semibold mb-10'>People are our main capital</h2>
							<p>
								The success of the company is thousands of personal and <br /> professional successes of everyone. When employees develop, <br /> Uzum Bank develops. Working with us is an opportunity to grow <br /> together with an independent cool bank in a community of smart <br /> and free
								people. Solve ambitious tasks, achieve significant <br /> results, become the best, and earn money.
							</p>
						</div>
						<div>
							<Image width={500} height={200} src={'https://uzumbank.uz/_nuxt/img/gettyimages.f912473.png'} alt='logo' />
						</div>
					</div>
				</div>
			</div>
			<div className=' container mx-auto mb-10'>
				<div>
					<h2 className=' text-5xl font-semibold mb-10 ml-96'>Job openings</h2>
				</div>
				<div className=' grid grid-cols-3'>
					<div>
						<div className='bg-gray-300 w-80 h-60 '>
							<button className=' border rounded items-center  ml-24 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-5'>Бизнес-аналитик</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div>
						<div className='bg-gray-300 w-80 h-60 '>
							<button className=' border rounded items-center  ml-24 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-5'>
							Специалист казначейства по <br /> пруденциальной отчетности
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div>
						<div className='bg-gray-300 w-80 h-60 '>
							<button className=' border rounded items-center  ml-24 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-5'>БСпециалист контактного центра</h2>
						<p className='text-blue-500'>More details</p>
					</div>
					<div className='mt-5'>
						<div className='bg-gray-300 w-80 h-60 '>
							<button className=' border rounded items-center  ml-24 mt-12 bg-white py-5 px-5'>
								<Image width={100} height={50} src={'https://uzumbank.uz/_nuxt/img/dev.555d14b.png'} alt='omg' />
							</button>
						</div>
						<h2 className='mt-4'>
							QA тестировщик - автоматизация процессов <br /> фронта
						</h2>
						<p className='text-blue-500'>More details</p>
					</div>
				</div>
			</div>
		<Aside/>
		</div>
	);
};

export default JobOpenings;

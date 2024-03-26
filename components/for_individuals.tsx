const ForIndividuals = () => {
	return (
		<div className='w-full py-10 '>
			<div className='container mx-auto space-y-5'>
				<h1 className='text-4xl text-blue-600  font-semibold'>Currency calculator</h1>
				<p className='text-2xl font-extralight tracking-[0.05em] mt-10'>At Apelsin we always use the best rate</p>
				<br />
				<br />
				<div className='grid grid-cols-2 rounded-lg border'>
					<div className='p-5 space-y-10'>
						<div className='flex justify-between'>
							<p className='text-2xl font-extralight'>I have </p>
							<span className='text-xl font-extralight'></span>
						</div>
						<div className='flex justify-between'>
							<input type='number' className='w-[75%] p-3 border-b-2 border-[#7000ff] outline-none text-4xl text-[#7000ff] placeholder-[0]' />
							<select className='border-b-2 border-[#7000ff] p-3 outline-none text-4xl text-[#7000ff]'>
								<option value='USD'>USD</option>
								<option value='UZS'>UZS</option>
							</select>
						</div>
						<p className='flex items-center text-xl font-extralight'>The exchange rate is automatically updated. Press F5 if the rate is not updated.</p>
					</div>
					<div className='p-5 space-y-10 bg-slate-100'>
						<div className='flex justify-between'>
							<p className='text-2xl font-extralight'>I will get </p>
							<span className='text-xl font-extralight'></span>
						</div>
						<div className='flex justify-between'>
							<input type='number' className='bg-transparent w-[75%] p-3 border-b-2 border-[#7000ff] outline-none text-4xl text-[#7000ff] placeholder-[0]' />
							<select className='bg-transparent border-b-2 border-[#7000ff] p-3 outline-none text-4xl text-[#7000ff]'>
								<option value='UZS'>UZS</option>
								<option value='USD'>USD</option>
							</select>
						</div>
						<p className='flex items-center text-xl font-extralight '>1 USD = 12,600 UZS</p>
					</div>
				</div>
				<div className='w-full flex justify-end pb-10'></div>
			</div>
		</div>
	);
};

export default ForIndividuals;

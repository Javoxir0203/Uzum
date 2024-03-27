/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'media.istockphoto.com',
			},
			{
				hostname:'depozit.uz'
			},
			{
				hostname: 'uzumbank.uz',
			},
			{
				hostname: 'metrika.yandex.ru',
			},
			{
				hostname: 'informer.yandex.ru',
			},
			{
				hostname: 'cbu.uz',
			},
		],
	},
};

export default nextConfig;

import About from '@/components/About';
import Cards from '@/components/Cards';
import Hero from '@/components/Hero';
import Aside from '@/components/aside';
import ForIndividuals from '@/components/for_individuals';
import HomeBanner from '@/components/home-banner';
import Main from '@/components/main';

const Home = () => {
	return (
		<>

			<HomeBanner />
			<Main/>
			<ForIndividuals/>
			<Cards />
			<About/>
			<Hero/>
			<Aside/>
		</>
	);
};

export default Home;

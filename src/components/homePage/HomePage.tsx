import { FC } from 'react'
import Trending from './Trending'
import CardList from '../CardList/CardList'


interface HomeProps {

}

const HomePage: FC<HomeProps> = ({ }) => {
    return <>
        {/* <!--Main--> */}
        <div className="container pt-10 md:pt-10 pb-10 mx-auto flex flex-wrap lg:flex-nowrap flex-col md:flex-row items-center justify-between text-slate-900 dark:text-zinc-300">
            {/* <!--Left side--> */}
            <div className="flex text-[#000450] dark:text-[#fff] mt-5 lg:mt-0 flex-col xl:w-3/5 justify-center lg:items-start overflow-y-hidden neon-writing font-unbounded">
                <h1 className="text-[25px] sm:text-[35px] md:text-[45px] lg:text-[37px] text-center pt-3 lg:pt-0 mb-10 sm:pl-4 opacity-90 lg:text-left">
                    <span className='text-xl sm:text-3xl'>THE UNIVERSE OF</span> CRYPTOCURRENCY
                </h1>
                <span className='text-center lg:text-base md:pl-5 md:mt-5 mb-14 lg:mb-10'>Discover - Learn - Secure</span>

                <p className="leading-normal sm:ml-5 md:text-xl mb-4 px-10 sm:px-0 sm:mb-8 text-left">
                    <span>Explore beginner-friendly guides,<br /> expert hardware wallet advice, and real-time market prices.</span>
                </p>
            </div>
            <Trending />
        </div>

        {/* Here we render our card list */}
        <CardList className='bg-zinc-500' />
    </>
}

export default HomePage

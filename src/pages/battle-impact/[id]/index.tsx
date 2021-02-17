import ImpactCard from 'components/atoms/impactCard';
import battleData from 'data/battleData';
import LeftArrow from 'assets/icons/left-arrow.svg';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await battleData();
  const battle = res[Number(context.params.id) - 1].battle;
  const battleType = res[Number(context.params.id) - 1].type;
  // Pass data to the page via props
  return { props: { battle, battleType } };
};

function BattleImpact({
  battle,
  battleType,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <header>
        <Head>
          <title>Edith</title>
          <meta property='og:title' content='Edith Web Service' />
          <meta
            property='og:description'
            content='Hall of Fame for Edith Alliance'
          />
          <meta
            property='og:image'
            content='http://euro-travel-example.com/thumbnail.jpg'
          />
          <meta property='og:url' content='https://edith-app.vercel.app/' />
          <meta name='twitter:title' content='Edith Web Service ' />
          <meta
            name='twitter:description'
            content=' Wall of fame for Edith Alliance.'
          />
          <meta
            name='twitter:image'
            content=' http://euro-travel-example.com/thumbnail.jpg'
          />
          <meta name='twitter:card' content='summary_large_image' />
        </Head>
        <div className='flex flex-col'>
          <Link href='/'>
            <div className='lg:mx-40 mx-5 my-6  flex flex-row items-center cursor-pointer'>
              <img src={LeftArrow} className='w-5 h-5 mb-1' />
              <div className='font-bold font-cinzel text-blue-dark text-lg'>
                Back
              </div>
            </div>
          </Link>
          <div className='flex flex-col justify-center items-center p-10 '>
            <div className='font-cinzel text-5xl text-gold z-10'>EDITH</div>
            <div className='font-cinzel text-xl text-blue-dark'>
              "Even Dead, I'm The Hero"
            </div>
          </div>
        </div>
      </header>

      <main className='md:mx-40 mx-5 mt-10 mb-auto'>
        <div className='pb-5'>
          <div className='font-cinzel text-gold font-bold flex flex-row justify-between items-center'>
            <div className='text-2xl'>{`${battleType} Impacts`}</div>
          </div>
          <hr className='bg-blue-dark border-blue-dark' />
        </div>
        <div className='md:grid-cols-2 grid grid-row grid-flow-row gap-5 items-start'>
          {battle.map((data) => {
            return (
              <ImpactCard
                key={data.id}
                image={data.image}
                impacts={data.impact}
                time={data.time}
              />
            );
          })}
        </div>
      </main>

      <footer className='flex flex-col justify-center mt-36 h-48 bg-blue-dark items-center text-white '>
        <div>
          Made with ❤️
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=su.diddo@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='font-semibold ml-px'
          >
            {`by Asynchronous (Diddo)`}
          </a>
        </div>
        <div className='my-2'>Apes. Together. Strong.</div>
        <div>2021</div>
      </footer>
    </div>
  );
}

export default BattleImpact;

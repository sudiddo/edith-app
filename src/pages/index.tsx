import BattleCard from 'components/atoms/cards/battleCard';
import battleData from 'data/battleData';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const battle = await battleData();
  // Pass post data to the page via props
  return { props: { battle } };
};

export default function Home({
  battle,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <header className='flex flex-col justify-center items-center p-10 '>
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
        <div className='font-cinzel text-5xl text-gold z-10'>EDITH</div>
        <div className='font-cinzel text-xl text-blue-dark'>
          "Even Dead, I'm The Hero"
        </div>
      </header>

      <main className='lg:mx-40 mx-5 mt-10 mb-auto'>
        <div className='pb-5'>
          <div className='font-cinzel text-2xl text-gold font-bold'>
            Hall of Fame
          </div>
          <hr className='bg-blue-dark border-blue-dark' />
        </div>
        <div className='grid lg:grid-cols-3 grid-flow-row gap-5 items-start'>
          {battle.map((data) => {
            return <BattleCard key={data.id} battle={data} />;
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
            className='font-semibold ml-1'
          >
            {`by Asynchronous`}
          </a>
        </div>
        <div className='my-2'>Apes. Together. Strong.</div>
        <div>2021</div>
      </footer>
    </div>
  );
}

import Head from 'next/head';

import First from 'assets/screenshots/1.png';
import Second from 'assets/screenshots/2.png';
import Third from 'assets/screenshots/3.png';
import Fourth from 'assets/screenshots/4.png';
import Fifth from 'assets/screenshots/5.png';
import Sixth from 'assets/screenshots/6.png';
import Seventh from 'assets/screenshots/7.png';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Head>
        <title>Edith Web Service</title>
        <meta property='og:title' content='Edith Web Service' />
        <meta
          property='og:description'
          content='Wall of fame for Edith Alliance'
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
      <div className='flex flex-col justify-center items-center p-10 '>
        <div className='font-cinzel text-5xl text-gold z-10'>EDITH</div>
        <div className='font-cinzel text-xl text-blue-dark'>
          "Even Dead, I'm The Hero"
        </div>
      </div>
      <div className='lg:mx-40 mx-5 mt-10'>
        <div className='pb-5'>
          <div className='font-cinzel text-2xl text-gold font-bold'>
            Hall of fame
          </div>
          <hr className='bg-blue-dark border-blue-dark' />
        </div>
        <div>
          <div className='font-sans text-blue-dark font-bold text-lg mb-3'>
            Tuesday, 9 February 2021
          </div>
          <div className='grid lg:grid-cols-3 grid-flow-row gap-5 items-start'>
            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={First} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    17:20:31 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      500 Druidrider
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      1 Hero
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={Second} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    20:04:24 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      4000 Imperian
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      7000 Equites Imperatoris
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      260 Ram
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      60 Fire Catapults
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={Third} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    20:04:25 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Imperian
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Equites Imperatoris
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      50 Fire Catapults
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={Fourth} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    20:04:26 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Imperian
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Equites Imperatoris
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      50 Fire Catapults
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={Fifth} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    20:04:31 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Imperian
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Equites Imperatoris
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      50 Fire Catapults
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={Sixth} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    20:05:01 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Imperian
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Equites Imperatoris
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      50 Fire Catapults
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' flex flex-row items-center'>
              <div className='flex flex-col items-start'>
                <img src={Seventh} className='flex z-10 shadow-md' />
                <div className='grid grid-cols-4 gap-1 mt-2'>
                  <div className='col-auto font-sans text-blue-dark text-md'>
                    20:05:40 |
                  </div>
                  <div className='col-span-3 inline-grid grid-cols-2 gap-1'>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Imperian
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      100 Equites Imperatoris
                    </div>
                    <div className='font-sans text-blue-dark font-semibold text-md'>
                      50 Fire Catapults
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

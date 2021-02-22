import { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'styles/globals.css';
import { useRouter } from 'next/router';
import { analytics } from 'config/firebase';
import { AuthProvider } from 'hooks/useAuth';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url: string) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('page_view', {
          screen_name: url,
        });
      };

      routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      logEvent(window.location.pathname);

      //Remove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  return (
    <AuthProvider>
      <div className='h-16 shadow-md fixed min-w-full bg-blue-dark flex items-center flex-row px-5 flex flex-row justify-between'>
        <Link href='/'>
          <div className='flex items-center flex-col bg-gray-200 px-2 rounded-lg border border-gold border-8 cursor-pointer'>
            <div className='font-cinzel text-md text-gold'>EDITH</div>
            <div className='font-cinzel text-sm  text-blue-dark'>
              "Even Dead, I'm The Hero"
            </div>
          </div>
        </Link>

        <div className='text-md font-sans text-white grid grid-flow-col gap-4 cursor-pointer'>
          <Link href='/'>
            <div>Hall of Fame</div>
          </Link>
          <Link href='/login'>
            <div>Login</div>
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

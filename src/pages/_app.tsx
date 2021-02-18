import { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'styles/globals.css';
import { analytics } from '../../utils/firebase';
import { useRouter } from 'next/router';

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

      //Remvove Event Listener after un-mount
      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

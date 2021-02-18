import { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'styles/globals.css';
import { useRouter } from 'next/router';
import firebase from 'utils/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const logEvent = (url: string) => {
        firebase.analytics().setCurrentScreen(url);
        firebase.analytics().logEvent('page_view', {
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

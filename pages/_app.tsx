import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initIHPBackend } from 'ihp-backend';
import { IHPBackend } from 'ihp-backend/react';

initIHPBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function MyApp({ Component, pageProps }: AppProps) {
  return <IHPBackend requireLogin><Component {...pageProps} /></IHPBackend>
}
export default MyApp

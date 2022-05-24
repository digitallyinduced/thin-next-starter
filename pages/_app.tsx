import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initThinBackend } from 'thin-backend';
import { ThinBackend } from 'thin-backend/react';
import 'thin-backend-react/auth.css';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function MyApp({ Component, pageProps }: AppProps) {
  return <ThinBackend requireLogin><Component {...pageProps} /></ThinBackend>
}
export default MyApp

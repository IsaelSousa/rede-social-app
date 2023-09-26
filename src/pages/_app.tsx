import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import { Provider } from '@/context/provider';
import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import { AuthenticatedValidation } from '@/services/authenticatedValidation';
import { Loader } from '@/components/Loader/Loader';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <HeadLinksComponent title='' />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Provider>
        <AuthenticatedValidation>
          <Component {...pageProps} />
        </AuthenticatedValidation>
    </Provider>
  </>
}

import "@/styles/globals.css";
import { StoreProvider } from "../utlils/store";
export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

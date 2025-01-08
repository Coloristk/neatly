import "@/styles/globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import { BookingProvider } from "@/lib/BookingContext";
import { TotalProvider } from "@/lib/TotalPriceContext";
import { BookingDetailProvider } from "@/lib/BookingDetailContext";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <BookingProvider>
        <BookingDetailProvider>
          <TotalProvider>
            <Component {...pageProps} />
          </TotalProvider>
        </BookingDetailProvider>
      </BookingProvider>
    </AuthProvider>
  );
}

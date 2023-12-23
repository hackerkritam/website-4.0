import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className="flex w-[100%] mr-0 bg-[#1f1b4e] xl:px-[250px] px-10 pt-3">
        <Footer />
      </div>
    </div>
  )
}

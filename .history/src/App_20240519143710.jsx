import Logo from "./assets/logo.png";
import { Footer } from "./components/footer";
import { Main } from "./components/main";

export default function App() {
  return (
    <div className="w-full flex flex-col items-center justify-between gap-5">
      <header className="sm:px-8 px-4 py-2 z-10 w-full bg-[#5d04d9] w-full flex items-center justify-center h-full">
        <img
          src={Logo}
          alt=""
          className="lg:w-[374px] lg:h-[56px] sm:w-auto h-auto"
        />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

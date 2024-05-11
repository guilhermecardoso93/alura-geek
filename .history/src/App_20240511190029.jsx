import Logo from "./assets/logo.png";
import { Form } from "./components/form";
import { Main } from "./components/main";
import { Products } from "./components/products";

export default function App() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <header className="sm:px-8 px-4 py-2 z-10 w-full bg-[#5d04d9] w-full flex items-center justify-center">
        <img
          src={Logo}
          alt=""
          className="lg:w-[374px] lg:h-[56px] sm:w-auto h-auto"
        />
      </header>
     <Main />
    </div>
  );
}

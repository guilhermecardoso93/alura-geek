import Logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="w-full">
      <header className="sm:px-8 px-4 py-2 z-10 w-full bg-[#5d04d9]">
        <img
          src={Logo}
          alt=""
          className="lg:w-[374px] lg:h-[56px] sm:w-auto h-auto"
        />
      </header>
    </div>
  );
}

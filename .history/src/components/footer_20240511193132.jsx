import Logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="sm:px-8 px-4 py-2 z-10 w-full bg-[#5d04d9] flex flex-col items-center justify-end text-white">
      <img
        src={Logo}
        alt=""
        className="lg:w-[374px] lg:h-[56px] sm:w-auto h-auto"
      />
      <p className="font-semibold text-xl">DESENVOLVIDO POR GUILHERME CARDOSO</p>
      <p>ALURA LATAM - 2024</p>
    </footer>
  );
}

import Logo from "./assets/logo.png";

export function Footer() {
  return (
    <footer className="sm:px-8 px-4 py-2 z-10 w-full bg-[#5d04d9] w-full flex items-center justify-center">
      <img
        src={Logo}
        alt=""
        className="lg:w-[374px] lg:h-[56px] sm:w-auto h-auto"
      />
      <p>DESENVOLVIDO POR GUILHERME CARDOSO</p>
      <p>ALURA LATAM - 2024</p>
    </footer>
  );
}

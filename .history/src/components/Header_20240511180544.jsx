import Logo from "../assets/logo.png";

export default function Header() {
  <>
    <header className="sm:px-8 px-4 py-2 z-10 w-full bg-[#5d04d9]">
      <img
        src={Logo}
        alt="logotipo GC"
        className="lg:w-[120px] lg:h-[110px] sm:w-[40px] h-[40px]"
      />
    </header>
    ;
  </>;
}

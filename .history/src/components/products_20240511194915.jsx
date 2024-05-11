import ModeloFoto from "../assets/modelo.png";
import DeleteIcon from "../assets/delete.svg";

export function Products() {
  return (
    <div className="flex flex-col gap-9 items-center justify-center w-[768px]">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Meus Produtos:
      </h2>
      <div className="flex flex-wrap gap-2">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="flex flex-col items-start justify-between p-3 bg-[#5d04d9] border-black border-4 rounded-xl text-white mb-7">
      <img
        src={ModeloFoto}
        alt=""
        className="w-[176px] h-[174px]  border-black border-4 rounded-xl"
      />
      <h2 className="font-normal text-xl">Product</h2>
      <div className="flex justify-between w-full items-center">
        <p className="font-semibold">$ 60,00</p>
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  );
}

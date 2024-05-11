import ModeloFoto from "../assets/modelo.png";
import DeleteIcon from "../assets/delete.svg";

export function Products() {
  return (
    <div className="flex flex-col gap-9 items-center justify-center">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Meus Produtos:
      </h2>
      <div>
        <Product />
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="flex flex-col items-start justify-between p-3 bg-[#5d04d9] border-black border-4 rounded-xl text-white">
      <img
        src={ModeloFoto}
        alt=""
        className="w-[176px] h-[174px]  border-black border-4 rounded-xl"
      />
      <h2 className="font-normal text-xl">Product</h2>
      <div className="flex justify-start">
        <div>
          <p>$ 60,00</p>
        </div>
        <div>
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

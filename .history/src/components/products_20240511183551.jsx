import ModeloFoto from "../assets/modelo.png";
import DeleteIcon from "../assets/delete.svg";

export function Products() {
  return (
    <div className="flex flex-col gap-9 items-center justify-center">  
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">Meus Produtos:</h2>
      <div>
        <Product />
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={ModeloFoto} alt="" />
      <h2>Product</h2>
      <div>
        <span>$ 60,00</span>
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  );
}

import ModeloFoto from "../assets/modelo.png";
import DeleteIcon from "../assets/delete.svg";

export function Products() {
  return (
    <div>
      <h2 className="font-['Press Start 2P']">Meus Produtos:</h2>
      <div>
        <Product />
      </div>
    </div>
  );
}

function Product() {
  return (
    <div>
      <img src={ModeloFoto} alt="" />
      <h2>Product</h2>
      <div>
        <span>$ 60,00</span>
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  );
}

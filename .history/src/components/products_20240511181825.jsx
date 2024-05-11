import ModeloFoto from '../assets/modelo.png';
import DeleteIcon from '../assets/delete.svg'

export function Products() {
  return (
    <div>
      <img src={ModeloFoto} alt=''/>
      <h2>Product</h2>
      <div>
        <span>$ 60,00</span>
        <img src={DeleteIcon} alt=''/>
      </div>
    </div>
  )
}
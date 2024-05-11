import { Form } from "./form";
import { Products } from "./products";

export function Main() {
  return (
    <div className="flex mt-14 sm:[flex-col]">
      <Products />
      <Form />
    </div>
  )
}
import { Form } from "./form";
import { Products } from "./products";

export function Main() {
  return (
    <div className="flex mt-16">
      <Products />
      <Form />
    </div>
  )
}
import { Form } from "./form";
import { Products } from "./products";

export function Main() {
  return (
    <div className="flex mt-14 lg:flex-row sm:flex-col-reverse">
      <Products />
      <Form />
    </div>
  )
}
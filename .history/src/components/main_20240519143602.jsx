import { Footer } from "./footer";
import { Products } from "./products";

export function Main() {
  return (
    <div className="flex mt-14 lg:flex-row sm:flex-col-reverse gap-5">
      <Products />
      <Footer />
    </div>
  );
}

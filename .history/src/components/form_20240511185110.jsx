export function Form() {
  return (
    <div className="flex flex-col gap-9 items-center justify-center">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Adicionar Produtos:
      </h2>
      <form>
        <input type="text" placeholder="nome ..." />
        <input type="text" placeholder="valor ..." />
      </form>
    </div>
  );
}

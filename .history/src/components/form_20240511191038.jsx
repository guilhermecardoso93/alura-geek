export function Form() {
  return (
    <div className="flex flex-col gap-9">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Adicionar Produtos:
      </h2>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="nome ..." />
        <input type="text" placeholder="valor ..." />
        <input type="text" placeholder="imagem ..." />
      </form>
    </div>
  );
}

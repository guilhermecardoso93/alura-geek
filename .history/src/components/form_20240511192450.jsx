export function Form() {
  return (
    <div className="flex flex-col gap-9">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Adicionar Produtos:
      </h2>
      <form className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="nome ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
        />
        <input
          type="text"
          placeholder="valor ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
        />
        <input
          type="text"
          placeholder="imagem ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
        />

        <div className="flex justify-between">
          <button className="w-[188px] h-[55px] border-[#03318c] p-2 rounded-2xl border-4 text-white font-bold">Guardar</button>
          <button>Limpar</button>
        </div>
      </form>
    </div>
  );
}

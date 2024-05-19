import { useState } from "react";

export function Form() {
  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    imagem: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("produto", JSON.stringify(produto));
    // Você pode querer adicionar uma mensagem de confirmação aqui
  };
  return (
    <div className="flex flex-col gap-9 items-center justify-top">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Adicionar Produtos:
      </h2>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
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
          placeholder="imagem ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
        />

        <div className="flex justify-center gap-3">
          <button className="w-[188px] h-[55px] border-[#03318c] bg-[#03318c] rounded-2xl border-4 text-white text-xl font-semibold">
            Guardar
          </button>
          <button className="w-[188px] h-[55px] border-[#03318c] bg-white rounded-2xl border-4 text-[#03318c] text-xl font-semibold">
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";

export function Form(addProduto) {
  const [produtoAtual, setProdutoAtual] = useState({
    nome: "",
    preco: "",
    imagem: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProdutoAtual((prevProduto) => ({
      ...prevProduto,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProdutoAtual((prevProduto) => ({
        ...prevProduto,
        imagem: reader.result
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduto(produtoAtual);
    // Limpa os campos após adicionar o produto
    setProdutoAtual({
      nome: "",
      preco: "",
      imagem: ""
    });
  };


  return (
    <div className="flex flex-col gap-9 items-center justify-top">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Adicionar Produtos:
      </h2>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={produtoAtual.nome}
          onChange={handleChange}
          placeholder="nome ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
        />
        <input
          type="text"
          name="preco"
          value={produtoAtual.preco}
          onChange={handleChange}
          placeholder="valor ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          placeholder="imagem ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          id="image"
          name="image"
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

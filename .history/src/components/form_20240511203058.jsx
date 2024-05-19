/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Form() {
  const [formulario, setFormulario] = useState("");

  /*setFormulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const dados = {
        nome: e.target.elements["nome"].value,
        valor: e.target.elements["valor"].value,
        image: e.target.elements["image"].value,
      };

      localStorage.setItem("cadastro", JSON.stringify(dados));

      formulario(dados);
    });
*/

  return (
    <div className="flex flex-col gap-9 items-center justify-top">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Adicionar Produtos:
      </h2>
      <form className="flex flex-col gap-8" data-formulario>
        <input
          type="text"
          placeholder="nome ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          id="nome"
        />
        <input
          type="text"
          placeholder="valor ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          id="valor"
        />
        <input
          type="file"
          placeholder="imagem ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          id="imagem"
          onChange={searchImagem}
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

function searchImagem() {
  const [imagem, setImagem] = useState(null);

  const upImagem = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imagemString = reader.result;

      localStorage.setItem("dados", imagemString);
      setImagem(imagemString);
    };

    if (file) {
      reader.readAsDataURL(file);
      return upImagem;
    }
  };
}

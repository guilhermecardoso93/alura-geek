import { useState, useEffect } from "react";
import { Form } from "./form";
import DeleteIcon from "../assets/delete.svg";

export function Products() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosSalvos = localStorage.getItem("produtos");
    if (produtosSalvos) {
      setProdutos(JSON.parse(produtosSalvos));
    }
  }, []);

  const addProduto = (novoProduto) => {
    setProdutos((prevProdutos) => {
      const newProdutos = [...prevProdutos, novoProduto];
      localStorage.setItem("produtos", JSON.stringify(newProdutos));
      return newProdutos;
    });
  };

  if (!produtos) {
    return <div>Nenhum produto salvo</div>;
  }

  return (
    <div className="flex flex-col gap-9  items-center justify-center">
      <h2 className="font-['Press_Start_2P'] font-normal  text-2xl">
        Meus Produtos:
      </h2>
      <div className="flex flex-row w-full  m-8 gap-32 p-8">
        <Form addProduto={addProduto} />
        <div className="flex flex-wrap gap-2 justify-center md:w-1/3">
          {produtos.map((produto, i) => {
            return (
              <div
                className="flex flex-col items-start justify-between p-3 bg-[#5d04d9] border-black border-4 rounded-xl text-white mb-7"
                key={i}
              >
                <img
                  src={produto.imagem}
                  alt=""
                  className="w-[176px] h-[174px]  border-black border-4 rounded-xl"
                />
                <h2 className="font-normal text-xl">{produto.nome}</h2>
                <div className="flex justify-between w-full items-center">
                  <p className="font-semibold">$ {produto.preco}</p>
                  <img src={DeleteIcon} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

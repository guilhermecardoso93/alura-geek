/* eslint-disable no-unused-vars */
import { useState } from "react";

export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("formData")) || [];
  const updatedSavedData = [...savedData, data];
  localStorage.setItem("formData", JSON.stringify(updatedSavedData));
};

export const clearLocalStorage = () => {
  localStorage.removeItem("formData");
};

export function Form(onSave) {
  const [produtos, setProdutos] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    image: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
    const updatedProducts = [...setProdutos, formData];
    localStorage.setItem("formData", JSON.stringify(updatedProducts));
    setProdutos(updatedProducts);
    clearForm();
  }

  const clearForm = () => {
    setFormData({
      name: "",
      value: "",
      image: null,
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
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="nome ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
        />
        <input
          placeholder="valor ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          type="text"
          id="value"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
        <input
          placeholder="imagem ..."
          className="w-[392px] h-[58px] border-[#03318c] p-2 rounded-2xl border-4 placeholder:text-[#03318c] placeholder:font-semibold"
          required
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />

        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className="w-[188px] h-[55px] border-[#03318c] bg-[#03318c] rounded-2xl border-4 text-white text-xl font-semibold"
          >
            Guardar
          </button>
          <button
            onChange={clearForm}
            className="w-[188px] h-[55px] border-[#03318c] bg-white rounded-2xl border-4 text-[#03318c] text-xl font-semibold"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}
  
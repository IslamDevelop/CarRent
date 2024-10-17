import React, { ChangeEvent, useState } from "react";
import style from "./search.module.scss";

interface SearchInputProps {
  onSearch: (text: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    onSearch(value); // Передаём введённый текст в родительский компонент
  };

  return (
    <div className={style.searchInput}>
      <h1 className={style.title}>Поиск автомобиля</h1>
      <div className={style.divInput}>
        <input
          className={style.input}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Введите марку автомобиля"
        />
      </div>
    </div>
  );
};

export default SearchInput;

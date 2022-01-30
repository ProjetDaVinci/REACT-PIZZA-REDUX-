import React from "react";
import { Categories, PizzasBlock, SortPopup } from "../components";

function Home({ dataSource }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Мясные", "Вегитарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "Цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {dataSource.map((item) => (
          <PizzasBlock {...item} />
        ))}
        <PizzasBlock />
      </div>
    </div>
  );
}

export default Home;

import { useMemo, useReducer, useEffect, useState } from "react";
import { getProducts } from "./utils/generateProducts";
import { ProductList } from "./components/ProductList";
import { Sort } from "./components/Sort";
import { Filter } from "./components/Filter";
import { SET_PRODUCT, SORT_RATING, SORT_PRICE_ASC, SORT_PRICE_DESC } from "./utils/const";
import { useDebounce } from "./hooks/useDebounce";


const initialState = {
  products: []
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SORT_PRICE_ASC:
      return { ...state, products: [...state.products].sort((a, b) => a.price - b.price) }
    case SORT_PRICE_DESC:
      return { ...state, products: [...state.products].sort((a, b) => b.price - a.price) }
    case SORT_RATING:
      return { ...state, products: [...state.products].sort((a, b) => b.rating - a.rating) }
    case SET_PRODUCT: return { ...state, products: payload }
    default:
      return state
  }
}

function App() {
  const products = useMemo(() => getProducts(), []) ;
  const [value, setValue] = useState("");
  const query = useDebounce(value);
  const categories = useMemo(() => [...new Set(products.map(x => x.category))], [products]);
  const colors = useMemo(() => [...new Set(products.map(x => x.color))], [products]);
  const [sortMode, setSortMode] = useState(SORT_RATING);
  const [activeCategory, setActiveCategory] = useState([]);
  const [activeColor, setActiveColor] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlerChangeSortMode = (e) => setSortMode(e.target.value)
  
  useEffect(() => {
    const result = products.filter(product => {
      const { color, category, name, description } = product;
      const colorItem = !activeColor.length || activeColor.includes(color);
      const categoryItem = !activeCategory.length || activeCategory.includes(category);
      const queryItem = !query.length || name.toLowerCase().includes(query.toLowerCase()) || description.toLowerCase().includes(query.toLowerCase())
      return colorItem && categoryItem && queryItem
    })
    dispatch({ type: SET_PRODUCT, payload: result });
    dispatch({ type: sortMode })
  }, [activeColor, activeCategory, products, query, sortMode])

  const handlerSetActiveSelect = (e) => {
    const { name, value } = e.target;
    const handler = prev => prev.includes(value) ? prev.filter(x => x !== value) : [...prev, value]
    if (name === "category") {
      setActiveCategory(handler);
      return;
    }
    if (name === "color") {
      setActiveColor(handler);
      return;
    }
  }
  return (
    <div className="mx-auto my-3 px-3 w-3/4 md:w-full">
      <div className="flex w-full gap-4 md:flex-col-reverse">
        <Sort onClick={handlerChangeSortMode} sortMode={sortMode} />
        <input type="text" className="border-2 border-black w-1/3 md:w-full text-3xl px-2" placeholder="Поиск" onChange={(e) => setValue(e.target.value.trim())} value={value} />
      </div>
      <div className="flex gap-10 mt-4 sm:flex-col">
        <div className="flex flex-col gap-10 w-1/5 sm:flex-row sm:w-full">
          <Filter items={categories} onChange={handlerSetActiveSelect} name="category" title={"По категориям"} />
          <Filter items={colors} onChange={handlerSetActiveSelect} name="color" title={"По Цвету"} />
        </div>
        {state.products.length ? <ProductList products={state.products} /> : "Нет товаров"}
      </div>
    </div>
  );
}

export default App;

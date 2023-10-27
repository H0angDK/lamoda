export const ProductItem = ({ product }) => {
  return (
    <div className="w-64 h-[28rem] md:w-48 border-2 md:h-[28rem] border-black bg-gray-300 sm:w-3/5">
      <img src={product.image} alt={product.name} className="w-full h-48 object-fit" />
      <div className="flex flex-col gap-2 border-t-2 border-black w-full px-2">
        <h3 className="text-3xl md:text-xl sm:text-4xl">{product.name}</h3>
        <span className="text-0.5xl text-slate-600 mb-2 md:text-base sm:text-xl">{product.description}</span>
        <span className="sm:text-xl">Цвет: <strong>{product.color}</strong></span>
        <span className="sm:text-xl">Категория: <strong>{product.category}</strong></span>
        <span className="sm:text-xl">Цена: <strong>{product.price}</strong></span>
        <span className="sm:text-xl">Рейтинг: <strong>{product.rating} &#9734;</strong></span>
      </div>
    </div>);
};

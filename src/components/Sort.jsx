import { SORT_PRICE_ASC, SORT_PRICE_DESC, SORT_RATING } from "../utils/const";

export const Sort = ({ onClick, sortMode }) => {
    return (<div className="flex w-2/3 gap-10 md:w-full md:justify-between md:text-base sm:flex-col sm:gap-2 sm:text-2xl" >
        <button className="border-2 border-black px-3 bg-gray-300 text-2xl py-1 disabled:text-gray-400 disabled:bg-black"
            onClick={onClick}
            value={SORT_PRICE_ASC}
            disabled={SORT_PRICE_ASC === sortMode}>
            Сначало дешевый
        </button>
        <button className="border-2 border-black px-3 bg-gray-300 text-2xl py-1 disabled:text-gray-400 disabled:bg-black"
            onClick={onClick}
            value={SORT_PRICE_DESC}
            disabled={SORT_PRICE_DESC === sortMode}>
            Сначало дорогие
        </button>
        <button className="border-2 border-black px-3 bg-gray-300 text-2xl py-1 disabled:text-gray-400 disabled:bg-black"
            onClick={onClick}
            value={SORT_RATING}
            disabled={SORT_RATING === sortMode}>
            Сначало популярные
        </button>
    </div >);
}
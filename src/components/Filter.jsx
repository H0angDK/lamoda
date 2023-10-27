import { Category } from "./Category"

export const Filter = ({ items, onChange, name, title }) => {
    return (<div className="flex flex-col group sm:w-2/3">
        <h2 className="text-center pt-1 border-2 border-black text-3xl md:text-xl sm:text-2xl">{title}</h2>
        <div className="flex flex-col px-2 bg-gray-300 mt-3 text-2xl py-2 md:text-base sm:hidden sm:group-focus:flex sm:group-hover:flex">
            {items.map((item) => <Category key={item} item={item} onChange={onChange} name={name} />)}
        </div>
    </div>)

}
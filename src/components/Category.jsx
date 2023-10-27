export const Category = ({ item, onChange, name }) => {
    return (
        <div className="flex gap-3 sm:text-2xl">
            <input type="checkbox" className="w-6 md:w-4 sm:w-6" onChange={onChange} value={item} name={name} />
            <label>{item}</label>
        </div>)
} 
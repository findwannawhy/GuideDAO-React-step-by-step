import Item from "./item.js";

export default function ItemList(props) {
  return (
    <ul className="list-none m-0 p-0">
      {props.items.map((item) => (
        <li className="mb-20" key={item.id}>
          <Item info={item} />
          <button
            className="bg-white text-black border border-[#cccccc] py-1 px-5 min-w-[50px] text-base rounded-[3px] cursor-pointer transition-opacity duration-200 ease-out shadow hover:opacity-80 active:shadow-none active:translate-y-[1px] mt-4"
            onClick={() => props.onDeleteButton(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

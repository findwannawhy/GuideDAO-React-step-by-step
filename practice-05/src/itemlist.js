import Item from "./item.js";

export default function ItemList(props) {
  return (
    <ul className="ui-list">
      {props.items.map((item) => (
        <li className="ui-item-list" key={item.id}>
          <Item info={item} />
          <button
            className="item-button"
            onClick={() => props.onDeleteButton(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

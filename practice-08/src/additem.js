export default function AddItem(props) {
  return (
    <form onSubmit={props.onAddSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="item-name" className="block font-medium">
          Название товара:
        </label>
        <input
          id="item-name"
          type="text"
          placeholder="Название товара"
          className="py-3 px-2.5 rounded-[3px] border border-[#cccccc] text-base w-full"
          value={props.inputNameValue}
          onChange={props.onNameChange}
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="item-desc" className="block font-medium">
          Описание:
        </label>
        <input
          id="item-desc"
          type="text"
          placeholder="Описание товара"
          className="py-3 px-2.5 rounded-[3px] border border-[#cccccc] text-base w-full"
          value={props.inputDescValue}
          onChange={props.onDescChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-sm text-red-500">
          {props.validator ? "" : "Поля не заполнены!"}
        </div>
        <input
          type="submit"
          className="bg-[#0000ff] text-white border-0 py-4 px-5 min-w-[150px] text-base rounded-[3px] cursor-pointer transition-opacity duration-200 ease-out shadow hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed active:shadow-none active:translate-y-[1px]"
          value="Добавить"
          disabled={!props.validator}
        />
      </div>
    </form>
  );
}

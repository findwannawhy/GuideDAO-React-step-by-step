import Shop from "./shop.js";
import { useState } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const handleOpenButton = () => setIsAuth(true);
  const handleCloseButton = () => setIsAuth(false);
  const menu = (
    <>
      <Shop />
      <button className="ui-button" onClick={handleCloseButton}>
        Выйти
      </button>
    </>
  );
  const login = (
    <>
      <h2 className="ui-title">Нужно залогиниться!</h2>
      <button className="ui-button" onClick={handleOpenButton}>
        Войти
      </button>
    </>
  );

  return isAuth ? menu : login;
}

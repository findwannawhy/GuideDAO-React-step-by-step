import "./styles.css";
import Link from "./link.js";
import Button from "./button.js";
import Container from "./container.js";
import Input from "./input.js";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Input placeholder="inp" name="inp" />
        <Button type="button" disabled="" label="Кнопка" />
        <Link href="https://codesandbox.io/" label="Ссылка" />
      </Container>
    </div>
  );
}

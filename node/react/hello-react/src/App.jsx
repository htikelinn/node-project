import List from "./components/List";
import Item from "./components/Item";
export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <List>
        <Item content="Hello, World!" name="Alice" />
        <Item content="React is fun." name="Bob" />
      </List>
    </div>
  );
}
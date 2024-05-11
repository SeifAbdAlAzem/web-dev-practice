import { Fragment } from "react/jsx-runtime";
import styles from "./App.module.css";
import { useState } from "react";
import { produce } from "immer";

function App() {
  {
    /* Exercise One on Update State */
  }
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Seif",
    },
  });

  const handlePlayerName = () => {
    // Normal Way

    // const newPlayer = {
    //   ...game,
    //   player: {
    //     ...game.player,
    //     name: "Seif Alaomdaaaaaaaa",
    //   },
    // };
    // setGame(newPlayer);

    // Immer Way

    setGame(
      produce(game, (draft) => {
        draft.player.name = "Seif Alaomdaaaaaaaa";
      })
    );
  };

  {
    /* Exercise Two on Update State */
  }

  const [pizza, setPizza] = useState({
    name: "Spice Pepperoni",
    toppings: ["Mushroom"],
  });

  const handlePizzaToppings = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Onion"] });

    // Using Immer

    // setPizza(
    //   produce(pizza, (draftPizza) => {
    //     draftPizza.toppings.push("Onion");
    //   })
    // );
  };

  {
    /* Exercise Three on Update State */
  }

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product One", quantity: 1 },
      { id: 2, title: "Product Two", quantity: 1 },
    ],
  });

  const handleProductQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });

    // Using Immer

    // setCart(
    //   produce((cartDraft) => {
    //     const newQuantity = cartDraft.items.find((item) => item.id === 1);
    //     if (newQuantity) {
    //       newQuantity.quantity += 1;
    //     }
    //   })
    // );
  };

  return (
    <Fragment>
      {/* Exercise One on Update State */}
      <div className={styles.playerContainer}>
        <button onClick={handlePlayerName} type="submit">
          Change Player Name
        </button>
        <p>{game.player.name}</p>
      </div>

      {/* Exercise Two on Update State */}
      <div className={styles.playerContainer}>
        <button onClick={handlePizzaToppings} type="submit">
          Add Pizza Toppings
        </button>
        <p>{pizza.toppings}</p>
      </div>

      {/* Exercise Three on Update State */}
      <div className={styles.playerContainer}>
        <button onClick={handleProductQuantity} type="submit">
          Add Product One Quantity
        </button>
        {cart.items.map((item) => (
          <p key={item.id}>
            {item.title} | quantity {item.quantity}
          </p>
        ))}
      </div>
    </Fragment>
  );
}

export default App;

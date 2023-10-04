import PizzaType from "../types/PizzaType";
import MakeOrder from "./MakeOrder";
import { findItemById } from "../redux/slices/utils";

type props = {
  pizzasData: PizzaType[];
  items: SingleOrderType[];
};

function MakeOrderCon({ pizzasData, items }: props) {
  return (
    <>
      {pizzasData.map((pizza: PizzaType, i) => {
        const item = findItemById(pizza.id, items);
        return (
          <MakeOrder
            key={i}
            pizza={pizza as PizzaType}
            count={item ? item.count : 0}
          ></MakeOrder>
        );
      })}
    </>
  );
}

export default MakeOrderCon;

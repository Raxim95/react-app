import pizzasData from "./pizzasData";

const pizzasMap = new Map();

pizzasData.forEach((pizza) => {
  pizzasMap.set(pizza.id, pizza);
});

export default pizzasMap;

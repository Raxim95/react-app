export const calcTotal = (items: SingleOrderType[]) => {
  return items.reduce((sum, item) => {
    sum += item.price * item.count;
    return sum;
  }, 0);
};

export const findItemById = (id: string, items: SingleOrderType[]) => {
  return items.find((item) => item.id === id);
};

export const removeItemById = (id: string, items: SingleOrderType[]) => {
  return items.filter((item) => item.id !== id);
};

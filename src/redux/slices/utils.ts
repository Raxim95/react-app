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

export const getRandomToken = () => {
  const rand = function () {
    return Math.random().toString(36).slice(2);
  };

  return rand() + rand();
};

export const getCurrentConfigOrder = (token: string) => {
  const itemsJson = localStorage.getItem(token) || "";

  console.log("LOAD: ", token, itemsJson);
  return JSON.parse(itemsJson) || [];
};

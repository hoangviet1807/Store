export const convertMoney = (price, quantity) => {
  const money = parseInt(price) * parseInt(quantity);
  return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

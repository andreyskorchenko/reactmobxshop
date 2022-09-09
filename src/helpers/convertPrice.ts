export const convertPrice = (price: number): string => {
  return price.toLocaleString('us', {
    currency: 'usd',
    style: 'currency',
    minimumFractionDigits: 0,
  });
};

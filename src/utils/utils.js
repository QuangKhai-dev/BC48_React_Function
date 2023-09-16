export function getRandom(number) {
  return Math.floor(Math.random() * number);
}

export const saveLocalStore = (key, value) => {
  const stringLocal = JSON.stringify(value);
  localStorage.setItem(key, stringLocal);
};

export const getLocalStore = (key) => {
  const dataLocal = JSON.parse(localStorage.getItem(key));
  // kiểm tra nếu có dữ liệu thì sẽ trả dữ liệu đó, còn không trả []
  return dataLocal;
};

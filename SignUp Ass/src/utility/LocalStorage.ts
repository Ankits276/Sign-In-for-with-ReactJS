export const setValue = (key: any, value: any) => {
  localStorage.setItem(key, value);
};

export const getValue = (key: any) => {
  return localStorage.getItem(key);
};

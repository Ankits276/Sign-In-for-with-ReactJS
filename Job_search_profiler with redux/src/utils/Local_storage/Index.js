export const setValue = (key, value) => {
  localStorage.setItem(key, _value);
};

export const getValue = (key) => {
  return localStorage.getItem(key);
};

export const sample = list => {
  const i = Math.floor(Math.random() * list.length);
  return list[i];
};

export const randomCoordinates = f => ({
  x: f(),
  y: f(),
  z: f()
});

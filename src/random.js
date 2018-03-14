export const sample = list => {
  const i = Math.floor(Math.random() * list.length);
  return list[i];
};

export const randomPositionElement = () => Math.random() * 3 - 1.5;

export const randomPosition = () => ({
  x: randomPositionElement(),
  y: randomPositionElement(),
  z: randomPositionElement() - 5
});

export const randomScale = () => ({
  x: randomPositionElement(),
  y: randomPositionElement(),
  z: randomPositionElement()
});

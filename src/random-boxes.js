(function() {
  const sceneEl = document.querySelector('a-scene');

  function sample(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
  }

  function randomPositionElement() {
    return Math.random() * 3 - 1.5;
  }

  function randomPosition() {
    return {
      x: randomPositionElement(),
      y: randomPositionElement(),
      z: randomPositionElement() - 5
    };
  }
  function randomScale() {
    return {
      x: randomPositionElement(),
      y: randomPositionElement(),
      z: randomPositionElement()
    };
  }

  function randomBox() {
    const box = document.createElement('a-entity');
    box.classList = 'random-box';
    box.setAttribute('geometry', {primitive: 'box'})
    box.setAttribute('material', 'color', sample(['skyblue', 'red']));
    box.setAttribute('position', randomPosition());
    box.setAttribute('scale', randomPosition());
    sceneEl.appendChild(box);
  }

  console.log('running');

  for (let i = 0; i < 50; i++) {
    randomBox();
  }
})();

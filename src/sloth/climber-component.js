window.AFRAME.registerComponent('climber', {
  init() {
    this.moveInfo = {
      timeDelta: 0,
      oldY: 0,
      newY: 0,
      target: undefined
    };
  },

  tick(time, timeDelta) {
    const { el } = this;

    this.moveInfo.oldY = this.moveInfo.newY;
    this.moveInfo.timeDelta = timeDelta;
    this.moveInfo.newY = el.getAttribute('position').y;
    this.target = el;

    this.el.emit('move', this.moveInfo);
  }
});

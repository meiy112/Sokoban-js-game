window.onload = function() {

  var width = 1845;
  var height = 1107;
  var config = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    backgroundColor: 0xffffff,
    scene: [Scene0, Scene1, Scene2, Scene3, Scene4],
    physics: {
      default: "arcade",
      arcade: {
        debug: true
      }
    }
  };

  var gameSettings = {
    playerSpeed: 400,
  };

  this.game = new Phaser.Game(config);
}

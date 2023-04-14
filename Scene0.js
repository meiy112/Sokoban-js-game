class Scene0 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("tiles", "assets/tileset.png");
    this.load.tilemapTiledJSON("map1", "assets/map1.json");
    this.load.tilemapTiledJSON("map3", "assets/map3.json");

    this.load.spritesheet("rock_object", "assets/spritesheets/rock.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("bush_object", "assets/spritesheets/bush.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("burnt_bush", "assets/spritesheets/burnt_bush.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("target", "assets/spritesheets/target.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("cut", "assets/spritesheets/cut.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("angel_idle", "assets/spritesheets/angel_idle.png", {
      frameWidth: 120,
      frameHeight: 120
    });

    this.load.spritesheet("target_down", "assets/spritesheets/down.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("target_left", "assets/spritesheets/left.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("target_right", "assets/spritesheets/right.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("target_up", "assets/spritesheets/up.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("teleport_end", "assets/spritesheets/teleport_end.png", {
      frameWidth: 123,
      frameHeight: 123
    });

    this.load.spritesheet("teleport_start", "assets/spritesheets/teleport_start.png", {
      frameWidth: 123,
      frameHeight: 123
    });
  }


  create() {

    this.add.text(20, 20, "Loading game...");
    this.scene.start("level1");

    this.anims.create({
      key: "rocks_anim",
      frames: this.anims.generateFrameNumbers("rock_object"),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key: "bush_anim",
      frames: this.anims.generateFrameNumbers("bush_object"),
      frameRate: 1,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "burnt_bush_anim",
      frames: this.anims.generateFrameNumbers("burnt_bush"),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key: "target_anim",
      frames: this.anims.generateFrameNumbers("target"),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key: "cut_anim",
      frames: this.anims.generateFrameNumbers("cut"),
      frameRate: 1,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "angel_idle_anim",
      frames: this.anims.generateFrameNumbers("angel_idle"),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key: "teleport_end_anim",
      frames: this.anims.generateFrameNumbers("teleport_end"),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key: "teleport_start_anim",
      frames: this.anims.generateFrameNumbers("angel_idle"),
      frameRate: 1,
      repeat: -1
    });

  }
}

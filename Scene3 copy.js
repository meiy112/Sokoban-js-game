class Scene3Copy extends Phaser.Scene {

    constructor() {
        super("level3copy");
    }

    create() {
        const map = this.make.tilemap({ key: "map3" });
        const tileset = map.addTilesetImage("douya", "tiles");
        const backgroundLayer = map.createLayer("background", tileset, 0, 0);
        const borderLayer = map.createLayer("border", tileset, 0, 0);

        this.douya = this.physics.add.sprite(492, 236, "idle_left");
        this.physics.add.existing(this.douya);
        this.douya.play("idle_left_anim");
        this.douya.setOrigin(0, 0);
        this.douya.setInteractive();

        this.keys = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });

        this.input.on('gameobjectdown', this.makeHappy, this);
        this.input.on('gameobjectdown', this.action, this);

        this.bushCount = 0;

        this.douyaGoDown = false;
        this.douyaGoUp = false;
        this.douyaGoLeft = false;
        this.douyaGoRight = false;

        this.isHappy = false;
        this.oneCorrect = false;
        this.twoCorrect = false;
        this.threeCorrect = false;

        this.bushIsDestroyed = false;
        this.bush2IsDestroyed = false;
        this.bush3IsDestroyed = false;
        this.bush4IsDestroyed = false;
        this.bush5IsDestroyed = false;
        this.bush6IsDestroyed = false;
        this.bush7IsDestroyed = false;
        this.bush8IsDestroyed = false;
        this.bush9IsDestroyed = false;
        this.bush10IsDestroyed = false;
        this.bush11IsDestroyed = false;
        this.bush12IsDestroyed = false;
        this.bush13IsDestroyed = false;
        this.bush14IsDestroyed = false;

        this.rockGoDown = false;
        this.rockGoUp = false;
        this.rockGoLeft = false;
        this.rockGoRight = false;

        this.rock2GoDown = false;
        this.rock2GoUp = false;
        this.rock2GoLeft = false;
        this.rock2GoRight = false;

        this.rock3GoDown = false;
        this.rock3GoUp = false;
        this.rock3GoLeft = false;
        this.rock3GoRight = false;

        this.rock = this.physics.add.sprite(246, 615, "rock_object");
        this.rock.setOrigin(0);
        this.rock.body.immovable = true;
        this.rock.setInteractive();

        this.rock2 = this.physics.add.sprite(738, 738, "rock_object");
        this.rock2.setOrigin(0);
        this.rock2.body.immovable = true;
        this.rock2.setInteractive();

        this.rock3 = this.physics.add.sprite(738, 861, "rock_object");
        this.rock3.setOrigin(0);
        this.rock3.body.immovable = true;
        this.rock3.setInteractive();

        this.bush = this.physics.add.sprite(123, 246, "bush_object");
        this.bush.setOrigin(0);
        this.bush.body.immovable = true;
        this.bush.setInteractive();

        this.bush2 = this.physics.add.sprite(123, 369, "bush_object");
        this.bush2.setOrigin(0);
        this.bush2.body.immovable = true;
        this.bush2.setInteractive();

        this.bush3 = this.physics.add.sprite(123, 492, "bush_object");
        this.bush3.setOrigin(0);
        this.bush3.body.immovable = true;
        this.bush3.setInteractive();

        this.bush4 = this.physics.add.sprite(369, 492, "bush_object");
        this.bush4.setOrigin(0);
        this.bush4.body.immovable = true;
        this.bush4.setInteractive();

        this.bush5 = this.physics.add.sprite(369, 615, "bush_object");
        this.bush5.setOrigin(0);
        this.bush5.body.immovable = true;
        this.bush5.setInteractive();

        this.bush6 = this.physics.add.sprite(492, 615, "bush_object");
        this.bush6.setOrigin(0);
        this.bush6.body.immovable = true;
        this.bush6.setInteractive();

        this.bush7 = this.physics.add.sprite(492, 861, "bush_object");
        this.bush7.setOrigin(0);
        this.bush7.body.immovable = true;
        this.bush7.setInteractive();

        this.bush8 = this.physics.add.sprite(615, 492, "bush_object");
        this.bush8.setOrigin(0);
        this.bush8.body.immovable = true;
        this.bush8.setInteractive();

        this.bush9 = this.physics.add.sprite(861, 246, "bush_object");
        this.bush9.setOrigin(0);
        this.bush9.body.immovable = true;
        this.bush9.setInteractive();

        this.bush10 = this.physics.add.sprite(861, 492, "bush_object");
        this.bush10.setOrigin(0);
        this.bush10.body.immovable = true;
        this.bush10.setInteractive();

        this.bush11 = this.physics.add.sprite(861, 861, "bush_object");
        this.bush11.setOrigin(0);
        this.bush11.body.immovable = true;
        this.bush11.setInteractive();

        this.bush12 = this.physics.add.sprite(984, 369, "bush_object");
        this.bush12.setOrigin(0);
        this.bush12.body.immovable = true;
        this.bush12.setInteractive();

        this.bush13 = this.physics.add.sprite(984, 492, "bush_object");
        this.bush13.setOrigin(0);
        this.bush13.body.immovable = true;
        this.bush13.setInteractive();

        this.bush14 = this.physics.add.sprite(984, 615, "bush_object");
        this.bush14.setOrigin(0);
        this.bush14.body.immovable = true;
        this.bush14.setInteractive();

        this.target = this.physics.add.sprite(this.douya.x, this.douya.y, "target");
        this.target.setOrigin(0);
        this.target.setInteractive();
    }

    makeHappy(pointer, gameObject) {
        if (gameObject == this.douya) {
            if (!this.isHappy) {
                this.isHappy = true;
                gameObject.play("happy_left_anim");
                this.time.delayedCall(4000, function () {
                    gameObject.play("idle_left_anim");
                    this.isHappy = false;
                }, [], this);
            }
        }
    }

    action(pointer, gameObject) {
        if (gameObject == this.target) {
            if (this.douyaGoDown) {
                this.tweens.add({
                    targets: this.douya,
                    y: 123 * Math.round((this.douya.y + 123) / 123),
                    ease: 'Power1',
                    duration: 500
                });
            } else if (this.douyaGoUp) {
                this.tweens.add({
                    targets: this.douya,
                    y: 123 * Math.round((this.douya.y - 123) / 123),
                    ease: 'Power1',
                    duration: 500
                });
            } else if (this.douyaGoLeft) {
                this.tweens.add({
                    targets: this.douya,
                    x: 123 * Math.round((this.douya.x - 123) / 123),
                    ease: 'Power1',
                    duration: 500
                });
            } else if (this.douyaGoRight) {
                this.tweens.add({
                    targets: this.douya,
                    x: 123 * Math.round((this.douya.x + 123) / 123),
                    ease: 'Power1',
                    duration: 500
                });
            } else if (this.target.x == this.rock.x && this.target.y == this.rock.y) { // ROCKS
                if (this.rockGoUp) {
                    this.rock.setY(this.rock.y - 123);
                } else if (this.rockGoDown) {
                    this.rock.setY(this.rock.y + 123);
                } else if (this.rockGoLeft) {
                    this.rock.setX(this.rock.x - 123);
                } else if (this.rockGoRight) {
                    this.rock.setX(this.rock.x + 123);
                }
            } else if (this.target.x == this.rock2.x && this.target.y == this.rock2.y) {
                if (this.rock2GoUp) {
                    this.rock2.setY(this.rock2.y - 123);
                } else if (this.rock2GoDown) {
                    this.rock2.setY(this.rock2.y + 123);
                } else if (this.rock2GoLeft) {
                    this.rock2.setX(this.rock2.x - 123);
                } else if (this.rock2GoRight) {
                    this.rock2.setX(this.rock2.x + 123);
                }
            } else if (this.target.x == this.rock3.x && gameObject.y == this.rock3.y) {
                if (this.rock3GoUp) {
                    this.rock3.setY(this.rock3.y - 123);
                } else if (this.rock3GoDown) {
                    this.rock3.setY(this.rock3.y + 123);
                } else if (this.rock3GoLeft) {
                    this.rock3.setX(this.rock3.x - 123);
                } else if (this.rock3GoRight) {
                    this.rock3.setX(this.rock3.x + 123);
                }
            } else if (this.target.x == this.bush.x && this.target.y == this.bush.y) { // BUSHES
                this.bush.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush.destroy();
                    this.bushIsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush2.x && this.target.y == this.bush2.y) {
                this.bush2.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush2.destroy();
                    this.bush2IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush3.x && this.target.y == this.bush3.y) {
                this.bush3.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush3.destroy();
                    this.bush3IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush4.x && this.target.y == this.bush4.y) {
                this.bush4.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush4.destroy();
                    this.bush4IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush5.x && this.target.y == this.bush5.y) {
                this.bush5.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush5.destroy();
                    this.bush5IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush6.x && this.target.y == this.bush6.y) {
                this.bush6.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush6.destroy();
                    this.bush6IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush7.x && this.target.y == this.bush7.y) {
                this.bush7.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush7.destroy();
                    this.bush7IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush8.x && this.target.y == this.bush8.y) {
                this.bush8.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush8.destroy();
                    this.bush8IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush9.x && this.target.y == this.bush9.y) {
                this.bush9.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush9.destroy();
                    this.bush9IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush10.x && this.target.y == this.bush10.y) {
                this.bush10.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush10.destroy();
                    this.bush10IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush11.x && this.target.y == this.bush11.y) {
                this.bush11.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush11.destroy();
                    this.bush11IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush12.x && this.target.y == this.bush12.y) {
                this.bush12.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush12.destroy();
                    this.bush12IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush13.x && this.target.y == this.bush13.y) {
                this.bush13.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush13.destroy();
                    this.bush13IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (this.target.x == this.bush14.x && this.target.y == this.bush14.y) {
                this.bush14.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.bush14.destroy();
                    this.bush14IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            }
        }
    }
    
    movePlayerManager() {
        if (this.douya.x < 246) {
            this.douyaGoLeft = false;
        } else if (this.douya.x > 984) {
            this.douyaGoRight = false;
        }

        if (this.douya.y > 738) {
            this.douyaGoDown = false;
        } else if (this.douya.y < 246) {
            this.douyaGoUp = false;
        }

        if (!this.bushIsDestroyed) {
            if (this.douya.x + 123 == this.bush.x && this.douya.y == this.bush.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush.x && this.douya.y == this.bush.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush.x && this.douya.y + 123 == this.bush.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush.x && this.douya.y - 123 == this.bush.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush2IsDestroyed) {
            if (this.douya.x + 123 == this.bush2.x && this.douya.y == this.bush2.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush2.x && this.douya.y == this.bush2.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush2.x && this.douya.y + 123 == this.bush2.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush2.x && this.douya.y - 123 == this.bush2.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush3IsDestroyed) {
            if (this.douya.x + 123 == this.bush3.x && this.douya.y == this.bush3.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush3.x && this.douya.y == this.bush3.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush3.x && this.douya.y + 123 == this.bush3.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush3.x && this.douya.y - 123 == this.bush3.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush4IsDestroyed) {
            if (this.douya.x + 123 == this.bush4.x && this.douya.y == this.bush4.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush4.x && this.douya.y == this.bush4.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush4.x && this.douya.y + 123 == this.bush4.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush4.x && this.douya.y - 123 == this.bush4.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush5IsDestroyed) {
            if (this.douya.x + 123 == this.bush5.x && this.douya.y == this.bush5.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush5.x && this.douya.y == this.bush5.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush5.x && this.douya.y + 123 == this.bush5.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush5.x && this.douya.y - 123 == this.bush5.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush6IsDestroyed) {
            if (this.douya.x + 123 == this.bush6.x && this.douya.y == this.bush6.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush6.x && this.douya.y == this.bush6.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush6.x && this.douya.y + 123 == this.bush6.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush6.x && this.douya.y - 123 == this.bush6.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush7IsDestroyed) {
            if (this.douya.x + 123 == this.bush7.x && this.douya.y == this.bush7.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush7.x && this.douya.y == this.bush7.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush7.x && this.douya.y + 123 == this.bush7.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush7.x && this.douya.y - 123 == this.bush7.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush8IsDestroyed) {
            if (this.douya.x + 123 == this.bush8.x && this.douya.y == this.bush8.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush8.x && this.douya.y == this.bush8.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush8.x && this.douya.y + 123 == this.bush8.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush8.x && this.douya.y - 123 == this.bush8.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush9IsDestroyed) {
            if (this.douya.x + 123 == this.bush9.x && this.douya.y == this.bush9.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush9.x && this.douya.y == this.bush9.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush9.x && this.douya.y + 123 == this.bush9.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush9.x && this.douya.y - 123 == this.bush9.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush10IsDestroyed) {
            if (this.douya.x + 123 == this.bush10.x && this.douya.y == this.bush10.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush10.x && this.douya.y == this.bush10.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush10.x && this.douya.y + 123 == this.bush10.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush10.x && this.douya.y - 123 == this.bush10.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush11IsDestroyed) {
            if (this.douya.x + 123 == this.bush11.x && this.douya.y == this.bush11.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush11.x && this.douya.y == this.bush11.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush11.x && this.douya.y + 123 == this.bush11.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush11.x && this.douya.y - 123 == this.bush11.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush12IsDestroyed) {
            if (this.douya.x + 123 == this.bush12.x && this.douya.y == this.bush12.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush12.x && this.douya.y == this.bush12.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush12.x && this.douya.y + 123 == this.bush12.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush12.x && this.douya.y - 123 == this.bush12.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush13IsDestroyed) {
            if (this.douya.x + 123 == this.bush13.x && this.douya.y == this.bush13.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush13.x && this.douya.y == this.bush13.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush13.x && this.douya.y + 123 == this.bush13.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush13.x && this.douya.y - 123 == this.bush13.y) {
                this.douyaGoUp = false;
            }
        }
        if (!this.bush14IsDestroyed) {
            if (this.douya.x + 123 == this.bush14.x && this.douya.y == this.bush14.y) {
                this.douyaGoRight = false;
            } else if (this.douya.x - 123 == this.bush14.x && this.douya.y == this.bush14.y) {
                this.douyaGoLeft = false;
            } else if (this.douya.x == this.bush14.x && this.douya.y + 123 == this.bush14.y) {
                this.douyaGoDown = false;
            } else if (this.douya.x == this.bush14.x && this.douya.y - 123 == this.bush14.y) {
                this.douyaGoUp = false;
            }
        }

        if (this.douya.x + 123 == this.rock.x && this.douya.y == this.rock.y) {
            this.douyaGoRight = false;
        } else if (this.douya.x - 123 == this.rock.x && this.douya.y == this.rock.y) {
            this.douyaGoLeft = false;
        } else if (this.douya.x == this.rock.x && this.douya.y + 123 == this.rock.y) {
            this.douyaGoDown = false;
        } else if (this.douya.x == this.rock.x && this.douya.y - 123 == this.rock.y) {
            this.douyaGoUp = false;
        }
        if (this.douya.x + 123 == this.rock2.x && this.douya.y == this.rock2.y) {
            this.douyaGoRight = false;
        } else if (this.douya.x - 123 == this.rock2.x && this.douya.y == this.rock2.y) {
            this.douyaGoLeft = false;
        } else if (this.douya.x == this.rock2.x && this.douya.y + 123 == this.rock2.y) {
            this.douyaGoDown = false;
        } else if (this.douya.x == this.rock2.x && this.douya.y - 123 == this.rock2.y) {
            this.douyaGoUp = false;
        }
        if (this.douya.x + 123 == this.rock3.x && this.douya.y == this.rock3.y) {
            this.douyaGoRight = false;
        } else if (this.douya.x - 123 == this.rock3.x && this.douya.y == this.rock3.y) {
            this.douyaGoLeft = false;
        } else if (this.douya.x == this.rock3.x && this.douya.y + 123 == this.rock3.y) {
            this.douyaGoDown = false;
        } else if (this.douya.x == this.rock3.x && this.douya.y - 123 == this.rock3.y) {
            this.douyaGoUp = false;
        }
    }

    moveTargetManager() {
        var mouseX = this.game.input.mousePointer.x;
        var mouseY = this.game.input.mousePointer.y;
        if (mouseX > this.douya.x && mouseX < this.douya.x + 123 && mouseY > this.douya.y && mouseY < this.douya.y + 123) {

        } else if (mouseX <= this.douya.x) {
            this.target.setPosition(123 * Math.floor((this.douya.x - 123) / 123), 123 * Math.round((this.douya.y) / 123));
            this.douyaGoRight = false;
            this.douyaGoLeft = true;
            this.douyaGoUp = false;
            this.douyaGoDown = false;

            this.rockGoRight = false;
            this.rockGoLeft = true;
            this.rockGoUp = false;
            this.rockGoDown = false;

            this.rock2GoRight = false;
            this.rock2GoLeft = true;
            this.rock2GoUp = false;
            this.rock2GoDown = false;

            this.rock3GoRight = false;
            this.rock3GoLeft = true;
            this.rock3GoUp = false;
            this.rock3GoDown = false;
        } else if (mouseX >= this.douya.x + 123) {
            this.target.setPosition(123 * Math.ceil((this.douya.x + 123) / 123), 123 * Math.round((this.douya.y) / 123));
            this.douyaGoRight = true;
            this.douyaGoLeft = false;
            this.douyaGoUp = false;
            this.douyaGoDown = false;
            
            this.rockGoRight = true;
            this.rockGoLeft = false;
            this.rockGoUp = false;
            this.rockGoDown = false;

            this.rock2GoRight = true;
            this.rock2GoLeft = false;
            this.rock2GoUp = false;
            this.rock2GoDown = false;

            this.rock3GoRight = true;
            this.rock3GoLeft = false;
            this.rock3GoUp = false;
            this.rock3GoDown = false;
        } else if (mouseY <= this.douya.y) {
            this.target.setPosition(123 * Math.round((this.douya.x) / 123), 123 * Math.floor((this.douya.y - 123) / 123));
            this.douyaGoRight = false;
            this.douyaGoLeft = false;
            this.douyaGoUp = true;
            this.douyaGoDown = false;
            
            this.rockGoRight = false;
            this.rockGoLeft = false;
            this.rockGoUp = true;
            this.rockGoDown = false;

            this.rock2GoRight = false;
            this.rock2GoLeft = false;
            this.rock2GoUp = true;
            this.rock2GoDown = false;

            this.rock3GoRight = false;
            this.rock3GoLeft = false;
            this.rock3GoUp = true;
            this.rock3GoDown = false;
        } else if (mouseY >= this.douya.y + 123) {
            this.target.setPosition(123 * Math.round((this.douya.x) / 123), 123 * Math.ceil((this.douya.y + 123) / 123));
            this.douyaGoRight = false;
            this.douyaGoLeft = false;
            this.douyaGoUp = false;
            this.douyaGoDown = true;
            
            this.rockGoRight = false;
            this.rockGoLeft = false;
            this.rockGoUp = false;
            this.rockGoDown = true;

            this.rock2GoRight = false;
            this.rock2GoLeft = false;
            this.rock2GoUp = false;
            this.rock2GoDown = true;

            this.rock3GoRight = false;
            this.rock3GoLeft = false;
            this.rock3GoUp = false;
            this.rock3GoDown = true;
        }
    }

    moveRockManager() {
        if (this.rock.x <= 246 && this.rock.y >= 492) {
            this.rockGoLeft = false;
        } else if (this.rock.x <= 123 && this.rock.y < 492) {
            this.rockGoLeft = false;
        } else if (this.rock.x >= 984) {
            this.rockGoRight = false;
        }

        if (this.rock.y + 123 >= 984) {
            this.rockGoDown = false;
        } else if (this.rock.y <= 246) {
            this.rockGoUp = false;
        }

        if (this.rock.x == 492 && this.rock.y == 246) {
            this.rockGoDown = false;
        } else if (this.rock.x == 369 && this.rock.y == 369) {
            this.rockGoRight = false;
        } else if (this.rock.x == 615 && this.rock.y == 369) {
            this.rockGoLeft = false;
        } else if (this.rock.x == 492 && this.rock.y == 615) {
            this.rockGoUp = false;
        } else if (this.rock.x == 861 && this.rock.y == 246) {
            this.rockGoDown = false;
        } else if (this.rock.x == 738 && this.rock.y == 369) {
            this.rockGoRight = false;
        } else if (this.rock.x == 984 && this.rock.y == 369) {
            this.rockGoLeft = false;
        } else if (this.rock.x == 861 && this.rock.y == 492) {
            this.rockGoUp = false;
        } else if (this.rock.x == 369 && this.rock.y == 492) {
            this.rockGoRight = false;
        } else if (this.rock.x == 615 && this.rock.y == 492) {
            this.rockGoLeft = false;
        } else if (this.rock.x == 492 && this.rock.y == 615) {
            this.rockGoUp = false;
        }

        if (!this.bushIsDestroyed) {
            if (this.rock.x + 123 == this.bush.x && this.rock.y == this.bush.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush.x && this.rock.y == this.bush.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush.x && this.rock.y + 123 == this.bush.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush.x && this.rock.y - 123 == this.bush.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush2IsDestroyed) {
            if (this.rock.x + 123 == this.bush2.x && this.rock.y == this.bush2.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush2.x && this.rock.y == this.bush2.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush2.x && this.rock.y + 123 == this.bush2.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush2.x && this.rock.y - 123 == this.bush2.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush3IsDestroyed) {
            if (this.rock.x + 123 == this.bush3.x && this.rock.y == this.bush3.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush3.x && this.rock.y == this.bush3.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush3.x && this.rock.y + 123 == this.bush3.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush3.x && this.rock.y - 123 == this.bush3.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush4IsDestroyed) {
            if (this.rock.x + 123 == this.bush4.x && this.rock.y == this.bush4.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush4.x && this.rock.y == this.bush4.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush4.x && this.rock.y + 123 == this.bush4.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush4.x && this.rock.y - 123 == this.bush4.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush5IsDestroyed) {
            if (this.rock.x + 123 == this.bush5.x && this.rock.y == this.bush5.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush5.x && this.rock.y == this.bush5.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush5.x && this.rock.y + 123 == this.bush5.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush5.x && this.rock.y - 123 == this.bush5.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush6IsDestroyed) {
            if (this.rock.x + 123 == this.bush6.x && this.rock.y == this.bush6.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush6.x && this.rock.y == this.bush6.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush6.x && this.rock.y + 123 == this.bush6.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush6.x && this.rock.y - 123 == this.bush6.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush7IsDestroyed) {
            if (this.rock.x + 123 == this.bush7.x && this.rock.y == this.bush7.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush7.x && this.rock.y == this.bush7.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush7.x && this.rock.y + 123 == this.bush7.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush7.x && this.rock.y - 123 == this.bush7.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush8IsDestroyed) {
            if (this.rock.x + 123 == this.bush8.x && this.rock.y == this.bush8.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush8.x && this.rock.y == this.bush8.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush8.x && this.rock.y + 123 == this.bush8.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush8.x && this.rock.y - 123 == this.bush8.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush9IsDestroyed) {
            if (this.rock.x + 123 == this.bush9.x && this.rock.y == this.bush9.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush9.x && this.rock.y == this.bush9.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush9.x && this.rock.y + 123 == this.bush9.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush9.x && this.rock.y - 123 == this.bush9.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush10IsDestroyed) {
            if (this.rock.x + 123 == this.bush10.x && this.rock.y == this.bush10.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush10.x && this.rock.y == this.bush10.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush10.x && this.rock.y + 123 == this.bush10.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush10.x && this.rock.y - 123 == this.bush10.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush11IsDestroyed) {
            if (this.rock.x + 123 == this.bush11.x && this.rock.y == this.bush11.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush11.x && this.rock.y == this.bush11.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush11.x && this.rock.y + 123 == this.bush11.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush11.x && this.rock.y - 123 == this.bush11.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush12IsDestroyed) {
            if (this.rock.x + 123 == this.bush12.x && this.rock.y == this.bush12.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush12.x && this.rock.y == this.bush12.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush12.x && this.rock.y + 123 == this.bush12.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush12.x && this.rock.y - 123 == this.bush12.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush13IsDestroyed) {
            if (this.rock.x + 123 == this.bush13.x && this.rock.y == this.bush13.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush13.x && this.rock.y == this.bush13.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush13.x && this.rock.y + 123 == this.bush13.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush13.x && this.rock.y - 123 == this.bush13.y) {
                this.rockGoUp = false;
            }
        }
        if (!this.bush14IsDestroyed) {
            if (this.rock.x + 123 == this.bush14.x && this.rock.y == this.bush14.y) {
                this.rockGoRight = false;
            } else if (this.rock.x - 123 == this.bush14.x && this.rock.y == this.bush14.y) {
                this.rockGoLeft = false;
            } else if (this.rock.x == this.bush14.x && this.rock.y + 123 == this.bush14.y) {
                this.rockGoDown = false;
            } else if (this.rock.x == this.bush14.x && this.rock.y - 123 == this.bush14.y) {
                this.rockGoUp = false;
            }
        }
        if (this.rock.x + 123 == this.rock2.x && this.rock.y == this.rock2.y) {
            this.rockGoRight = false;
        } else if (this.rock.x - 123 == this.rock2.x && this.rock.y == this.rock2.y) {
            this.rockGoLeft = false;
        } else if (this.rock.x == this.rock2.x && this.rock.y + 123 == this.rock2.y) {
            this.rockGoDown = false;
        } else if (this.rock.x == this.rock2.x && this.rock.y - 123 == this.rock2.y) {
            this.rockGoUp = false;
        }
        if (this.rock.x + 123 == this.rock3.x && this.rock.y == this.rock3.y) {
            this.rockGoRight = false;
        } else if (this.rock.x - 123 == this.rock3.x && this.rock.y == this.rock3.y) {
            this.rockGoLeft = false;
        } else if (this.rock.x == this.rock3.x && this.rock.y + 123 == this.rock3.y) {
            this.rockGoDown = false;
        } else if (this.rock.x == this.rock3.x && this.rock.y - 123 == this.rock3.y) {
            this.rockGoUp = false;
        }

        //rock 2
        if (this.rock2.x <= 246 && this.rock2.y >= 492) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x <= 123 && this.rock2.y < 492) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x >= 984) {
            this.rock2GoRight = false;
        }

        if (this.rock2.y + 123 >= 984) {
            this.rock2GoDown = false;
        } else if (this.rock2.y <= 246) {
            this.rock2GoUp = false;
        }

        if (this.rock2.x == 492 && this.rock2.y == 246) {
            this.rock2GoDown = false;
        } else if (this.rock2.x == 369 && this.rock2.y == 369) {
            this.rock2GoRight = false;
        } else if (this.rock2.x == 615 && this.rock2.y == 369) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x == 492 && this.rock2.y == 615) {
            this.rock2GoUp = false;
        } else if (this.rock2.x == 861 && this.rock2.y == 246) {
            this.rock2GoDown = false;
        } else if (this.rock2.x == 738 && this.rock2.y == 369) {
            this.rock2GoRight = false;
        } else if (this.rock2.x == 984 && this.rock2.y == 369) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x == 861 && this.rock2.y == 492) {
            this.rock2GoUp = false;
        } else if (this.rock2.x == 369 && this.rock2.y == 492) {
            this.rock2GoRight = false;
        } else if (this.rock2.x == 615 && this.rock2.y == 492) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x == 492 && this.rock2.y == 615) {
            this.rock2GoUp = false;
        }

        if (!this.bushIsDestroyed) {
            if (this.rock2.x + 123 == this.bush.x && this.rock2.y == this.bush.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush.x && this.rock2.y == this.bush.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush.x && this.rock2.y + 123 == this.bush.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush.x && this.rock2.y - 123 == this.bush.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush2IsDestroyed) {
            if (this.rock2.x + 123 == this.bush2.x && this.rock2.y == this.bush2.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush2.x && this.rock2.y == this.bush2.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush2.x && this.rock2.y + 123 == this.bush2.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush2.x && this.rock2.y - 123 == this.bush2.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush3IsDestroyed) {
            if (this.rock2.x + 123 == this.bush3.x && this.rock2.y == this.bush3.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush3.x && this.rock2.y == this.bush3.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush3.x && this.rock2.y + 123 == this.bush3.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush3.x && this.rock2.y - 123 == this.bush3.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush4IsDestroyed) {
            if (this.rock2.x + 123 == this.bush4.x && this.rock2.y == this.bush4.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush4.x && this.rock2.y == this.bush4.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush4.x && this.rock2.y + 123 == this.bush4.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush4.x && this.rock2.y - 123 == this.bush4.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush5IsDestroyed) {
            if (this.rock2.x + 123 == this.bush5.x && this.rock2.y == this.bush5.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush5.x && this.rock2.y == this.bush5.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush5.x && this.rock2.y + 123 == this.bush5.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush5.x && this.rock2.y - 123 == this.bush5.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush6IsDestroyed) {
            if (this.rock2.x + 123 == this.bush6.x && this.rock2.y == this.bush6.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush6.x && this.rock2.y == this.bush6.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush6.x && this.rock2.y + 123 == this.bush6.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush6.x && this.rock2.y - 123 == this.bush6.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush7IsDestroyed) {
            if (this.rock2.x + 123 == this.bush7.x && this.rock2.y == this.bush7.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush7.x && this.rock2.y == this.bush7.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush7.x && this.rock2.y + 123 == this.bush7.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush7.x && this.rock2.y - 123 == this.bush7.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush8IsDestroyed) {
            if (this.rock2.x + 123 == this.bush8.x && this.rock2.y == this.bush8.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush8.x && this.rock2.y == this.bush8.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush8.x && this.rock2.y + 123 == this.bush8.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush8.x && this.rock2.y - 123 == this.bush8.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush9IsDestroyed) {
            if (this.rock2.x + 123 == this.bush9.x && this.rock2.y == this.bush9.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush9.x && this.rock2.y == this.bush9.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush9.x && this.rock2.y + 123 == this.bush9.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush9.x && this.rock2.y - 123 == this.bush9.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush10IsDestroyed) {
            if (this.rock2.x + 123 == this.bush10.x && this.rock2.y == this.bush10.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush10.x && this.rock2.y == this.bush10.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush10.x && this.rock2.y + 123 == this.bush10.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush10.x && this.rock2.y - 123 == this.bush10.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush11IsDestroyed) {
            if (this.rock2.x + 123 == this.bush11.x && this.rock2.y == this.bush11.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush11.x && this.rock2.y == this.bush11.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush11.x && this.rock2.y + 123 == this.bush11.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush11.x && this.rock2.y - 123 == this.bush11.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush12IsDestroyed) {
            if (this.rock2.x + 123 == this.bush12.x && this.rock2.y == this.bush12.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush12.x && this.rock2.y == this.bush12.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush12.x && this.rock2.y + 123 == this.bush12.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush12.x && this.rock2.y - 123 == this.bush12.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush13IsDestroyed) {
            if (this.rock2.x + 123 == this.bush13.x && this.rock2.y == this.bush13.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush13.x && this.rock2.y == this.bush13.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush13.x && this.rock2.y + 123 == this.bush13.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush13.x && this.rock2.y - 123 == this.bush13.y) {
                this.rock2GoUp = false;
            }
        }
        if (!this.bush14IsDestroyed) {
            if (this.rock2.x + 123 == this.bush14.x && this.rock2.y == this.bush14.y) {
                this.rock2GoRight = false;
            } else if (this.rock2.x - 123 == this.bush14.x && this.rock2.y == this.bush14.y) {
                this.rock2GoLeft = false;
            } else if (this.rock2.x == this.bush14.x && this.rock2.y + 123 == this.bush14.y) {
                this.rock2GoDown = false;
            } else if (this.rock2.x == this.bush14.x && this.rock2.y - 123 == this.bush14.y) {
                this.rock2GoUp = false;
            }
        }
        if (this.rock2.x + 123 == this.rock.x && this.rock2.y == this.rock.y) {
            this.rock2GoRight = false;
        } else if (this.rock2.x - 123 == this.rock.x && this.rock2.y == this.rock.y) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x == this.rock.x && this.rock2.y + 123 == this.rock.y) {
            this.rock2GoDown = false;
        } else if (this.rock2.x == this.rock.x && this.rock2.y - 123 == this.rock.y) {
            this.rock2GoUp = false;
        }
        if (this.rock2.x + 123 == this.rock3.x && this.rock2.y == this.rock3.y) {
            this.rock2GoRight = false;
        } else if (this.rock2.x - 123 == this.rock3.x && this.rock2.y == this.rock3.y) {
            this.rock2GoLeft = false;
        } else if (this.rock2.x == this.rock3.x && this.rock2.y + 123 == this.rock3.y) {
            this.rock2GoDown = false;
        } else if (this.rock2.x == this.rock3.x && this.rock2.y - 123 == this.rock3.y) {
            this.rock2GoUp = false;
        }
    


        //rock 3
        if (this.rock3.x <= 246 && this.rock3.y >= 492) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x <= 123 && this.rock3.y < 492) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x >= 984) {
            this.rock3GoRight = false;
        }

        if (this.rock3.y + 123 >= 984) {
            this.rock3GoDown = false;
        } else if (this.rock3.y <= 246) {
            this.rock3GoUp = false;
        }

        if (this.rock3.x == 492 && this.rock3.y == 246) {
            this.rock3GoDown = false;
        } else if (this.rock3.x == 369 && this.rock3.y == 369) {
            this.rock3GoRight = false;
        } else if (this.rock3.x == 615 && this.rock3.y == 369) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x == 492 && this.rock3.y == 615) {
            this.rock3GoUp = false;
        } else if (this.rock3.x == 861 && this.rock3.y == 246) {
            this.rock3GoDown = false;
        } else if (this.rock3.x == 738 && this.rock3.y == 369) {
            this.rock3GoRight = false;
        } else if (this.rock3.x == 984 && this.rock3.y == 369) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x == 861 && this.rock3.y == 492) {
            this.rock3GoUp = false;
        } else if (this.rock3.x == 369 && this.rock3.y == 492) {
            this.rock3GoRight = false;
        } else if (this.rock3.x == 615 && this.rock3.y == 492) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x == 492 && this.rock3.y == 615) {
            this.rock3GoUp = false;
        }

        if (!this.bushIsDestroyed) {
            if (this.rock3.x + 123 == this.bush.x && this.rock3.y == this.bush.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush.x && this.rock3.y == this.bush.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush.x && this.rock3.y + 123 == this.bush.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush.x && this.rock3.y - 123 == this.bush.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush2IsDestroyed) {
            if (this.rock3.x + 123 == this.bush2.x && this.rock3.y == this.bush2.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush2.x && this.rock3.y == this.bush2.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush2.x && this.rock3.y + 123 == this.bush2.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush2.x && this.rock3.y - 123 == this.bush2.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush3IsDestroyed) {
            if (this.rock3.x + 123 == this.bush3.x && this.rock3.y == this.bush3.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush3.x && this.rock3.y == this.bush3.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush3.x && this.rock3.y + 123 == this.bush3.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush3.x && this.rock3.y - 123 == this.bush3.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush4IsDestroyed) {
            if (this.rock3.x + 123 == this.bush4.x && this.rock3.y == this.bush4.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush4.x && this.rock3.y == this.bush4.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush4.x && this.rock3.y + 123 == this.bush4.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush4.x && this.rock3.y - 123 == this.bush4.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush5IsDestroyed) {
            if (this.rock3.x + 123 == this.bush5.x && this.rock3.y == this.bush5.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush5.x && this.rock3.y == this.bush5.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush5.x && this.rock3.y + 123 == this.bush5.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush5.x && this.rock3.y - 123 == this.bush5.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush6IsDestroyed) {
            if (this.rock3.x + 123 == this.bush6.x && this.rock3.y == this.bush6.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush6.x && this.rock3.y == this.bush6.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush6.x && this.rock3.y + 123 == this.bush6.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush6.x && this.rock3.y - 123 == this.bush6.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush7IsDestroyed) {
            if (this.rock3.x + 123 == this.bush7.x && this.rock3.y == this.bush7.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush7.x && this.rock3.y == this.bush7.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush7.x && this.rock3.y + 123 == this.bush7.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush7.x && this.rock3.y - 123 == this.bush7.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush8IsDestroyed) {
            if (this.rock3.x + 123 == this.bush8.x && this.rock3.y == this.bush8.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush8.x && this.rock3.y == this.bush8.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush8.x && this.rock3.y + 123 == this.bush8.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush8.x && this.rock3.y - 123 == this.bush8.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush9IsDestroyed) {
            if (this.rock3.x + 123 == this.bush9.x && this.rock3.y == this.bush9.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush9.x && this.rock3.y == this.bush9.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush9.x && this.rock3.y + 123 == this.bush9.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush9.x && this.rock3.y - 123 == this.bush9.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush10IsDestroyed) {
            if (this.rock3.x + 123 == this.bush10.x && this.rock3.y == this.bush10.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush10.x && this.rock3.y == this.bush10.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush10.x && this.rock3.y + 123 == this.bush10.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush10.x && this.rock3.y - 123 == this.bush10.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush11IsDestroyed) {
            if (this.rock3.x + 123 == this.bush11.x && this.rock3.y == this.bush11.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush11.x && this.rock3.y == this.bush11.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush11.x && this.rock3.y + 123 == this.bush11.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush11.x && this.rock3.y - 123 == this.bush11.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush12IsDestroyed) {
            if (this.rock3.x + 123 == this.bush12.x && this.rock3.y == this.bush12.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush12.x && this.rock3.y == this.bush12.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush12.x && this.rock3.y + 123 == this.bush12.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush12.x && this.rock3.y - 123 == this.bush12.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush13IsDestroyed) {
            if (this.rock3.x + 123 == this.bush13.x && this.rock3.y == this.bush13.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush13.x && this.rock3.y == this.bush13.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush13.x && this.rock3.y + 123 == this.bush13.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush13.x && this.rock3.y - 123 == this.bush13.y) {
                this.rock3GoUp = false;
            }
        }
        if (!this.bush14IsDestroyed) {
            if (this.rock3.x + 123 == this.bush14.x && this.rock3.y == this.bush14.y) {
                this.rock3GoRight = false;
            } else if (this.rock3.x - 123 == this.bush14.x && this.rock3.y == this.bush14.y) {
                this.rock3GoLeft = false;
            } else if (this.rock3.x == this.bush14.x && this.rock3.y + 123 == this.bush14.y) {
                this.rock3GoDown = false;
            } else if (this.rock3.x == this.bush14.x && this.rock3.y - 123 == this.bush14.y) {
                this.rock3GoUp = false;
            }
        }
        if (this.rock3.x + 123 == this.rock.x && this.rock3.y == this.rock.y) {
            this.rock3GoRight = false;
        } else if (this.rock3.x - 123 == this.rock.x && this.rock3.y == this.rock.y) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x == this.rock.x && this.rock3.y + 123 == this.rock.y) {
            this.rock3GoDown = false;
        } else if (this.rock3.x == this.rock.x && this.rock3.y - 123 == this.rock.y) {
            this.rock3GoUp = false;
        }
        if (this.rock3.x + 123 == this.rock2.x && this.rock3.y == this.rock2.y) {
            this.rock3GoRight = false;
        } else if (this.rock3.x - 123 == this.rock2.x && this.rock3.y == this.rock2.y) {
            this.rock3GoLeft = false;
        } else if (this.rock3.x == this.rock2.x && this.rock3.y + 123 == this.rock2.y) {
            this.rock3GoDown = false;
        } else if (this.rock3.x == this.rock2.x && this.rock3.y - 123 == this.rock2.y) {
            this.rock3GoUp = false;
        }
          
    }

    winConditionManager() {
        if (this.oneCorrect && this.twoCorrect && this.threeCorrect) {
            this.scene.start("level2");
        }
    }

    loseConditionManager() {
        if (this.bushCount > 4) {
            this.scene.restart();
        }
    }

    rockPosManager() {
        if ((this.rock.x == 369 && this.rock.y == 369) || (this.rock2.x == 369 && this.rock2.y == 369) ||
            this.rock3.x == 369 && this.rock3.y == 369) {
            this.oneCorrect = true;
        }

        if ((this.rock.x == 984 && this.rock.y == 246) || (this.rock2.x == 984 && this.rock2.y == 246) ||
            this.rock3.x == 984 && this.rock3.y == 246) {
            this.twoCorrect = true;
        }

        if ((this.rock.x == 984 && this.rock.y == 861) || (this.rock2.x == 984 && this.rock2.y == 861) ||
            this.rock3.x == 984 && this.rock3.y == 861) {
            this.threeCorrect = true;
        }
    }

    update() {
        this.moveTargetManager();
        this.movePlayerManager();
        this.moveRockManager();

        this.winConditionManager();
        this.loseConditionManager();

        this.rockPosManager();
    }

}
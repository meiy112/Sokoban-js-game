class Scene2Copy extends Phaser.Scene {

    constructor() {
        super("level1copy");
    }

    create() {
        const map = this.make.tilemap({ key: "map1" });
        const tileset = map.addTilesetImage("douya", "tiles");
        const backgroundLayer = map.createLayer("background", tileset, 0, 0);
        const borderLayer = map.createLayer("border", tileset, 0, 0);

        this.douya = this.physics.add.sprite(123, 492, "idle_left");
        this.physics.add.existing(this.douya).setDepth(1);
        this.douya.play("idle_left_anim");
        this.douya.setOrigin(0, 0);
        this.douya.setInteractive();

        // this.keys = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });

        this.input.on('gameobjectdown', this.makeHappy, this);
        this.input.on('gameobjectdown', this.action, this);
        this.bushCount = 0;

        this.isHappy = false;
        this.oneCorrect = false;

        this.bushIsDestroyed = false;
        this.bush2IsDestroyed = false;
        this.bush3IsDestroyed = false;
        this.bush4IsDestroyed = false;

        this.douyaGoDown = false;
        this.douyaGoUp = false;
        this.douyaGoLeft = false;
        this.douyaGoRight = false;

        this.rockGoDown = false;
        this.rockGoUp = false;
        this.rockGoLeft = false;
        this.rockGoRight = false;

        this.bush = this.physics.add.sprite(615, 492, "bush_object").setDepth(1);
        this.bush.setOrigin(0);
        this.bush.body.immovable = true;
        this.bush.setInteractive();

        this.bush2 = this.physics.add.sprite(738, 369, "bush_object").setDepth(1);
        this.bush2.setOrigin(0);
        this.bush2.body.immovable = true;
        this.bush2.setInteractive();

        this.bush3 = this.physics.add.sprite(738, 615, "bush_object").setDepth(1);
        this.bush3.setOrigin(0);
        this.bush3.body.immovable = true;
        this.bush3.setInteractive();

        this.bush4 = this.physics.add.sprite(861, 492, "bush_object").setDepth(1);
        this.bush4.setOrigin(0);
        this.bush4.body.immovable = true;
        this.bush4.setInteractive();

        this.rock = this.physics.add.sprite(246, 492, "rock_object").setDepth(1);
        this.rock.setOrigin(0);
        this.rock.body.immovable = true;
        this.rock.setInteractive();

        this.target = this.physics.add.sprite(this.douya.x, this.douya.y, "target").setDepth(1);
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
            } else if (gameObject.x == this.rock.x && gameObject.y == this.rock.y) {
                if (this.rockGoUp) {
                    this.rock.setY(this.rock.y - 123);
                } else if (this.rockGoDown) {
                    this.rock.setY(this.rock.y + 123);
                } else if (this.rockGoLeft) {
                    this.rock.setX(this.rock.x - 123);
                } else if (this.rockGoRight) {
                    this.rock.setX(this.rock.x + 123);
                }
            } else if (gameObject.x == this.bush.x && gameObject.y == this.bush.y) {
                this.bush.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.physics.add.sprite(this.bush.x, this.bush.y, "burnt_bush").setDepth(0).setOrigin(0, 0);
                    this.bush.destroy();
                    this.bushIsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (gameObject.x == this.bush2.x && gameObject.y == this.bush2.y) {
                this.bush2.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.physics.add.sprite(this.bush2.x, this.bush2.y, "burnt_bush").setDepth(0).setOrigin(0, 0);
                    this.bush2.destroy();
                    this.bush2IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (gameObject.x == this.bush3.x && gameObject.y == this.bush3.y) {
                this.bush3.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.physics.add.sprite(this.bush3.x, this.bush3.y, "burnt_bush").setDepth(0).setOrigin(0, 0);
                    this.bush3.destroy();
                    this.bush3IsDestroyed = true;
                    this.bushCount++;
                }, [], this);
            } else if (gameObject.x == this.bush4.x && gameObject.y == this.bush4.y) {
                this.bush4.play("cut_anim");
                this.time.delayedCall(1000, function () {
                    this.physics.add.sprite(this.bush4.x, this.bush4.y, "burnt_bush").setDepth(0).setOrigin(0, 0);
                    this.bush4.destroy();
                    this.bush4IsDestroyed = true;
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

        if (this.douya.x + 123 == this.rock.x && this.douya.y == this.rock.y) {
            this.douyaGoRight = false;
        } else if (this.douya.x - 123 == this.rock.x && this.douya.y == this.rock.y) {
            this.douyaGoLeft = false;
        } else if (this.douya.x == this.rock.x && this.douya.y + 123 == this.rock.y) {
            this.douyaGoDown = false;
        } else if (this.douya.x == this.rock.x && this.douya.y - 123 == this.rock.y) {
            this.douyaGoUp = false;
        }

        if (this.douya.x == 615 && this.douya.y == 246) {
            this.douyaGoDown = false;
        } else if (this.douya.x == 861 && this.douya.y == 246) {
            this.douyaGoDown = false;
        }else if (this.douya.x == 492 && this.douya.y == 369) {
            this.douyaGoRight = false;
        } else if (this.douya.x == 738 && this.douya.y == 369) {
            this.douyaGoRight = false;
            this.douyaGoLeft = false;
        } else if (this.douya.x == 984 && this.douya.y == 369) {
            this.douyaGoLeft = false;
        } else if (this.douya.x == 615 && this.douya.y == 492) {
            this.douyaGoUp = false;
            this.douyaGoDown = false;
        } else if (this.douya.x == 861 && this.douya.y == 492) {
            this.douyaGoUp = false;
            this.douyaGoDown = false;
        } else if (this.douya.x == 492 && this.douya.y == 615) {
            this.douyaGoRight = false;
        } else if (this.douya.x == 738 && this.douya.y == 615) {
            this.douyaGoRight = false;
            this.douyaGoLeft = false;
        } else if (this.douya.x == 984 && this.douya.y == 615) {
            this.douyaGoLeft = false;
        } else if (this.douya.x == 615 && this.douya.y == 738) {
            this.douyaGoUp = false;
        } else if (this.douya.x == 861 && this.douya.y == 738) {
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
        }
    }

    moveRockManager() {
        if (this.rock.x <= 123) {
            this.rockGoLeft = false;
        } else if (this.rock.x >= 1107) {
            this.rockGoRight = false;
        }

        if (this.rock.y >= 861) {
            this.rockGoDown = false;
        } else if (this.rock.y <= 123) {
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

    }

    winConditionManager() {
        if (this.oneCorrect) {
            this.scene.start("level3");
        }
    }

    loseConditionManager() {
        if (this.bushCount > 1) {
            this.scene.restart();
        }
    }

    rockPosManager() {
        if (this.rock.x == 738 && this.rock.y == 492) {
            this.oneCorrect = true;
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
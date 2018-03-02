export default function gameOverState() {
    //Private variables
    var game; //keeps a reference to the game object

    var tryagainText;
    var restartDelay = 0;
    var otherPlayerAware = false;
    var winnerIcon;

    return {
        create: function () {
            if (winner == "Ghost") {//winner is a global variable
                winnerIcon = game.add.sprite(0, 0, "ghost_winner");
            } else {
                winnerIcon = game.add.sprite(0, 0, "thief_winner");
            }
            winnerIcon.x = game.world.centerX;
            winnerIcon.y = game.world.centerY - 50;
            winnerIcon.anchor.setTo(0.5, 0.5)

            var style2 = { font: "20px patagoniaregular", fill: "#ffffff", align: "center" };
            tryagainText = game.add.text(game.world.centerX, game.world.centerY - 50, "Tap or press any key to play again", style2);
            tryagainText.x = game.world.centerX - tryagainText.width / 2;
            tryagainText.y = game.world.centerY + 150;

            var style = { font: "15px Arial", fill: numberColor, align: "center" };
            creditText = game.add.text(game.world.centerX, game.world.centerY - 50, "Created by Omar Shehata (@Omar4ur) & tak (@takorii)", style);
            creditText.x = game.world.centerX - creditText.width / 2;
            creditText.y = game.world.centerY + 200;

            game.input.keyboard.addCallbacks(this, null, null, gameover_anyKey);

            restartDelay = 1;

            otherPlayerAware = false;
        },
        update: function () {
            for (var i = messageQ.length - 1; i >= 0; i--) {//Listen for messages from the other player
                var message = messageQ[i];
                if (message.meta == "restart") {//If the other player pressed anything to restart, we should restart too!
                    game.state.start("Gameplay")
                }
                if (message.isAware) {//If the other player is already on their death screen, we don't need to keep telling them
                    otherPlayerAware = true;
                }
            }
            if (game.input.pointer1.active || game.input.mousePointer.isDown) {
                gameover_restart();
            }

            //Send winner info to other player until we hear back from them
            if (!otherPlayerAware) {
                if (ConnObject) ConnObject.send({ meta: 'win', isWin: true, winner: winner })
            }

            //Tell other player we know we're in the death screen
            if (ConnObject) ConnObject.send({ isAware: true })
        },
        shutdown: function () {
            tryagainText.destroy();
            game.input.keyboard.addCallbacks(this, null, null, null);
            messageQ = []

            winnerIcon.destroy()
            creditText.destroy()
        },

        gameover_anyKey: function () {//restart if any key is pressed
            if (restartDelay == 1) {
                restartDelay = 0;
                this.gameover_restart();
            }
        },
        gameover_restart: function () {
            //Tell other to start
            if (ConnObject) ConnObject.send({ meta: "restart" })
            game.state.start("Gameplay");
        }
    }
}

export default function playState() {
    var game; //keeps a reference to the game object

    var roomArray = []//An array of all the floating room pieces
    var gameScale = 0.5;//An easy way to scale up and down the game
    var worldMoveSpeed = -1;//How fast the level moves
    var decorationOffset = {}//This holds the values for how much to offset the decorations when displaying them
    decorationOffset['Attic_deco_7'] = -50;
    decorationOffset['Middle_deco_3'] = -50;
    decorationOffset['Middle_deco_11'] = -50;
    decorationOffset['Middle_deco_10'] = -50;
    decorationOffset['Middle_deco_9'] = -50;
    decorationOffset['Middle_deco_8'] = -50;
    decorationOffset['Middle_deco_2'] = -20;
    decorationOffset['Middle_deco_5'] = -20;
    decorationOffset['Basement_deco_3'] = -20;

    var player;
    var ghost;
    var lanternIcon;
    var lanternStatus;
    //Level definitions
    var roomWidth = 220;
    var roomHeight = 200;

    var levelHeights = []//the heights at which to place the rooms
    levelHeights[0] = 200;
    levelHeights[1] = roomHeight + levelHeights[0] + 20;
    levelHeights[2] = roomHeight * 2 + levelHeights[0] + 20 * 2;
    levelHeights[3] = roomHeight * 3 + levelHeights[0] + 20 * 3;

    var dropArray = []//An array of the objects that the ghost drops

    //Variables for the initial countdown
    var blackness;
    var readyCounter = 60 * 3;
    var creditText;
    var iSPY;
    var iTitle;
    var countdownGraphic;
    return {

    }
}
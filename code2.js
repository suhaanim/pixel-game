gdjs.End_32SceneCode = {};
gdjs.End_32SceneCode.localVariables = [];
gdjs.End_32SceneCode.idToCallbackMap = new Map();
gdjs.End_32SceneCode.GDEndBackgroundObjects1= [];
gdjs.End_32SceneCode.GDEndBackgroundObjects2= [];
gdjs.End_32SceneCode.GDEndBackgroundObjects3= [];
gdjs.End_32SceneCode.GDEndMessageObjects1= [];
gdjs.End_32SceneCode.GDEndMessageObjects2= [];
gdjs.End_32SceneCode.GDEndMessageObjects3= [];
gdjs.End_32SceneCode.GDPlayAgainButtonObjects1= [];
gdjs.End_32SceneCode.GDPlayAgainButtonObjects2= [];
gdjs.End_32SceneCode.GDPlayAgainButtonObjects3= [];


gdjs.End_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.End_32SceneCode.GDEndMessageObjects1, gdjs.End_32SceneCode.GDEndMessageObjects2);

{for(var i = 0, len = gdjs.End_32SceneCode.GDEndMessageObjects2.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDEndMessageObjects2[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 > 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.End_32SceneCode.GDEndMessageObjects1, gdjs.End_32SceneCode.GDEndMessageObjects2);

{for(var i = 0, len = gdjs.End_32SceneCode.GDEndMessageObjects2.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDEndMessageObjects2[i].getBehavior("Text").setText("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (0 >= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.End_32SceneCode.GDEndMessageObjects1 */
{for(var i = 0, len = gdjs.End_32SceneCode.GDEndMessageObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDEndMessageObjects1[i].getBehavior("Text").setText("");
}
}
}

}


};gdjs.End_32SceneCode.mapOfGDgdjs_9546End_959532SceneCode_9546GDPlayAgainButtonObjects1Objects = Hashtable.newFrom({"PlayAgainButton": gdjs.End_32SceneCode.GDPlayAgainButtonObjects1});
gdjs.End_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.End_32SceneCode.GDPlayAgainButtonObjects1 */
{for(var i = 0, len = gdjs.End_32SceneCode.GDPlayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDPlayAgainButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("ScaleDown", 1, "easeOutQuad", 0.1, false, true);
}
}
}

}


};gdjs.End_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10673260);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EndMessage"), gdjs.End_32SceneCode.GDEndMessageObjects1);
{for(var i = 0, len = gdjs.End_32SceneCode.GDEndMessageObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDEndMessageObjects1[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.End_32SceneCode.GDEndMessageObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDEndMessageObjects1[i].setTextAlignment("center");
}
}

{ //Subevents
gdjs.End_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgainButton"), gdjs.End_32SceneCode.GDPlayAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.End_32SceneCode.mapOfGDgdjs_9546End_959532SceneCode_9546GDPlayAgainButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.End_32SceneCode.GDPlayAgainButtonObjects1 */
{for(var i = 0, len = gdjs.End_32SceneCode.GDPlayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDPlayAgainButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("ScaleUp", 1.1, "easeOutQuad", 0.1, false, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "chime.wav", false, 100, 1);
}

{ //Subevents
gdjs.End_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgainButton"), gdjs.End_32SceneCode.GDPlayAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.End_32SceneCode.GDPlayAgainButtonObjects1.length;i<l;++i) {
    if ( gdjs.End_32SceneCode.GDPlayAgainButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.End_32SceneCode.GDPlayAgainButtonObjects1[k] = gdjs.End_32SceneCode.GDPlayAgainButtonObjects1[i];
        ++k;
    }
}
gdjs.End_32SceneCode.GDPlayAgainButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "chime.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opening Scene", false);
}
}

}


};

gdjs.End_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32SceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.End_32SceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.End_32SceneCode.GDEndBackgroundObjects3.length = 0;
gdjs.End_32SceneCode.GDEndMessageObjects1.length = 0;
gdjs.End_32SceneCode.GDEndMessageObjects2.length = 0;
gdjs.End_32SceneCode.GDEndMessageObjects3.length = 0;
gdjs.End_32SceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.End_32SceneCode.GDPlayAgainButtonObjects2.length = 0;
gdjs.End_32SceneCode.GDPlayAgainButtonObjects3.length = 0;

gdjs.End_32SceneCode.eventsList2(runtimeScene);
gdjs.End_32SceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.End_32SceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.End_32SceneCode.GDEndBackgroundObjects3.length = 0;
gdjs.End_32SceneCode.GDEndMessageObjects1.length = 0;
gdjs.End_32SceneCode.GDEndMessageObjects2.length = 0;
gdjs.End_32SceneCode.GDEndMessageObjects3.length = 0;
gdjs.End_32SceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.End_32SceneCode.GDPlayAgainButtonObjects2.length = 0;
gdjs.End_32SceneCode.GDPlayAgainButtonObjects3.length = 0;


return;

}

gdjs['End_32SceneCode'] = gdjs.End_32SceneCode;

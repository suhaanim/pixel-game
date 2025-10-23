gdjs.Opening_32SceneCode = {};
gdjs.Opening_32SceneCode.localVariables = [];
gdjs.Opening_32SceneCode.idToCallbackMap = new Map();
gdjs.Opening_32SceneCode.GDBackground_9595OpeningObjects1= [];
gdjs.Opening_32SceneCode.GDBackground_9595OpeningObjects2= [];
gdjs.Opening_32SceneCode.GDSuhaani_9595CharacterObjects1= [];
gdjs.Opening_32SceneCode.GDSuhaani_9595CharacterObjects2= [];
gdjs.Opening_32SceneCode.GDSignpostObjects1= [];
gdjs.Opening_32SceneCode.GDSignpostObjects2= [];
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1= [];
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects2= [];


gdjs.Opening_32SceneCode.mapOfGDgdjs_9546Opening_959532SceneCode_9546GDStart_95959595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1});
gdjs.Opening_32SceneCode.mapOfGDgdjs_9546Opening_959532SceneCode_9546GDStart_95959595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1});
gdjs.Opening_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Opening_32SceneCode.mapOfGDgdjs_9546Opening_959532SceneCode_9546GDStart_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10647500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("ScaleUp", 1.1, "easeOutQuad", 0.1, false, true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "chime.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Opening_32SceneCode.mapOfGDgdjs_9546Opening_959532SceneCode_9546GDStart_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = !isConditionTrue_1;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1 */
{for(var i = 0, len = gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1[i].getBehavior("Tween").stopTween("ScaleUp", false);
}
}
{for(var i = 0, len = gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1[i].getBehavior("Tween").addObjectScaleTween3("ScaleDown", 1, "easeOutQuad", 0.1, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start_Button"), gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1[k] = gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.Opening_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Opening_32SceneCode.GDBackground_9595OpeningObjects1.length = 0;
gdjs.Opening_32SceneCode.GDBackground_9595OpeningObjects2.length = 0;
gdjs.Opening_32SceneCode.GDSuhaani_9595CharacterObjects1.length = 0;
gdjs.Opening_32SceneCode.GDSuhaani_9595CharacterObjects2.length = 0;
gdjs.Opening_32SceneCode.GDSignpostObjects1.length = 0;
gdjs.Opening_32SceneCode.GDSignpostObjects2.length = 0;
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length = 0;
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects2.length = 0;

gdjs.Opening_32SceneCode.eventsList0(runtimeScene);
gdjs.Opening_32SceneCode.GDBackground_9595OpeningObjects1.length = 0;
gdjs.Opening_32SceneCode.GDBackground_9595OpeningObjects2.length = 0;
gdjs.Opening_32SceneCode.GDSuhaani_9595CharacterObjects1.length = 0;
gdjs.Opening_32SceneCode.GDSuhaani_9595CharacterObjects2.length = 0;
gdjs.Opening_32SceneCode.GDSignpostObjects1.length = 0;
gdjs.Opening_32SceneCode.GDSignpostObjects2.length = 0;
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects1.length = 0;
gdjs.Opening_32SceneCode.GDStart_9595ButtonObjects2.length = 0;


return;

}

gdjs['Opening_32SceneCode'] = gdjs.Opening_32SceneCode;

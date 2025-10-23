gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects3= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDBorderObjects1= [];
gdjs.Game_32SceneCode.GDBorderObjects2= [];
gdjs.Game_32SceneCode.GDBorderObjects3= [];
gdjs.Game_32SceneCode.GDSpikesObjects1= [];
gdjs.Game_32SceneCode.GDSpikesObjects2= [];
gdjs.Game_32SceneCode.GDSpikesObjects3= [];
gdjs.Game_32SceneCode.GDSpawnObjects1= [];
gdjs.Game_32SceneCode.GDSpawnObjects2= [];
gdjs.Game_32SceneCode.GDSpawnObjects3= [];
gdjs.Game_32SceneCode.GDGameBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDGameBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDGameBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDAdmitBasketObjects1= [];
gdjs.Game_32SceneCode.GDAdmitBasketObjects2= [];
gdjs.Game_32SceneCode.GDAdmitBasketObjects3= [];
gdjs.Game_32SceneCode.GDWaitlistBasketObjects1= [];
gdjs.Game_32SceneCode.GDWaitlistBasketObjects2= [];
gdjs.Game_32SceneCode.GDWaitlistBasketObjects3= [];
gdjs.Game_32SceneCode.GDRejectBasketObjects1= [];
gdjs.Game_32SceneCode.GDRejectBasketObjects2= [];
gdjs.Game_32SceneCode.GDRejectBasketObjects3= [];
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1= [];
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects2= [];
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects3= [];
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1= [];
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects2= [];
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects3= [];
gdjs.Game_32SceneCode.GDScoreTextRejectObjects1= [];
gdjs.Game_32SceneCode.GDScoreTextRejectObjects2= [];
gdjs.Game_32SceneCode.GDScoreTextRejectObjects3= [];
gdjs.Game_32SceneCode.GDSparkObjects1= [];
gdjs.Game_32SceneCode.GDSparkObjects2= [];
gdjs.Game_32SceneCode.GDSparkObjects3= [];
gdjs.Game_32SceneCode.GDTrait1Objects1= [];
gdjs.Game_32SceneCode.GDTrait1Objects2= [];
gdjs.Game_32SceneCode.GDTrait1Objects3= [];
gdjs.Game_32SceneCode.GDTrait2Objects1= [];
gdjs.Game_32SceneCode.GDTrait2Objects2= [];
gdjs.Game_32SceneCode.GDTrait2Objects3= [];
gdjs.Game_32SceneCode.GDTrait3Objects1= [];
gdjs.Game_32SceneCode.GDTrait3Objects2= [];
gdjs.Game_32SceneCode.GDTrait3Objects3= [];
gdjs.Game_32SceneCode.GDTrait4Objects1= [];
gdjs.Game_32SceneCode.GDTrait4Objects2= [];
gdjs.Game_32SceneCode.GDTrait4Objects3= [];
gdjs.Game_32SceneCode.GDTrait5Objects1= [];
gdjs.Game_32SceneCode.GDTrait5Objects2= [];
gdjs.Game_32SceneCode.GDTrait5Objects3= [];
gdjs.Game_32SceneCode.GDTrait6Objects1= [];
gdjs.Game_32SceneCode.GDTrait6Objects2= [];
gdjs.Game_32SceneCode.GDTrait6Objects3= [];
gdjs.Game_32SceneCode.GDTrait7Objects1= [];
gdjs.Game_32SceneCode.GDTrait7Objects2= [];
gdjs.Game_32SceneCode.GDTrait7Objects3= [];
gdjs.Game_32SceneCode.GDTrait8Objects1= [];
gdjs.Game_32SceneCode.GDTrait8Objects2= [];
gdjs.Game_32SceneCode.GDTrait8Objects3= [];
gdjs.Game_32SceneCode.GDTrait9Objects1= [];
gdjs.Game_32SceneCode.GDTrait9Objects2= [];
gdjs.Game_32SceneCode.GDTrait9Objects3= [];
gdjs.Game_32SceneCode.GDTrait10Objects1= [];
gdjs.Game_32SceneCode.GDTrait10Objects2= [];
gdjs.Game_32SceneCode.GDTrait10Objects3= [];
gdjs.Game_32SceneCode.GDTraitObjects1= [];
gdjs.Game_32SceneCode.GDTraitObjects2= [];
gdjs.Game_32SceneCode.GDTraitObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDAdmitBasketObjects1Objects = Hashtable.newFrom({"AdmitBasket": gdjs.Game_32SceneCode.GDAdmitBasketObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects2Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects2});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDTraitObjects1, gdjs.Game_32SceneCode.GDTraitObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects2Objects, 333, -(61), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Resizable").setWidth(323);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Resizable").setHeight(309);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 9);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(10);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWaitlistBasketObjects1Objects = Hashtable.newFrom({"WaitlistBasket": gdjs.Game_32SceneCode.GDWaitlistBasketObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects2Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects2});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDTraitObjects1, gdjs.Game_32SceneCode.GDTraitObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects2Objects, 333, -(61), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Resizable").setWidth(323);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Resizable").setHeight(309);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 9);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(10);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRejectBasketObjects1Objects = Hashtable.newFrom({"RejectBasket": gdjs.Game_32SceneCode.GDRejectBasketObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects2Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects2});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDTraitObjects1, gdjs.Game_32SceneCode.GDTraitObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects2Objects, 333, -(61), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Resizable").setWidth(323);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Resizable").setHeight(309);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() == 9);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(10);
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects = Hashtable.newFrom({"Trait": gdjs.Game_32SceneCode.GDTraitObjects1});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spawn"), gdjs.Game_32SceneCode.GDSpawnObjects1);
/* Reuse gdjs.Game_32SceneCode.GDTraitObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects, (( gdjs.Game_32SceneCode.GDSpawnObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDSpawnObjects1[0].getPointX("")), (( gdjs.Game_32SceneCode.GDSpawnObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDSpawnObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].getBehavior("Resizable").setWidth(323);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].getBehavior("Resizable").setHeight(309);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].setAnimation(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}
}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "AdmitEndScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "RejectEndScene", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WaitlistEndScene", false);
}
}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trait1"), gdjs.Game_32SceneCode.GDTrait1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait10"), gdjs.Game_32SceneCode.GDTrait10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait2"), gdjs.Game_32SceneCode.GDTrait2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait3"), gdjs.Game_32SceneCode.GDTrait3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait4"), gdjs.Game_32SceneCode.GDTrait4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait5"), gdjs.Game_32SceneCode.GDTrait5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait6"), gdjs.Game_32SceneCode.GDTrait6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait7"), gdjs.Game_32SceneCode.GDTrait7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait8"), gdjs.Game_32SceneCode.GDTrait8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Trait9"), gdjs.Game_32SceneCode.GDTrait9Objects1);
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait1Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait1Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait1Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait1Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait2Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait2Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait3Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait3Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait3Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait4Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait4Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait4Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait5Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait5Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait5Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait5Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait6Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait6Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait6Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait6Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait7Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait7Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait7Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait7Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait8Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait8Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait8Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait8Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait9Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait9Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait9Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait9Objects1[i].hide(false);
}
}
{}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait10Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait10Objects1[i].setPosition(gdjs.randomInRange(100, 1180),0);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTrait10Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTrait10Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTextAdmit"), gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextReject"), gdjs.Game_32SceneCode.GDScoreTextRejectObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreTextWaitlist"), gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trait"), gdjs.Game_32SceneCode.GDTraitObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects, 333, -(61), "");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].getBehavior("Resizable").setSize(323, 309);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1[i].getBehavior("Text").setText("Admit: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1[i].getBehavior("Text").setText("Waitlist: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextRejectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextRejectObjects1[i].getBehavior("Text").setText("Reject: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdmitBasket"), gdjs.Game_32SceneCode.GDAdmitBasketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trait"), gdjs.Game_32SceneCode.GDTraitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDAdmitBasketObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTextAdmit"), gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1);
/* Reuse gdjs.Game_32SceneCode.GDTraitObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(8).add(1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1[i].getBehavior("Text").setText("Admit: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trait"), gdjs.Game_32SceneCode.GDTraitObjects1);
gdjs.copyArray(runtimeScene.getObjects("WaitlistBasket"), gdjs.Game_32SceneCode.GDWaitlistBasketObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWaitlistBasketObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTextWaitlist"), gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1);
/* Reuse gdjs.Game_32SceneCode.GDTraitObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1[i].getBehavior("Text").setText("Waitlist: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RejectBasket"), gdjs.Game_32SceneCode.GDRejectBasketObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trait"), gdjs.Game_32SceneCode.GDTraitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTraitObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRejectBasketObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreTextReject"), gdjs.Game_32SceneCode.GDScoreTextRejectObjects1);
/* Reuse gdjs.Game_32SceneCode.GDTraitObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).add(1);
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreTextRejectObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreTextRejectObjects1[i].getBehavior("Text").setText("Reject: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Trait"), gdjs.Game_32SceneCode.GDTraitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDTraitObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDTraitObjects1[i].getY() > 720 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDTraitObjects1[k] = gdjs.Game_32SceneCode.GDTraitObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDTraitObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDTraitObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}

{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Trait"), gdjs.Game_32SceneCode.GDTraitObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTraitObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTraitObjects1[i].addForce(0, 80, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EndGameTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EndGameTimer") >= 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDBorderObjects1.length = 0;
gdjs.Game_32SceneCode.GDBorderObjects2.length = 0;
gdjs.Game_32SceneCode.GDBorderObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpawnObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpawnObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpawnObjects3.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDAdmitBasketObjects1.length = 0;
gdjs.Game_32SceneCode.GDAdmitBasketObjects2.length = 0;
gdjs.Game_32SceneCode.GDAdmitBasketObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaitlistBasketObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaitlistBasketObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaitlistBasketObjects3.length = 0;
gdjs.Game_32SceneCode.GDRejectBasketObjects1.length = 0;
gdjs.Game_32SceneCode.GDRejectBasketObjects2.length = 0;
gdjs.Game_32SceneCode.GDRejectBasketObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextRejectObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextRejectObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextRejectObjects3.length = 0;
gdjs.Game_32SceneCode.GDSparkObjects1.length = 0;
gdjs.Game_32SceneCode.GDSparkObjects2.length = 0;
gdjs.Game_32SceneCode.GDSparkObjects3.length = 0;
gdjs.Game_32SceneCode.GDTrait1Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait1Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait1Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait2Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait2Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait2Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait3Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait3Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait3Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait4Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait4Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait4Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait5Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait5Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait5Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait6Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait6Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait6Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait7Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait7Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait7Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait8Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait8Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait8Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait9Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait9Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait9Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait10Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait10Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait10Objects3.length = 0;
gdjs.Game_32SceneCode.GDTraitObjects1.length = 0;
gdjs.Game_32SceneCode.GDTraitObjects2.length = 0;
gdjs.Game_32SceneCode.GDTraitObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList5(runtimeScene);
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDBorderObjects1.length = 0;
gdjs.Game_32SceneCode.GDBorderObjects2.length = 0;
gdjs.Game_32SceneCode.GDBorderObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpawnObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpawnObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpawnObjects3.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGameBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDAdmitBasketObjects1.length = 0;
gdjs.Game_32SceneCode.GDAdmitBasketObjects2.length = 0;
gdjs.Game_32SceneCode.GDAdmitBasketObjects3.length = 0;
gdjs.Game_32SceneCode.GDWaitlistBasketObjects1.length = 0;
gdjs.Game_32SceneCode.GDWaitlistBasketObjects2.length = 0;
gdjs.Game_32SceneCode.GDWaitlistBasketObjects3.length = 0;
gdjs.Game_32SceneCode.GDRejectBasketObjects1.length = 0;
gdjs.Game_32SceneCode.GDRejectBasketObjects2.length = 0;
gdjs.Game_32SceneCode.GDRejectBasketObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextAdmitObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextWaitlistObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreTextRejectObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreTextRejectObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreTextRejectObjects3.length = 0;
gdjs.Game_32SceneCode.GDSparkObjects1.length = 0;
gdjs.Game_32SceneCode.GDSparkObjects2.length = 0;
gdjs.Game_32SceneCode.GDSparkObjects3.length = 0;
gdjs.Game_32SceneCode.GDTrait1Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait1Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait1Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait2Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait2Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait2Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait3Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait3Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait3Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait4Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait4Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait4Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait5Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait5Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait5Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait6Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait6Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait6Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait7Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait7Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait7Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait8Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait8Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait8Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait9Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait9Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait9Objects3.length = 0;
gdjs.Game_32SceneCode.GDTrait10Objects1.length = 0;
gdjs.Game_32SceneCode.GDTrait10Objects2.length = 0;
gdjs.Game_32SceneCode.GDTrait10Objects3.length = 0;
gdjs.Game_32SceneCode.GDTraitObjects1.length = 0;
gdjs.Game_32SceneCode.GDTraitObjects2.length = 0;
gdjs.Game_32SceneCode.GDTraitObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;

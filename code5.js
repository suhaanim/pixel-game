gdjs.RejectEndSceneCode = {};
gdjs.RejectEndSceneCode.localVariables = [];
gdjs.RejectEndSceneCode.idToCallbackMap = new Map();
gdjs.RejectEndSceneCode.GDEndBackgroundObjects1= [];
gdjs.RejectEndSceneCode.GDEndBackgroundObjects2= [];
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1= [];
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects2= [];


gdjs.RejectEndSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgainButton"), gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1.length;i<l;++i) {
    if ( gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1[k] = gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1[i];
        ++k;
    }
}
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opening Scene", false);
}
}

}


};

gdjs.RejectEndSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RejectEndSceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.RejectEndSceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects2.length = 0;

gdjs.RejectEndSceneCode.eventsList0(runtimeScene);
gdjs.RejectEndSceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.RejectEndSceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.RejectEndSceneCode.GDPlayAgainButtonObjects2.length = 0;


return;

}

gdjs['RejectEndSceneCode'] = gdjs.RejectEndSceneCode;

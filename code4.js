gdjs.WaitlistEndSceneCode = {};
gdjs.WaitlistEndSceneCode.localVariables = [];
gdjs.WaitlistEndSceneCode.idToCallbackMap = new Map();
gdjs.WaitlistEndSceneCode.GDEndBackgroundObjects1= [];
gdjs.WaitlistEndSceneCode.GDEndBackgroundObjects2= [];
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1= [];
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects2= [];


gdjs.WaitlistEndSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgainButton"), gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1.length;i<l;++i) {
    if ( gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1[k] = gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1[i];
        ++k;
    }
}
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opening Scene", false);
}
}

}


};

gdjs.WaitlistEndSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WaitlistEndSceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.WaitlistEndSceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects2.length = 0;

gdjs.WaitlistEndSceneCode.eventsList0(runtimeScene);
gdjs.WaitlistEndSceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.WaitlistEndSceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.WaitlistEndSceneCode.GDPlayAgainButtonObjects2.length = 0;


return;

}

gdjs['WaitlistEndSceneCode'] = gdjs.WaitlistEndSceneCode;

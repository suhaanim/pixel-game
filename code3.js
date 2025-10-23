gdjs.AdmitEndSceneCode = {};
gdjs.AdmitEndSceneCode.localVariables = [];
gdjs.AdmitEndSceneCode.idToCallbackMap = new Map();
gdjs.AdmitEndSceneCode.GDEndBackgroundObjects1= [];
gdjs.AdmitEndSceneCode.GDEndBackgroundObjects2= [];
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1= [];
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects2= [];


gdjs.AdmitEndSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgainButton"), gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1.length;i<l;++i) {
    if ( gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1[k] = gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1[i];
        ++k;
    }
}
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Opening Scene", false);
}
}

}


};

gdjs.AdmitEndSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AdmitEndSceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.AdmitEndSceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects2.length = 0;

gdjs.AdmitEndSceneCode.eventsList0(runtimeScene);
gdjs.AdmitEndSceneCode.GDEndBackgroundObjects1.length = 0;
gdjs.AdmitEndSceneCode.GDEndBackgroundObjects2.length = 0;
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects1.length = 0;
gdjs.AdmitEndSceneCode.GDPlayAgainButtonObjects2.length = 0;


return;

}

gdjs['AdmitEndSceneCode'] = gdjs.AdmitEndSceneCode;

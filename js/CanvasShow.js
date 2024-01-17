const MODELS = [
  ["live2d/22/model.default.json", "live2d/22/model.2016.xmas.1.json", "live2d/22/model.2016.xmas.2.json", "live2d/22/model.2017.cba-normal.json", "live2d/22/model.2017.cba-super.json", "live2d/22/model.2017.newyear.json", "live2d/22/model.2017.school.json", "live2d/22/model.2017.summer.normal.1.json", "live2d/22/model.2017.summer.normal.2.json", "live2d/22/model.2017.summer.super.1.json", "live2d/22/model.2017.summer.super.2.json", "live2d/22/model.2017.tomo-bukatsu.high.json", "live2d/22/model.2017.tomo-bukatsu.low.json", "live2d/22/model.2017.valley.json", "live2d/22/model.2017.vdays.json", "live2d/22/model.2018.bls-summer.json", "live2d/22/model.2018.bls-winter.json", "live2d/22/model.2018.lover.json", "live2d/22/model.2018.spring.json"], 
  ["live2d/22_high/model.json"], 
  ["live2d/33/model.default.json", "live2d/33/model.2016.xmas.1.json", "live2d/33/model.2016.xmas.2.json", "live2d/33/model.2017.cba-normal.json", "live2d/33/model.2017.cba-super.json", "live2d/33/model.2017.newyear.json", "live2d/33/model.2017.school.json", "live2d/33/model.2017.summer.normal.1.json", "live2d/33/model.2017.summer.normal.2.json", "live2d/33/model.2017.summer.super.1.json", "live2d/33/model.2017.summer.super.2.json", "live2d/33/model.2017.tomo-bukatsu.high.json", "live2d/33/model.2017.tomo-bukatsu.low.json", "live2d/33/model.2017.valley.json", "live2d/33/model.2017.vdays.json", "live2d/33/model.2018.bls-summer.json", "live2d/33/model.2018.bls-winter.json", "live2d/33/model.2018.lover.json", "live2d/33/model.2018.spring.json"],
  ["live2d/33_high/model.json"], 
  ["live2d/bronya/model.json"], 
  ["live2d/bronya_1/model.json"],
  ["live2d/haru/haru_01.model.json", "live2d/haru/haru_02.model.json"], 
  ["live2d/haruto/haruto.model.json"], 
  ["live2d/hibiki/hibiki.model.json"], 
  ["live2d/hijiki/hijiki.model.json", "live2d/tororo/tororo.model.json"], 
  ["live2d/index/model.json"], 
  ["live2d/izumi/izumi.model.json"], 
  ["live2d/katou_01/katou_01.model.json"], 
  ["live2d/liang/2.json"], 
  ["live2d/live_uu/model.json", "live2d/live_uu/model_usb.json"], 
  ["live2d/mei/model.json"], 
  ["live2d/miku/miku.model.json"], 
  ["live2d/murakumo/index.json"], 
  ["live2d/xiaomai/xiaomai.model.json"], 
  ["live2d/wanko/wanko.model.json"], 
  ["live2d/shizuku/shizuku.model.json"], 
  ["live2d/Epsilon2.1/Epsilon2.1.model.json"], 
  ["live2d/Pio/model.json", "live2d/Pio/model1.json", "live2d/Pio/model2.json", "live2d/Pio/model3.json", "live2d/Pio/model4.json", "live2d/Pio/model5.json"], 
  ["live2d/platelet/model.json"], 
  ["live2d/platelet-2/model.json", "live2d/platelet-3/kesyoban.model.json"], 
  ["live2d/rem/model.json"], 
  ["live2d/sagiri/sagiri.model.json"], 
  ["live2d/snow_miku/model.json"], 
  ["live2d/Terisa/model.json"], 
  ["live2d/Tia/index.json", "live2d/Tia/index1.json", "live2d/Tia/index2.json", "live2d/Tia/index3.json", "live2d/Tia/index4.json", "live2d/Tia/index5.json"], 
  ["live2d/tsumiki/tsumiki.model.json"], 
  ["live2d/unitychan/unitychan.model.json"], 
  ["live2d/yuri/model.json"], 
  ["live2d/z16/z16.model.json"], 
  ["live2d/chitose/chitose.model.json"], 
  ["live2d/HyperdimensionNeptunia/blanc_classic/index.json", "live2d/HyperdimensionNeptunia/blanc_normal/index.json", "live2d/HyperdimensionNeptunia/blanc_swimwear/index.json"], 
  ["live2d/HyperdimensionNeptunia/histoire/index.json", "live2d/HyperdimensionNeptunia/histoirenohover/index.json"], 
  ["live2d/HyperdimensionNeptunia/nepgear/index.json", "live2d/HyperdimensionNeptunia/nepgearswim/index.json", "live2d/HyperdimensionNeptunia/nepgear_extra/index.json"], 
  ["live2d/HyperdimensionNeptunia/nepmaid/index.json", "live2d/HyperdimensionNeptunia/nepnep/index.json", "live2d/HyperdimensionNeptunia/nepswim/index.json", "live2d/HyperdimensionNeptunia/neptune_classic/index.json", "live2d/HyperdimensionNeptunia/neptune_santa/index.json"], ["live2d/HyperdimensionNeptunia/noir_classic/index.json", "live2d/HyperdimensionNeptunia/noir/index.json", "live2d/HyperdimensionNeptunia/noir_santa/index.json", "live2d/HyperdimensionNeptunia/noireswim/index.json"], 
  ["live2d/HyperdimensionNeptunia/vert_classic/index.json", "live2d/HyperdimensionNeptunia/vert_normal/index.json", "live2d/HyperdimensionNeptunia/vert_swimwear/index.json"],
  ["live2d/mashiro/ryoufuku.model.json", "live2d/mashiro/seifuku.model.json", "live2d/mashiro/shifuku.model.json"],
  ["live2d/makoto0/makoto0.model.json"],
  ["live2d/penchan/penchan.model.json"],
  ["live2d/iio/iio.model.json"],
  ["live2d/yukari_model/yukari_model.model.json"],``
  ["live2d/YuzukiYukari/YuzukiYukari.model.json"],
  ["live2d/Violet/14.json"],
  ["live2d/Alice/model.json"],
  ["live2d/fox/model.json"],
  ["live2d/himeko/model.json"],
  ["live2d/kiana/model.json"],
  ["live2d/redeemer/model.json"],
  ["live2d/sakura/model.json"],
  ["live2d/seele/model.json"],
  ["live2d/sin/model.json"],
  ["live2d/theresa/model.json"],
  ["live2d/illyasviel/illyasviel.model.json"],
  ["live2d/dollsfrontline/88type_1809/normal/model.json", "live2d/dollsfrontline/88type_1809/destroy/model.json"],
  ["live2d/dollsfrontline/95type_405/normal/model.json", "live2d/dollsfrontline/95type_405/destroy/model.json"],
  ["live2d/dollsfrontline/ags-30/model.json"],
  ["live2d/dollsfrontline/armor/model1.json", "live2d/dollsfrontline/armor/model2.json", "live2d/dollsfrontline/armor/model3.json"],
  ["live2d/dollsfrontline/command/model1.json", "live2d/dollsfrontline/command/model2.json", "live2d/dollsfrontline/command/model3.json"],
  ["live2d/dollsfrontline/dsr50_1801/normal/model.json", "live2d/dollsfrontline/dsr50_1801/destroy/model.json"],
  ["live2d/dollsfrontline/dsr50_2101/normal/model.json", "live2d/dollsfrontline/dsr50_2101/destroy/model.json"],
  ["live2d/dollsfrontline/fn57_2203/normal/model.json"],
  ["live2d/dollsfrontline/fortress/model1.json", "live2d/dollsfrontline/fortress/model2.json", "live2d/dollsfrontline/fortress/model3.json"],
  ["live2d/dollsfrontline/g36c_1202/normal/model.json", "live2d/dollsfrontline/g36c_1202/destroy/model.json"],
  ["live2d/dollsfrontline/g41_2401/normal/model.json", "live2d/dollsfrontline/g41_2401/destroy/model.json"],
  ["live2d/dollsfrontline/gelina/normal/model.json"],
  ["live2d/dollsfrontline/golden/model1.json", "live2d/dollsfrontline/golden/model2.json", "live2d/dollsfrontline/golden/model3.json"],
  ["live2d/dollsfrontline/grizzly_2102/normal/model.json", "live2d/dollsfrontline/grizzly_2102/destroy/model.json"],
  ["live2d/dollsfrontline/hk416_805/normal/model.json", "live2d/dollsfrontline/hk416_805/destroy/model.json"],
  ["live2d/dollsfrontline/kp31_310/normal/model.json", "live2d/dollsfrontline/kp31_310/destroy/model.json"],
  ["live2d/dollsfrontline/kp31_1103/normal/model.json", "live2d/dollsfrontline/kp31_1103/destroy/model.json"],
  ["live2d/dollsfrontline/kp31_3101/normal/model.json", "live2d/dollsfrontline/kp31_3101/destroy/model.json"],
  ["live2d/dollsfrontline/m1928a1_1501/normal/model.json", "live2d/dollsfrontline/m1928a1_1501/destroy/model.json"],
  ["live2d/dollsfrontline/mlemk1_604/normal/model.json", "live2d/dollsfrontline/mlemk1_604/destroy/model.json"],
  ["live2d/dollsfrontline/ntw20_2301/normal/model.json", "live2d/dollsfrontline/ntw20_2301/destroy/model.json"],
  ["live2d/dollsfrontline/ots14_3001/normal/model.json", "live2d/dollsfrontline/ots14_3001/destroy/model.json"],
  ["live2d/dollsfrontline/px4storm_2801/normal/model.json", "live2d/dollsfrontline/px4storm_2801/destroy/model.json"],
  ["live2d/dollsfrontline/rfb_1601/normal/model.json", "live2d/dollsfrontline/rfb_1601/destroy/model.json"],
  ["live2d/dollsfrontline/sat8_2601/normal/model.json", "live2d/dollsfrontline/sat8_2601/destroy/model.json"],
  ["live2d/dollsfrontline/shield/model1.json", "live2d/dollsfrontline/shield/model2.json", "live2d/dollsfrontline/shield/model3.json"],
  ["live2d/dollsfrontline/type64-ar_2901/normal/model.json", "live2d/dollsfrontline/type64-ar_2901/destroy/model.json"],
  ["live2d/dollsfrontline/vector_1901/normal/model.json", "live2d/dollsfrontline/vector_1901/destroy/model.json"],
  ["live2d/dollsfrontline/wa2000_6/normal/model.json", "live2d/dollsfrontline/wa2000_6/destroy/model.json"],
  ["live2d/dollsfrontline/welrod_1401/normal/model.json", "live2d/dollsfrontline/welrod_1401/destroy/model.json"],
  ["live2d/chiaki_kitty/chiaki_kitty.model.json"],
  ["live2d/date_16/date_16.model.json", "live2d/hallo_16/hallo_16.model.json"],
  ["live2d/kanzaki/kanzaki.model.json"],
  ["live2d/Kobayaxi/Kobayaxi.model.json"],
  ["live2d/kuroko/kuroko.model.json"],
  ["live2d/len/len.model.json", "live2d/len_impact/len_impact.model.json", "live2d/len_space/len_space.model.json", "live2d/len_swim/len_swim.model.json"],
  ["live2d/ryoufuku/ryoufuku.model.json"],
  ["live2d/saten/saten.model.json"],
  ["live2d/seifuku/seifuku.model.json"],
  ["live2d/shifuku/shifuku.model.json", "live2d/shifuku2/shifuku2.model.json"],
  ["live2d/stl/stl.model.json"],
  ["live2d/touma/touma.model.json"],
  ["live2d/uiharu/uiharu.model.json"],
  ["live2d/wed_16/wed_16.model.json"],
  ["live2d/xxb/xxb.model.json"],
]

let xuexiaoban = document.createElement("div");
let xuexiaobanTips = document.createElement("div");
let live2d = document.createElement("canvas");
xuexiaoban.id = "xuexiaoban";
xuexiaobanTips.id = "xuexiaoban-tips";
live2d.id = "live2d";
live2d.class = "live2d";
live2d.width = "270";
live2d.height = "300";
xuexiaoban.appendChild(xuexiaobanTips);
xuexiaoban.appendChild(live2d);
document.body.appendChild(xuexiaoban);

// loadlive2d("live2d", "https://cdn1.zzzmh.cn/live2DModel/xxb/model.json");
// loadlive2d("live2d", "live2d/xxb/xxb.model.json");

// 消息请求
function message(text, timeout) {
  document.getElementById("xuexiaoban-tips").innerText = text;
  document.getElementById("xuexiaoban-tips").style.opacity = "1";
  if (!timeout) timeout = 5000;
  setTimeout(function () {
    document.getElementById("xuexiaoban-tips").style.opacity = "0";
    setTimeout(function () {
      message(yiyan());
    }, timeout);
  }, timeout);
}

// 语录请求
function yiyan() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "get",
    "https://v1.hitokoto.cn/?c=b&encode=text&charset=utf-8",
    false
  );
  xhr.send(null);
  if (xhr.readyState == 4 && xhr.status == 200) {
    return xhr.responseText;
  } else {
    return "什么破网络啊~我要自闭啦！";
  }
}

// live2d
var xxb = "live2d/xxb/xxb.model.json";
var tororo = "live2d/tororo/assets/tororo.model.json";
var hijiki = "live2d/hijiki/assets/hijiki.model.json";

function show(path) {
  config.model.jsonPath = path;
  L2Dwidget.init(config);
}
// 配置文件官方API: https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init
const config = {
  model: {
    jsonPath: "", // xxx.model.json 的路径
  },
  display: {
    superSample: 1, // 超采样等级
    width: 270, // canvas的宽度
    height: 300, // canvas的高度
    position: "right", // 显示位置：左或右
    hOffset: 0, // canvas水平偏移
    vOffset: 0, // canvas垂直偏移
  },
  mobile: {
    show: true, // 是否在移动设备上显示
    scale: 1, // 移动设备上的缩放
    motion: true, // 移动设备是否开启重力感应
  },
  name: {
    'canvas': "live2dcanvas",
    'div': "live2d-widget",
  },
  react: {
    opacityDefault: 1, // 默认透明度
    opacityOnHover: 1, // 鼠标移上透明度
  },
  dialog: {
    enable: true, // 显示人物对话框
    hitokoto: true,
  },
};


function GetRandomLive2d(){
  var RandomIndex = Math.floor(Math.random() * MODELS.length);
  var randomIndex =  Math.floor(Math.random() * MODELS[RandomIndex].length)
  return MODELS[RandomIndex][randomIndex]
}
// 随机筛选动画展示
window.onload = function () {
  message("啊~牙白~被发现了呢");
  // 调用live2d动画
  // show(GetRandomLive2d());
  show(xxb)
};

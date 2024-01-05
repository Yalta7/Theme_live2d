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
var config = {
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
  react: {
    opacityDefault: 1, // 默认透明度
    opacityOnHover: 1, // 鼠标移上透明度
  },
  dialog: {
    enable: true, // 显示人物对话框
    hitokoto: true,
  },
};
// 随机筛选动画
var arr = [xxb, hijiki, tororo];
var randomIndex = Math.floor(Math.random() * arr.length);
var live2d_random = arr[randomIndex];
window.onload = function () {
  message("啊~牙白~被发现了呢");
  // 调用live2d动画
  show(live2d_random);
};

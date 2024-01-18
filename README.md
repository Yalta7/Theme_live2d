
### live2d
项目源于GitHub上一个大神的，以下是源码地址，可去自行查看<br>
源码: https://github.com/imuncle/live2d<br>
与此同时还发现了一个大神把我想做不知道怎么做的东西实现出来了，就是把live2d搬到电脑桌面上(好像只支持Mac系统，有兴趣的可以去看看)<br>
源码：https://github.com/fguby/Electron-elf
#### Canvas show 配置
##### 字段说明
[配置文件官方API](https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init)

| Name                           | Type    | Attribute                            | Description                                                                            |
| ------------------------------ | ------- | ------------------------------------ | -------------------------------------------------------------------------------------- |
| userConfig                     | Object  | optional                             | 用户自定义设置                                                                         |
| userConfig.model.jsonPath      | String  | optional                             | Path to Live2D model's main json eg. https://test.com/miku.model.json model 主文件路径 |
| userConfig.model.scale         | Number  | optional<br>default: 1               | Scale between the model and the canvas 模型与 canvas 的缩放                            |
| userConfig.display.superSample | Number  | optional<br>default: 2               | rate for super sampling rate 超采样等级                                                |
| userConfig.display.width       | Number  | optional<br>default: 150             | Width to the canvas which shows the model canvas 的长度                                |
| userConfig.display.height      | Number  | optional<br>default: 300             | Height to the canvas which shows the model canvas 的高度                               |
| userConfig.display.position    | String  | optional<br>default: 'right'         | Left of right side to show 显示位置：左或右                                            |
| userConfig.display.hOffset     | Number  | optional<br>default: 0               | Horizontal offset of the canvas canvas 水平偏移                                        |
| userConfig.display.vOffset     | Number  | optional<br>default: -20             | Vertical offset of the canvas canvas 垂直偏移                                          |
| userConfig.mobile.show         | Boolean | optional<br>default: true            | Whether to show on mobile device 是否在移动设备上显示                                  |
| userConfig.mobile.scale        | Number  | optional<br>default: 0.5             | Scale on mobile device 移动设备上的缩放                                                |
| userConfig.name.canvas         | String  | optional<br>default: 'live2dcanvas'  | ID name of the canvas canvas 元素的 ID                                                 |
| userConfig.name.div            | String  | optional<br>default: 'live2d-widget' | ID name of the div div 元素的 ID                                                       |
| userConfig.react.opacity       | Number  | optional<br>default: 0.7             | opacity 透明度                                                                         |
| userConfig.dev.border          | Boolean | optional<br>default: false           | Whether to show border around the canvas 在 canvas 周围显示边界                        |
| userConfig.dialog.enable       | Boolean | optional<br>default: false           | Display dialog 显示人物对话框                                                          |
| userConfig.dialog.hitokoto     | Boolean | optional<br>default: false           | Enable hitokoto 使用一言 API                                                           |

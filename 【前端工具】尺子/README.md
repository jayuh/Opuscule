# 尺子API

## 使用说明
尺子是一把以像素为单位的神器的尺子——用以加载在页面里，方便查看页面元素的高宽。

1. 中间可拖动；
1. 左右可拉伸；
1. 划取刻度线可选择一段范围的长度；
1. 键盘上的上下左右按键可微调尺子的位置。
1. 尺子左边有四个小功能键：
	- 矩形工具：可在页面画一个矩形，获得矩形的宽和高；
	- 点对点距离：可在页面上画出一条直线，获得此直线的长度；
	- 最小化：将尺子最小化到左下角；
	- 关闭：消除尺子的div，且不会在出现，除非再次通过JS加载。

## 调用方法
只用加载一个JS文件即可：[http://jayuh.com/demo/ruler/ruler.js](http://jayuh.com/demo/ruler/ruler.js)

如果是查看他人页面，自己不方便直接修改源代码，可以通过控制台（F12）加载。IE6下等没有控制台的浏览器，可以通过地址栏加载：
```
javascript:with(document)0[body.appendChild(createElement('script')).src='http://jayuh.com/demo/ruler/ruler.js']
```

在线DEMO：[http://jayuh.com/demo/ruler/](http://jayuh.com/demo/ruler/)

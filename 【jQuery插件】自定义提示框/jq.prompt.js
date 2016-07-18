/**
 * @Abstract    自定义提示框 - jQuery插件
 * @Datatime    13-7-28 下午1:15
 * @Author      Jayuh [511977533@qq.com]
 * @WebSite     http://jayuh.com
 * @Version     0.1
 */

(function($){
	$.fn.prompt = function(settings){

		// 默认参数
		var defaultSettings = {
			// @param {String} 提示框类名
			className: 'custom_prompt',
			// @param {Int} Y轴偏移量
			top: '0',
			// @param {Int} X轴偏移量
			left: '0',
			// @param {String} 提示框的宽度
			width: 'auto',
			// @param {String} 提示框的高度
			height: 'auto',
			// @param {Boolean} 提示框内容为：title
			showTitle: false,
			// @param {String} 提示框内容为：字符串
			content: null,
			// @param {String} 提示框内容为：iframe
			url: null,
			// @param {String} iframe的宽度
			urlWidth: '100%',
			// @param {String} iframe的高度
			urlHeight: '100%',
			// @param {HTMLElement} 提示框内追加HTML元素 通常用于完成尖角等效果
			appendHTML: '',
			// @param {Int} 定时器的延迟时间
			timeout: 200,
			// @param {Int} 加载动画时间 设置为0可以即时出现
			fadeSpeed: 200
		};

		// 给每个提示框添加不同的id
		idIndex = typeof(idIndex) == 'undefined' ? 0 : idIndex;

		// 合并默认参数和用户自定义参数
		settings = $.extend(true,{},defaultSettings,settings);

		// 遍历对象并返回值
		return this.each(function(){
			var elem = $(this),
				// 提示框相对于body的绝对定位Top值
				top = elem.offset().top + ( settings.top - 0 ),
				// 提示框相对于body的绝对定位Left值
				left = elem.offset().left + ( settings.left - 0 ),
				// 提示框里的内容
				content,
				// 提示框div {String}
				div;

				if(settings.showTitle){
					// 传参showTitle为true时
					// 提示框内容为当前对象的title
					content = elem.attr('title');
					// 移除当前对象的title节点
					elem.removeAttr('title');
				}else if(settings.content){
					// 传参为content时
					// 提示框的内容为content的内容
					content = settings.content;
				}else if(settings.url){
					content = '<iframe frameBorder="no" border="0" width="' + settings.urlWidth + '" height="' + settings.urlHeight + '" src="' + settings.url + '"></iframe>';
				}else{
					content = '提示框内容为空';
				}

			// 获取提示框的完整字符串
			div = '<div id="custom_prompt_' + idIndex + '" class="' + settings.className + '" style="display:none;position:absolute;top:' + top + 'px;left:' + left + 'px;width:' + settings.width + ';height:' + settings.height + '">' + content + settings.appendHTML + '</div>';

			// 将提示框插入body
			$("body").append(div);

			// 给当前对象添加class，这个class跟对应提示框id相同，用于做钩子
			elem.addClass('custom_prompt_' + idIndex);

			// 获取对应提示框的id
			var aClassName = elem.attr('class').split(' '),
				id;
			for(var i = 0; i < aClassName.length; i++ ){
				if(aClassName[i].indexOf('custom_prompt_') > -1){
					id = aClassName[i];
				}
			}

			// 给当前对象绑定事件
			elem.bind({
				// 鼠标移入
				mouseenter: function(){
					// 清除定时器
					clearTimeout(elem.timer);
					// 显示提示框
					$("#" + id).fadeIn(settings.fadeSpeed);
				},
				// 鼠标移出
				mouseleave: function(){
					// 设置定时器
					elem.timer = setTimeout(function(){
						$("#" + id).fadeOut(settings.fadeSpeed);
					},settings.timeout);
				}
			});

			// 提示框绑定hover事件
			$("#" + id).hover(function(){
				var $this = $(this);
				this.index = this.index || 1;
				if(this.index++ % 2 == 0){
					// 鼠标移出
					// 设置定时器
					elem.timer = setTimeout(function(){
						$this.fadeOut(settings.fadeSpeed);
					},settings.timeout);
				}else{
					// 鼠标移入
					// 清除定时器
					clearTimeout(elem.timer);
				}
			});

			// id指数递增，用于提供给下一个遍历的元素
			++idIndex;

		});

	};
})(jQuery);
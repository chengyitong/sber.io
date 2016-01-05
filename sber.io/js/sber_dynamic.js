/*
 * @description:送呗动态数据
 * @author: cyt
 * @update: 2015.12.29
*/
// 获取动态列表
function getDynamicList () {
	var dataroot = 'http://7xlgbd.com2.z0.glb.qiniucdn.com/json/sber_dynamic.json';

	$.getJSON(dataroot,{},function (data) {
		var len = data.length,
			dynamic_box = '';
		
		if (len == 0) {
			$('#dynamic_list').html('<span class="null-tips">暂无动态</span>');
		}else {
			$('#dynamic_list').empty();

			data.sort(function (a,b) {
				if (a.date > b.date) {
					return -1;
				}
				return 1;
			});

			$.each(data,function (i,item) {
				var id = data[i].id,
					title = data[i].title,
					desc = data[i].desc,
					descImgUrl = data[i].descImgUrl,
					content = data[i].content,
					date = data[i].date;

				dynamic_box += '<div class="dynamic-box">'
					+ '<h4 class="dynamic-title"><a href="dynamic?dynamicId=' + id + '">' + title + '</a>'
					+ '<span class="dynamic-time">' + date + '</span></h4>'
					+ '<div class="dynamic-content">'
					+ '<img class="desc-img" src="' + descImgUrl + '">'
					+ '<p class="dynamic-desc">' + desc + '</p>'
					+ '<div class="dynamic-rm"><a href="dynamic?dynamicId=' + id + '">阅读全文</a></div></div></div>';
			});

			$('#dynamic_list').append(dynamic_box);
		}
	});
}

$(function(){
	getDynamicList();
});
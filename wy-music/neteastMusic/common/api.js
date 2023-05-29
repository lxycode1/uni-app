import { baseUrl } from './config.js'
//获取榜单列表
export function topList(){
	
	let listIds = ['3','0','2','1'];
	
	return new Promise(function(reslove,reject){
		
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				for(var i=0;i<listIds.length;i++){
					result[i].listId = listIds[i];
				}
				reslove(result);
			},
			fail: () => {},
			complete: () => {}
		});
	});	
}
//获取音乐列表数据
export function list(listId){
	return uni.request({
		url: `${baseUrl}/top/list?idx=${listId}`,
		method: 'GET'
	});
}

//音乐详情数据

export function songDetail(songId){
	return uni.request({
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	});
}

//http://localhost:3000/simi/song?id=483937795  

export function songSimi(songId){
	return uni.request({
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	});
}

//http://localhost:3000/comment/music?id=483937795

export function songComment(songId){
	return uni.request({
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	});
}


//http://localhost:3000/lyric?id=483937795

export function songLyric(songId){
	return uni.request({
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	});
}


//http://localhost:3000/song/url?id=483937795 

export function songUrl(songId){
	return uni.request({
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	});
}

//http://localhost:3000/search/hot/detail

export function searchHot(){
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	});
}

//http://localhost:3000/search?keywords=少年

export function searchWord(word){
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	});
}

//http://localhost:3000/search/suggest?keywords=少年&type=mobile

export function searchSuggest(word){
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	});
}
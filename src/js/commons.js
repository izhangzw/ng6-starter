export default angular.module('app.commons', [])
.factory('$restfuller', ['$rootScope', '$http', '$q', '$log', '$state', 'APP', 'Loginer', ($rootScope, $http, $q, $log, $state, APP, Loginer)=>{
    const paddingURL = function(url){
		if( url.startsWith('/') ){
  			url = `${APP.host}${url}`;
  		}
		return url;
	}
	//执行ajax
	const processing = function(url, config){
		
		let datas = Object.assign({}, { url: paddingURL(url) }, config);
		const gMsg = (errorMsg) => {
			let msg = '请检查网络是否畅通';
			if(errorMsg){
				if(errorMsg.length>100){
					msg = '服务器走神了';
				}else{
					msg = errorMsg;
				}
			}
			return msg;
		}
		const promise = new Promise( (resolve, reject) => {
			$http(datas)
			.success(ret => {
				let {status, data, errorMsg, errorCode} = ret;
				status = status.toUpperCase();
		
				if( 'SUCCESS'===status ){
					resolve(data);
				}else{
					if(errorCode==='err00001'){
						if(Loginer.get()) alert(gMsg(errorMsg))
						$rootScope.$broadcast('unauth');
					}else{
						alert(gMsg(errorMsg))
					}
					reject(errorMsg)
				}
			})
			.error( (e, status, c) => {
				reject(status)
			});
		});
		promise.success = function(callback){
  			promise.then( data => {
	  			callback && callback(data)
	  		});
	  		return promise;
  		};
  		promise.error = function(callback){
  			promise.then( null, e=> {
  				callback && callback(e)
  			})
  			return promise;
  		};
		return promise;
	}
  	return {
		get(url, config){
			return processing(url, Object.assign({}, {method: 'get'}, config));
	  	},
	  	post(url, data, config){
	  		return processing(url, Object.assign({}, {method: 'post', data}, config));
	  	}
    }
}])
.factory('Loginer', [()=>{
    return {
		get(){
			return localStorage.loginer ? JSON.parse(localStorage.loginer) : '';
		},
		set(data){
			localStorage.loginer = typeof data==='string' ? data : JSON.stringify(data);
		},
		// 加密
		encode(str){
			var hash = 0, i, chr, len;
			if (str.length === 0) return hash;
			for (i = 0, len = str.length; i < len; i++) {
			chr   = str.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
			}
			return hash;
		},
		destory(){
			localStorage.removeItem('loginer')
		}
	}
}])
.name;
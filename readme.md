# search panel组件
### props

参数  | 说明
------- | -------------
onSearchResult(wordList)  | 拿到搜索返回值时触发,获取到加权之后的wordlist 

	
# list search组件
### api
参数  | 说明
------- | -------------
blur | 把index设置为null，列表中的任何文章都不会被选中 
	
### props
参数  | 说明
------- | -------------
onSelect | 

---

method  | 说明
------- | -------------
select | 选择note
blur | 取消选择

### 搜索，动态推进文章到列表里

method  | 说明
------- | -------------
loadNotesData(notes) | 重新加载notes data，更新数据
countWeight(array,note) | 对单个文章进行权重计算, 单层的array
highlight(note) | 对单个文章进行highlight的处理
clear() | 清空列表
pushX(this.list,note) | 对单个文章进行添加

## 逻辑流
start 搜索开始  
调用loadNotesData(刷新数据)  
调用loadWordList（刷新搜索结果）    
循环每一篇文章，  

		countWeight  
		highlight  
	then  
	push

---





data  |  说明
------- | -------------
notes | notes列表



### jsx(data=model+props, method=private+props)

### privateMethod(acitons)
select
### props(data,method)
### model
### test
### publicMethod

# list组件
### api

参数  | 说明
------- | -------------
blur  | 同search list
getData  | 获取列表数据  
fetchData(callback) |callback(可选)将获得一个参数notes(array)
addNote(note) |
modifyNote(note) |
removeNote(itemId) |
### props
参数  | 说明
--- | -------------
onSelect  | 


# editor组件
### props  

参数  | 说明
--- | -------------
onNew(callback)|	不提供任何参数给callback
onSave(callback)|	callback将获得一个参数：note(object)
onDelete(callback) |callback将获得一个参数”itemId(string)

参数  | 说明
--- | -------------
delivery(callback)  | callback将获得一个对象,对象中包括以下属性：
_replace(function)_|_接受一个note对象，替换editor中的内容_

# note 对象规范
{ itemId,content,modifyTime }	

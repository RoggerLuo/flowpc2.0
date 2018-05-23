# editor props
组件上的props  
### delivery(callback)
	callback将获得一个对象 
	对象中包括以下属性：
		replace(function)：接受一个note对象，替换editor中的内容
### onNew(callback)
	不提供任何参数给callback
### onSave(callback)
	callback将获得一个参数：note(object)
### onDelete(callback)
	callback将获得一个参数”itemId(string)
---
# list api
import * as list from './list'
### fetchData(callback)
	callback(可选)将获得一个参数notes(array)
### addNote(note)
### modifyNote(note)
### removeNote(itemId)
---
# note 对象
{ itemId,content,modifyTime }	

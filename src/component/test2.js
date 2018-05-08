let a 
if(process.env.NODE_ENV ==='production'){
    a = 'trueeee'
}else{
    a = 'fffalse'
}
export default function(){
    console.log(a)
    console.log('test2')
}

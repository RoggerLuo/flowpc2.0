let a 
if(process.env.NODE_ENV ==='production'){
    a = 'trueeee'
}else{
    a = 'fffalse'
}
export function abc(){
    console.log(a)
}

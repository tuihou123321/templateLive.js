// js常用原生语法简写

console.log($value$);
// lg

this.
//t.

let $key$=$value$
//l.

let {$value$}=$result$;
// lvr

localStorage.setItem(`"${$key$}"`,$value$);
//l.s

localStorage.getItem(`${$key$}`)
//l.g


$fun$($arg$){
    $end$
}
// f

$fun$($arg$,(result)=>{
    $end$
})
// f2

$fun$=($arg$)=>{
    $end$
}
// fn

function $fun$($arg$){
    $end$
}
// fun


(function () {
    $end$
})()
//ff


$isTrue$ ? $a$:$b$;
//?

$isTrue$ || $value$;
// |


$arr$.map((item,index)=>{
    return $end$
})
//mp

$arr$.map((item,index)=>(
    $end$
))
//mp.

$arr$.forEach((item,index)=>{
    $end$
})
//fe


$arr$.some((item,index)=>{
    return $end$
})
//so


$arr$.every((item,index)=>{
    return $end$
})
//ev

$arr$.filter((item,index)=>{
    return $end$
})
//fi

$key$:$vlaue$,
//kv

require("$module$")
//req

let $key$=$value$;
//lkv


if($bool$){
    $then1$
}
//if

else{
    $then2$
}
//el

else if($bool$){
    $value$
}
//eli


if($bool$){
    $then1$
}else{
 $then2$
}
//ife


if($bool$){
    $then1$
}else if($bool2$){
    $then2$
}else{
    $then3$
}
//iel


JSON.stringify($string$)
//js

JSON.parse($string$)
//jp


switch($value$)
{
    case $val1$:
        $todo1$
        break;
    case $val2$:
        $todo2$
        break;
    default:
        $todo3$
}
//sw




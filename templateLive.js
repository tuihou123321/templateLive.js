##webstorm代码简写1
33
import React, {Component} from 'react';
export default class $Name$ extends Component {
    state = {
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                $value$
            </div>
        );
    }
}
//react,reactP


import React, {Component} from 'react';
export default function $Name$($arg$){
    return (
        <div>
            $value$
        </div>
    );
}
//reactF



this.setState({
  $k$:$v$
 })
//  set

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

let {$value$}=$result$;
// lvr

console.log($value$);
// log


$arr$.map((item,index)=>({
    $end$
})
//map

$arr$.map((item,index)=>(
    $end$
)
//mp

$arr$.forEach((item,index)=>{
    $end$
})
//forEach


$arr$.some((item,index)=>{
    $end$
})
//some


$arr$.every((item,index)=>{
    $end$
})
//every

$arr$.filter((item,index)=>{
    $end$
})
//filter

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


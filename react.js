// react常用语法简写

this.state
// t.s

this.props
//t.p

this.setState({
    $k$:$v$
})
//  set



className={"$value$"}
//cn


classNames({obj})
//cns  ,第三方库

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




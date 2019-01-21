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
//re


import React from 'react';
import PropTypes from "prop-types"

let propTypes={

}
function $Name$($arg$){
    return (
        <div>
        $value$
        </div>
    );
}
$Name$.propTypes=propTypes;
export default $Name$;
//ref


import React, { PureComponent } from 'react';
import PropTypes from "prop-types"

export default class $Name$ extends PureComponent {
    static propTypes = {}
    state = {}

    componentDidMount() {
    }

    render() {
        return(
            <div >
            $value$
            </div>
        )
    }
}
//rep

import PropTypes from "prop-types"
// i.pt
PropTypes
//pt





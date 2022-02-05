import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }
    
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({tmp_state2 : true}); // state 값 변경 => shouldComponentUpdate 호출
    }

    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2; // return 값이 true인 경우 render를 한번 더 실행!
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[ THIS IS SHOULDCOMPONENTUPDATE FUNCTION ]</h2>
        )
    }
}

export default R008_LifecycleEx;

import React from 'react';
import { CITYNAME } from '../config/localStoreKey.js';
import LocalStore from '../util/localStore.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false,
        }

    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>正在加载中...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '杭州';
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })

        this.setState({
            initDone: true
        })
    }
}

// -----------------redux react绑定------------------

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
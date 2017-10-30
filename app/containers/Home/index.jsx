import React from 'react';
import {connect} from 'react-redux';

import HomeHeader from '../../components/HomeHeader/index.jsx';
import Category from '../../components/Category/index.jsx';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} />
                <Category/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

import React from 'react';
import './style.less'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div id='home-header' className='clear-fix'>
                <div className='float-left home-header-left'>
                    {this.props.cityName} 
                    &nbsp;
                    <i className='icon-circle-down'></i>
                </div>
                <div className='float-right home-header-right'>
                    <i className='icon-user'></i>
                </div>
                <div className='home-header-middle'>
                    <div className='search-container'>
                        <i className='icon-search'></i>
                        <input type="text" placeholder='请输入关键字' />
                    </div>
                </div>


            </div>
        )
    }
}
export default HomeHeader;
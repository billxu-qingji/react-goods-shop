import React from 'react';
import ReactSwipe from 'react-swipe';
import './style.less';

class Category extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            index: 0
        }
    }
    render() {
        let opt = {
            auto: 2000,
            callback: (index) => {
                this.setState({
                    index
                })
            }
        }
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <ul className="swipe-index">
                    <li className={this.state.index === 0 ? 'selected' : ''}>1</li>
                    <li className={this.state.index === 1 ? 'selected' : ''}>2</li>
                    <li className={this.state.index === 2 ? 'selected' : ''}>3</li>
                </ul>
            </div>

        )
    }
    componentDidMount() {
        console.log(ReactSwipe);
    }
}
export default Category; 
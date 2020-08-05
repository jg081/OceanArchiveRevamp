declare var require: any

var React = require('react');

import * as Constant from '../constants';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColour: this.props.bgColour,
            fontColour: this.props.fontColour
        }
    }

    changeColour(active) {
        if (active) {
            this.setState({
                bgColour: Constant.SECONDARY_COLOUR,
                fontColour: Constant.BLACK
            });
        } else {
            this.setState({
                bgColour: Constant.MAIN_COLOUR,
                fontColour: Constant.WHITE
            });
        }
    }

    render() {
        return (
            <div className='tab' style={{ backgroundColor: this.state.bgColour, color: this.state.fontColour }} onClick={this.props.changeColour}>{this.props.title}</div>
        );
    }
}

const firstTrans = 'flex 0.3s ease-out';
const secTrans = 'flex 0.3s ease-out 0.3s';

class Description extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            flex: '0 1 auto',
            outerTrans: secTrans,
            innerTrans: firstTrans
        }
    }

    expand = () => {
        console.log('Clicked');
        if (this.state.isOpen) {
            this.setState({
                isOpen: false,
                flex: '0 1 auto',
                outerTrans: secTrans,
                innerTrans: firstTrans
            });
        } else {
            this.setState({
                isOpen: true,
                flex: '1 0 auto',
                outerTrans: firstTrans,
                innerTrans: secTrans
            });
        }
    }

    render() {
        return (
            <div className='descriptionContainer' style={{ transition: this.state.outerTrans, flex: this.state.flex }}>
                <h2>DESCRIPTION</h2>
                <div className='description' style={{ transition: this.state.innerTrans, flex: this.state.flex }}>
                    She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him.
Sometimes it's the first moment of the day that catches you off guard. That's what Wendy was thinking. She opened her window to see fire engines screeching down the street. While this wasn't something completely unheard of, it also wasn't normal. It was a sure sign of what was going to happen that day. She could feel it in her bones and it wasn't the way she wanted the day to begin.
Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.
Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life, but not the last.
The amber droplet hung from the branch, reaching fullness and ready to drop. It waited. While many of the other droplets were satisfied to form as big as they could and release, this droplet had other plans. It wanted to be part of history. It wanted to be remembered long after all the other droplets had dissolved into history. So it waited for the perfect specimen to fly by to trap and capture that it hoped would eventually be discovered hundreds of years in the future.

                </div>
                <div className='expandToggle' onClick={() => this.expand()}>
                    {this.state.isOpen ?
                        <svg width='40px' height='20px'>
                            <polyline points='5,15 20,5 35,15'
                                stroke-linecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Close
                        </svg>
                        : <svg width='40px' height='20px'>
                            <polyline points='5,5 20,15 35,5'
                                stroke-linecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Open
                        </svg>
                    }
                </div>
            </div>
        );
    }
}

export default class ItemCollectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.Tabs = [
            React.createRef(),
            React.createRef()
        ];
        this.state = {
            currentActiveTab: 0
        };
    }

    changeTabs = tabNum => () => {
        if (tabNum != this.state.currentActiveTab) {
            console.log(tabNum);
            for (var i = 0; i < 2; i++) {
                if (i == tabNum) {
                    this.Tabs[i].current.changeColour(true);
                    this.setState({ currentActiveTab: tabNum });
                } else {
                    this.Tabs[i].current.changeColour(false);
                }
            }
        }
    }

    render() {
        return (
            <div className='itemCollectionPage'>
                <div className='breadcrumbsContainer'>Breadcrumbs</div>
                <div style={{ display: 'flex', flex: '1 0 auto' }}>
                    <div className='itemCollectionContainer'>
                        <div className='title'>TITLE</div>
                        <div className='thumbnailAndInfoContainer'>
                            <img className='thumbnail' />
                            <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0px' }}>
                                <div className='infoContainer'>
                                    <div className='info left'>INFO LEFT</div>
                                    <div className='info'>INFO RIGHT</div>
                                </div>
                                <div className='tagsBox'>TAGS</div>
                            </div>
                        </div>
                        <Description />
                        <div className='itemsAndSubcollContainer'>
                            <div className='itemTabs'>
                                <Tab ref={this.Tabs[0]} title='ITEMS' bgColour={Constant.SECONDARY_COLOUR} fontColour={Constant.BLACK} changeColour={this.changeTabs(0)} />
                                <Tab ref={this.Tabs[1]} title='SUB-COLLECTIONS' bgColour={Constant.MAIN_COLOUR} fontColour={Constant.WHITE} changeColour={this.changeTabs(1)} />
                            </div>
                            <div className='contentBackground'>
                                <div className='scrollable contentContainer'>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='recommendationsContainer'>
                        <div className='title'>RECOMMENTDATIONS</div>
                        <div className='scrollable recommendationsList'>LIST</div>
                    </div>
                </div>
            </div>
        );
    }
}
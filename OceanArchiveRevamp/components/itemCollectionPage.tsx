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

const firstTrans = 'flex 0.3s linear';
const secTrans = 'flex 0.3s linear 0.3s';

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
        //console.log('Clicked');
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
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Close
                        </svg>
                        : <svg width='40px' height='20px'>
                            <polyline points='5,5 20,15 35,5'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Open
                        </svg>
                    }
                </div>
            </div>
        );
    }
}

class Recommendation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='recommendation'>
                <img src={this.props.src} alt={this.props.title + " thumbnail"} />
                <div style={{ flex: '1 1 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100px' }}>
                        <h2 className='listTitle'>{this.props.title}</h2>
                        <p className='listDesc'>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

class Tag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tag'>#{this.props.name}</div>
        );
    }
}

class TagsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagsIsOpen: false,
            flex: '0 1 0px',
            outerTrans: secTrans,
            innerTrans: firstTrans
        }
    }

    expand = () => {
        //console.log('Clicked');
        if (this.state.tagsIsOpen) {
            this.setState({
                tagsIsOpen: false,
                flex: '0 1 0px',
                outerTrans: secTrans,
                innerTrans: firstTrans,
            });
        } else {
            this.setState({
                tagsIsOpen: true,
                flex: '1 0 auto',
                outerTrans: firstTrans,
                innerTrans: secTrans,
            });
        }
    }

    render() {
        return (
            <div className='tagsContainer' style={{ transition: this.state.outerTrans, flex: this.state.flex }}>
                <div className='tagsLabel'>TAGS</div>
                <div style={{ display: 'flex', width: '100%' }}>
                    <div className='tags' style={{ transition: this.state.innerTrans, flex: this.state.flex }}>
                        <Tag name='waste' />
                        <Tag name='infrastructure' />
                        <Tag name='ocean habitats' />
                        <Tag name='marine ecology' />
                        <Tag name='sharks' />
                        <Tag name='whales' />
                        <Tag name='deep ocean' />
                        <Tag name='coral' />
                        <Tag name='seaweed' />
                        <Tag name='marine technology' />
                        <Tag name='wave' />
                        <Tag name='ocean current' />
                        <Tag name='climate change' />
                        <Tag name='fish' />
                        <Tag name='pollution' />
                        <Tag name='waste' />
                        <Tag name='infrastructure' />
                        <Tag name='ocean habitats' />
                        <Tag name='marine ecology' />
                        <Tag name='sharks' />
                        <Tag name='whales' />
                        <Tag name='deep ocean' />
                        <Tag name='coral' />
                        <Tag name='seaweed' />
                        <Tag name='marine technology' />
                        <Tag name='wave' />
                        <Tag name='ocean current' />
                        <Tag name='climate change' />
                        <Tag name='fish' />
                        <Tag name='pollution' />
                    </div>
                </div>
                <div className='tagsContainerController' onClick={() => this.expand()}>
                    {this.state.tagsIsOpen ?
                        <svg width='40px' height='20px'>
                            <polyline points='5,15 20,5 35,15'
                                strokeLinecap='round'
                                style={{ fill: 'none', stroke: Constant.SECONDARY_COLOUR, strokeWidth: '5' }} />
                            Close
                        </svg>
                        : <svg width='40px' height='20px'>
                            <polyline points='5,5 20,15 35,5'
                                strokeLinecap='round'
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
                            <img className='thumbnail' src='url("https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg")' />
                            <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0px' }}>
                                <div className='infoContainer'>
                                    <div className='info left'>INFO LEFT</div>
                                    <div className='info'>INFO RIGHT</div>
                                </div>
                                <TagsSection />
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
                        <div className='scrollableList recommendationsList'>
                            <Recommendation title='Pacific Ocean Garbage Patch' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg' />
                            <Recommendation title='The Various Shark Species' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg' />
                            <Recommendation title='Under The Ocean: Life with Turtles' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg' />
                            <Recommendation title='Fish in the Ocean' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg' />
                            <Recommendation title='Ocean Waves' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg' />
                            <Recommendation title='Sharks Electromagnetic Sense' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg' />
                            <Recommendation title='Coral Research' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg' />
                            <Recommendation title='Plastic Island' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg' />
                            <Recommendation title='Sunset Shore' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg' />
                            <Recommendation title='Deep Ocean Mining' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg' />
                            <Recommendation title='Oil Pollution' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg' />
                            <Recommendation title='Deep Ocean Life' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg' />
                            <Recommendation title='Whale Spotting' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg' />
                            <Recommendation title='Octopus Learning Habits' desc='Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.' src='https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
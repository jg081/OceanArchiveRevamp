declare var require: any

var React = require('react');

import {
    Carousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';

class Announcement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='announcement'>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <a style={{}}>View</a>
            </div>
        );
    }
}

export default class AnnouncementsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false
        };
    }

    items = [
        [
            {
                title: 'TITLE 1',
                text: 'Text for 1',
                key: 1
            },
            {
                title: 'TITLE 2',
                text: 'Text for 2',
                key: 2
            },
            {
                title: 'TITLE 3',
                text: 'Text for 3',
                key: 3
            }
        ],
        [
            {
                title: 'TITLE 4',
                text: 'Text for 4',
                key: 4
            },
            {
                title: 'TITLE 5',
                text: 'Text for 5',
                key: 5
            },
            {
                title: 'TITLE 6',
                text: 'Text for 6',
                key: 6
            }
        ],
        [
            {
                title: 'TITLE 7',
                text: 'Text for 7',
                key: 7
            },
            {
                title: 'TITLE 8',
                text: 'Text for 8',
                key: 8
            },
            {
                title: 'TITLE 9',
                text: 'Text for 9',
                key: 9
            }
        ]
    ];

    slides = this.items.map((item, i) => {
        return (
            <CarouselItem onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} key={i}>
                <div style={{ display: 'flex' }}>
                    <Announcement title={item[0].title} text={item[0].text} />
                    <Announcement title={item[1].title} text={item[1].text} />
                    <Announcement title={item[2].title} text={item[2].text} />
                </div>
            </CarouselItem>
        );
    });

    next = () => {
        if (this.state.animating) return;
        var nextIndex = ((this.state.activeIndex + 1) > (this.items.length - 1)) ? 0 : (this.state.activeIndex + 1);
        this.setState({ activeIndex: nextIndex })
    }

    prev = () => {
        if (this.state.animating) return;
        var nextIndex = (this.state.activeIndex - 1) < 0 ? (this.items.length - 1) : (this.state.activeIndex - 1);
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex = (newIndex) => {
        this.setState({ activeIndex: newIndex });
    }

    render() {
        return (
            <div className='announcementsContainer' style={{ height: '250px', width: '100%', padding: '10px' }}>
                <h1 style={{ flex: '0', minWidth: '200px' }}>Announcements</h1>
                <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.prev}>
                    {this.slides}
                    <CarouselIndicators items={this.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                </Carousel>
            </div>
        );
    }
}
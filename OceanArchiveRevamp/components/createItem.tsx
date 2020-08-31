declare var require: any

var React = require('react');

import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false
        };
    }

    formNumbers = [1, 2, 3, 4];

    formPages = this.formNumbers.map((i) => {
        switch (i) {
            //Details
            case 1:
                return (
                    <CarouselItem className='createItemPage' key='1'>
                        <div className='dragAndDrop'>
                            DRAG & DROP OR CLICK TO UPLOAD FILE
                        </div>
                        <FormGroup>
                            <Label for='title'>Title</Label>
                            <Input type='text' name='title' id='title' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='desc'>Description</Label>
                            <Input type='textarea' name='desc' id='desc' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='creator'>Creator(s) / Author(s)</Label>
                            <Input type='text' name='creator' id='creator' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='dateStart'>Date Started/Made</Label>
                            <Input type='date' name='dateStart' id='dateStart' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='dateFinish'>Date Finished</Label>
                            <Input type='date' name='dateFinish' id='dateFinish' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='url'>URL</Label>
                            <Input type='url' name='url' id='url' />
                        </FormGroup>
                        <FormGroup>
                            <Label for='lang'>Language</Label>
                            <Input type='text' name='lang' id='lang' />
                        </FormGroup>
                    </CarouselItem>
                );
            //Category & Tags
            case 2:
                return (
                    <CarouselItem className='createItemPage' key='2'>
                        Categories
                        <hr />

                    </CarouselItem>
                );
            //Regions & Legal
            case 3:
                return (
                    <CarouselItem className='createItemPage' key='3'>
                        <div>
                            REGIONS & LEGAL
                    </div>
                    </CarouselItem>
                );
            //Location/s
            case 4:
                return (
                    <CarouselItem className='createItemPage' key='4'>
                        <div>
                            LOCATION/S
                    </div>
                    </CarouselItem>
                );
        }
    });

    next = () => {
        if (this.state.animating) return;
        var nextIndex = ((this.state.activeIndex + 1) > (this.formNumbers.length - 1)) ? (this.formNumbers.length - 1) : (this.state.activeIndex + 1);
        this.setState({ activeIndex: nextIndex })
    }

    prev = () => {
        if (this.state.animating) return;
        var nextIndex = (this.state.activeIndex - 1) < 0 ? 0 : (this.state.activeIndex - 1);
        this.setState({ activeIndex: nextIndex })
    }

    goToIndex = (newIndex) => {
        this.setState({ activeIndex: newIndex });
    }

    render() {
        return (
            <Form className='creationContainer'>
                <div className='creationHeader'>
                    Create Item
                        <CarouselIndicators items={this.formPages} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                </div>
                <Carousel pause={false} interval={false} activeIndex={this.state.activeIndex} next={this.next} previous={this.prev}>
                    {this.formPages}
                </Carousel>
                <div className='creationFooter'>
                    <div className='creationButton' onClick={this.prev}>
                        BACK
                        </div>
                    <div className='fillerBox' />
                    <div className='creationButton' style={{ marginRight: '16px' }}>
                        SAVE DRAFT
                            </div>
                    <div className='creationButton callToAction' onClick={this.next}>
                        NEXT
                            </div>
                </div>
            </Form>
        );
    }
}
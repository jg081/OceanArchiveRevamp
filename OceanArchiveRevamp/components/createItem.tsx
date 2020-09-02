declare var require: any

var React = require('react');

import * as Constant from '../constants';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    Form,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    Button
} from 'reactstrap';
import Select from 'react-select'; 

class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='createItemPage'>
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
            </div>
        );
    }
}

class CategoryAndTagsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFocus: 0
        };
        this.checkBoxes = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
    }

    setMainFocus = (index) => {
        if (index != this.state.activeFocus) {
            this.props.setMainFocus(index);
            this.setState({
                activeFocus: index
            });
            //console.log(index, " checked ", this.checkBoxes[index].current.checked);
            this.checkBoxes[index].current.checked = false;
        }
    }

    render() {
        return (
            <div className='createItemPage'>
                Categories
                        <hr />
                <FormGroup>
                    <Label for='focusMain'>Main Focus Area</Label>
                    <input type='hidden' name='focusMain' value={this.mainFocus} />
                    <ButtonGroup className='mainFocus'>
                        <Button className='left'
                            type='button'
                            style={{
                                backgroundColor: this.state.activeFocus == 0 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR
                            }}
                            onClick={() => this.setMainFocus(0)}
                        >Science & Tech</Button>
                        <Button type='button'
                            style={{ backgroundColor: this.state.activeFocus == 1 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }}
                            onClick={() => this.setMainFocus(1)}
                        >Art</Button>
                        <Button className='right'
                            type='button'
                            style={{ backgroundColor: this.state.activeFocus == 2 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }}
                            onClick={() => this.setMainFocus(2)}
                        >Activism</Button>
                    </ButtonGroup>
                </FormGroup>
                <FormGroup check>
                    <Label>Other Focus Areas (optional)</Label>
                    <Label check style={{ display: this.state.activeFocus == 0 ? 'none' : 'inline-block' }}>
                        <input type='checkbox'
                            name='other'
                            value='sci'
                            style={{ display: this.state.activeFocus == 0 ? 'none' : 'inline-block' }}
                            ref={this.checkBoxes[0]}
                        />{' '}Science & Tech
                                </Label>
                    <Label check style={{ display: this.state.activeFocus == 1 ? 'none' : 'inline-block' }}>
                        <input type='checkbox'
                            name='other'
                            value='art'
                            style={{ display: this.state.activeFocus == 1 ? 'none' : 'inline-block' }}
                            ref={this.checkBoxes[1]}
                        />{' '}Art
                                </Label>
                    <Label check style={{ display: this.state.activeFocus == 2 ? 'none' : 'inline-block' }}>
                        <input type='checkbox'
                            name='other'
                            value='act'
                            style={{ display: this.state.activeFocus == 2 ? 'none' : 'inline-block' }}
                            ref={this.checkBoxes[2]}
                        />{' '}Activism
                                </Label>
                </FormGroup>
                <FormGroup>
                    <Label for='cat'>Object Category</Label>
                    <Input type='select' name='cat'>
                        <option>Other</option>
                        <option>painting</option>
                        <option>video</option>
                    </Input>
                </FormGroup>
                <div style={{ height: '24px' }} />
                Tags
                        <hr />
                <FormGroup>
                    <Label for='concept'>Concept</Label>
                    <Input type='select' name='concept'>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='keyword'>Keywords (optional)</Label>
                    <Input type='select' name='keyword'>
                    </Input>
                </FormGroup>
            </div>
        );
    }
}

class RegionAndLegalPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='createItemPage'>
                Regions
                <hr />
                <FormGroup>
                    <Label for='oceans'>Ocean Region/s (optional)</Label>
                    <Select className='react-select-contianer' classNamePrefix='react-select' options={Constant.oceans} isMulti isSearchable/>
                </FormGroup>
                <FormGroup>
                    <Label for='countries'>Country/s (optional)</Label>
                    <Select className='react-select-contianer' classNamePrefix='react-select' options={Constant.countries} value={Constant.countries.value} isMulti isSeachable/>
                </FormGroup>
                <div style={{ height: '50px' }} />
                Legal
                <hr />
                <FormGroup>
                    <Label for='license'>License</Label>
                    <Input type='select' name='license'>
                        <option>CC BY (Least Restrictive)</option>
                        <option>CC BY-SA</option>
                        <option>CC BY-ND</option>
                        <option>CC BY-NC</option>
                        <option>CC BY-NC-SA</option>
                        <option>CC BY-NC-ND (Most Restrictive CC)</option>
                        <option>Ocean Archive (Most Restrictive)</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='copyr'>Copyright Owner (optional)</Label>
                    <Input type='text' name='copyr' />
                </FormGroup>
            </div>
        );
    }
}

export default class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            animating: false
        };
        var mainFocus;
    }

    focusAreas = ['sci', 'art', 'act'];

    setMainFocus = (index) => {
        //console.log("mainFocus Before: ", this.mainFocus);
        this.mainFocus = this.focusAreas[index];
        //console.log("mainFocus After: ", this.mainFocus);
    }

    formNumbers = [1, 2, 3, 4];

    formPages = this.formNumbers.map((i) => {
        switch (i) {
            //Details
            case 1:
                return (
                    <CarouselItem key='1'>
                        <DetailsPage />
                    </CarouselItem>
                );
            //Category & Tags
            case 2:
                return (
                    <CarouselItem key='2'>
                        <CategoryAndTagsPage setMainFocus={this.setMainFocus} />
                    </CarouselItem>
                );
            //Regions & Legal
            case 3:
                return (
                    <CarouselItem key='3'>
                        <RegionAndLegalPage />
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
        this.mainFocus = this.focusAreas[0];
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
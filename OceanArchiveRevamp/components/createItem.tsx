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
                    <Select className='react-select-contianer' classNamePrefix='react-select' options={Constant.oceans} isMulti isSearchable />
                </FormGroup>
                <FormGroup>
                    <Label for='countries'>Country/s (optional)</Label>
                    <Select className='react-select-contianer' classNamePrefix='react-select' options={Constant.countries} value={Constant.countries.value} isMulti isSeachable />
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

class CoordinateBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            lat: 0,
            lng: 0,
            index: this.props.index
        };
    }

    inFocus = () => {
        this.setState({
            isFocused: true
        });
    }

    outFocus = () => {
        this.setState({
            isFocused: false
        });
    }

    updateLat = (e) => {
        this.setState({ lat: e.target.value });
        this.props.updateLatLong(this.state.index, e.target.value, this.state.lng);
    }

    updateLng = (e) => {
        this.setState({ lng: e.target.value });
        this.props.updateLatLong(this.state.index, this.state.lat, e.target.value);
    }

    remove = () => {
        this.props.remove(this.state.index);
    }

    render() {
        return (
            <div tabIndex='0' className={this.state.isFocused ? 'coordContainer focused' : 'coordContainer'} onFocus={this.inFocus} onBlur={this.outFocus}>
                <FormGroup className='coordFormGroup'>
                    <Label for='lat' className='coordLabel'>LAT</Label>
                    <Input className='coordInput' type='number' maxLength='10' name='lat' onChange={this.updateLat} />
                </FormGroup>
                <FormGroup className='coordFormGroup'>
                    <Label for='lng' className='coordLabel'>LONG</Label>
                    <Input className='coordInput' type='number' maxLength='10' name='lng' onChange={this.updateLng} />
                </FormGroup>
                <div className='fillerBox' />
                <div className={this.state.isFocused ? 'coordBtnGroup focused' : 'coordBtnGroup'}>
                    <div tabIndex={this.state.isFocused ? '0' : '-1'} className='coordButton centerHere'>+</div>
                    <div tabIndex={this.state.isFocused ? '0' : '-1'} className='coordButton delete' onClick={this.remove}>x</div>
                </div>
            </div>
        );
    }
}

class LocationPage extends React.Component {
    constructor(props) {
        super(props);
        this.Tabs = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        this.state = {
            currentFocus: -1,
            coords: [{ 'lat': 0, 'lng': 0 }],
            nextId: 1
        }
    }

    addCoord = () => {
        this.state.coords.push({ 'id': this.state.nextId, 'lat': 0, 'lng': 0 });
        this.setState({
            coords: this.state.coords,
            nextId: this.state.nextId + 1
        });
    }

    removeCoord = (id) => {
        //console.log("remove id: ", id);
        var i = this.state.coords.findIndex(coord => coord.id === id);
        //console.log("remove i: ", i);
        if (i >= 0) {
            this.state.coords.splice(i, 1);
            this.setState({
                coords: this.state.coords
            });
            //console.log(this.state.coords);
        }
    }

    updateLatLng = (id, newLat, newLng) => {
        var i = this.state.coords.findIndex(coord => coord.id === id);
        if (i >= 0) {
            this.state.coords[i] = { 'id': id, 'lat': newLat, 'lng': newLng };
            this.setState({ coords: this.state.coords });
        }
    }

    render() {
        return (
            <div className='createItemPage locationsPage'>
                <div className='mapContainer'>
                </div>
                <div className='coordListContainer'>
                    <div className='coordListTabs'>
                        <div tabIndex='0' className='coordListTab'>POINTS</div>
                        <div tabIndex='0' className='coordListTab center'>PATH</div>
                        <div tabIndex='0' className='coordListTab'>AREA</div>
                    </div>
                    <div className='coordList'>
                        {this.state.coords.map((coord, i) => {
                            return (
                                < CoordinateBox index={coord.id} remove={this.removeCoord} updateLatLong={this.updateLatLng} key={'coord' + coord.id} />
                            );
                        }
                        )}
                        <div className='addCoordButton' onClick={this.addCoord} >
                            +
                        </div>
                    </div>
                </div>
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
                    <CarouselItem className='creationCarouselItem' key='1'>
                        <div className='centerCarouselItem'>
                            <DetailsPage />
                        </div>
                    </CarouselItem >
                );
            //Category & Tags
            case 2:
                return (
                    <CarouselItem className='creationCarouselItem' key='2'>
                        <div className='centerCarouselItem'>
                            <CategoryAndTagsPage setMainFocus={this.setMainFocus} />
                        </div>
                    </CarouselItem>
                );
            //Regions & Legal
            case 3:
                return (
                    <CarouselItem className='creationCarouselItem' key='3'>
                        <div className='centerCarouselItem'>
                            <RegionAndLegalPage />
                        </div>
                    </CarouselItem>
                );
            //Location/s
            case 4:
                return (
                    <CarouselItem className='creationCarouselItem' key='4'>
                        <div className='centerCarouselItem'>
                            <LocationPage />
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
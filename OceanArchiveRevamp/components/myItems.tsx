declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBy: 'Title',
            isOpen: false
        }
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    switchSearch = (setSearchBy) => this.setState({
        searchBy: setSearchBy
    });

    render() {
        return (
            <form className='altSearchContainer'>
                <ButtonDropdown className='searchDropdown' isOpen={this.state.isOpen} toggle={this.toggle} direction='down'>
                    <DropdownToggle className='altDropdown' caret>
                        {this.state.searchBy}
                    </DropdownToggle>
                    <DropdownMenu className='altDropdownMenu'>
                        <DropdownItem onClick={() => this.switchSearch('Title')}>Title</DropdownItem>
                        <DropdownItem onClick={() => this.switchSearch('Creator')}>Creator</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <input type='search' className='altSearchBar' placeholder='Search My Items' />
                <input type='submit' className='altSearchButton' value='Search' />
            </form>
        );
    }
}

class ListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='listItemContainer' style={{ fontWeight: 'bold' }}>
                <div className='listFixedWidth'>Published</div>
                <div className='listFixedWidth'>Created Date</div>
                <div className='listVariableWidth'>Title</div>
                <div className='listVariableWidth'>Creator(s)</div>
                <div className='listFixedWidth'>Options</div>
            </div>
        );
    }
}

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='listItemContainer'>
                <div className='listFixedWidth'>{
                    this.props.published ?
                        <svg width='30' height='30'>
                            <polyline points='5,20 10,25 25,5'
                                strokeLinecap='round'
                                style={{fill:'none', stroke:'#05B336', strokeWidth:'5'}} />
                            Yes
                        </svg>
                        : <svg width='30' height='30'>
                            <g fill='none' stroke='#FF3A3A' stroke-width='5'>
                                <line x1='5' y1='5' x2='25' y2='25' strokeLinecap='round' />
                                <line x1='25' y1='5' x2='5' y2='25' strokeLinecap='round' />
                            </g>
                        </svg>
                }</div>
                <div className='listFixedWidth'>{this.props.dateCreated}</div>
                <div className='listVariableWidth'>{this.props.title}</div>
                <div className='listVariableWidth'>{this.props.creators}</div>
                <div className='listFixedWidth'>EDIT</div>
            </div>
        );
    }
}

export default class MyItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ICAcontainer">
                <h1>MY ITEMS</h1>
                <SearchBar />
                <div className='listSection'>
                    <ListHeader />
                    <ListItem published={true} dateCreated="02-Jun-2020" title='A long title that refelects the ocean' creators='Territorial Agency' />
                    <ListItem published={false} dateCreated="02-Jun-2020" title='TEST' creators='Various People Working on it' />
                    <ListItem published={true} dateCreated="02-Jun-2020" title='Atlantic Whale Songs' creators='Jack White' />
                </div>
                <div className='footerMenu'>
                    <div className='buttonSmall'>+ Add New</div>
                    <div>
                        PAGES
                    </div>
                </div>
            </div>
        );
    }
}
declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

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
                                style={{ fill: 'none', stroke: '#05B336', strokeWidth: '5' }} />
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

        this.dataSet = new Array(100);
        for (var i = 0; i < this.dataSet.length; i++) {
            this.dataSet[i] = "Title " + (i + 1);
        }
        //console.log("items: ", this.dataSet);

        this.itemsPerPage = Math.floor((window.innerHeight - 350) / 50);
        this.pagesCount = Math.ceil(100 / this.itemsPerPage);
        //console.log("itemsPerPage: ", this.itemsPerPage, " | pagesCount: ", this.pagesCount);

        this.pages = new Array(this.pagesCount);
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i] = (i + 1);
        }

        this.state = {
            currentPage: 0
        }
    }

    switchPage = (index) => {
        this.setState({
            currentPage: index
        });
    }

    render() {
        const { currentPage } = this.state;
        return (
            <div className="ICAcontainer">
                <h1>MY ITEMS</h1>
                <SearchBar />
                <div className='listSection'>
                    <ListHeader />
                    {this.dataSet.slice(
                        currentPage * this.itemsPerPage,
                        (currentPage + 1) * this.itemsPerPage
                    ).map((data, i) =>
                        <ListItem key={i} published={true} dateCreated="02-Jun-2020" title={data} creators='Territorial Agency' />
                    )}
                </div>
                <div className='footerMenu'>
                    <div className='buttonSmall'>+ Add New</div>
                    <Pagination>
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink onClick={() => this.switchPage(0)} first href='#' />
                        </PaginationItem>
                        <PaginationItem disabled={currentPage <= 0}>
                            <PaginationLink onClick={() => this.switchPage(currentPage - 1)} previous href='#' />
                        </PaginationItem>
                        {this.pages.map((i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={() => this.switchPage(i)} href='#'>
                                    {i}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem disabled={currentPage >= this.pagesCount}>
                            <PaginationLink onClick={() => this.switchPage(this.state.current + 1)} next href='#' />
                        </PaginationItem>
                        <PaginationItem disabled={currentPage >= this.pagesCount}>
                            <PaginationLink onClick={() => this.switchPage(this.pagesCount - 1)} last href='#' />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div >
        );
    }
}
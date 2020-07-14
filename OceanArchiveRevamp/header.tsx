declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom'

import * as Constant from './constants';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='logo'>{this.props.name}</div>
        );
    }
}

class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='headerButton'>
                {this.props.name}
            </div >
        );
    }
}

class SeachBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form method="post" style={{ display: 'flex' }}>
                <input type="search" className="searchBar" placeholder="Search..." />
                <input type="submit" className='searchButton' />
            </form>
        );
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Logo name='OCEAN' />
                <div style={{ flex: '1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className='headerNavBar'>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <NavLink to="/">
                                    <HeaderButton name='HOME' />
                                </NavLink>
                                <NavLink to="/map">
                                    <HeaderButton name='MAP' />
                                </NavLink>
                                <HeaderButton name='TERMS' />
                                <HeaderButton name='PRIVACY' />
                                <div className='fillerBox' />
                                <HeaderButton name='LOGIN' />
                                <HeaderButton name='SIGNUP' />
                            </div>
                        </div>
                        <div style={{ flex: '1' }}>
                            <SeachBar />
                        </div>
                    </div>
                </div>
                <Logo name='ARCHIVE' />
            </div>
        );
    }
}
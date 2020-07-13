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
            <div style={{ width: '230px', height: '100px', textAlign: 'center', lineHeight: '100px', float: this.props.float }}>{this.props.name}</div>
        );
    }
}

class HeaderButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ color: '#D8D8D8', width: '100px', height: '60px', textAlign: 'center', lineHeight: '60px', float: this.props.float }}>
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
            <form method="post">
                <input type="submit" style={{ width: '150px', height: '34px', float: 'right', borderRadius: '0px 10px 10px 0px', border: '0px', background: Constant.SECONDARY_COLOUR }} />
                <span style={{ display: 'block', overflow: 'hidden' }}>
                    <input type="search" className="search" style={{ width: '100%', height: '34px', borderRadius: '10px 0px 0px 10px', border: '0px', background: '#787878', paddingLeft: '20px' }} placeholder="Search..." />
                </span>
            </form>
        );
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Logo float='left' name='OCEAN' />
                <NavLink to="/">
                    <HeaderButton float='left' name='HOME' />
                </NavLink>
                <NavLink to="/map">
                    <HeaderButton float='left' name='MAP' />
                </NavLink>
                <HeaderButton float='left' name='TERMS' />
                <HeaderButton float='left' name='PRIVACY' />
                <Logo float='right' name='ARCHIVE' />
                <HeaderButton float='right' name='SIGNUP' />
                <HeaderButton float='right' name='LOGIN' />
                <div style={{ position: 'absolute', height: '40px', left: '230px', right: '230px', top: '60px' }}>
                    <SeachBar />
                </div>
            </div>
        );
    }
}
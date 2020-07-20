declare var require: any

var React = require('react');

import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import * as Constant from '../constants';

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
            <div className='headerButton' onClick={this.props.onClick}>
                {this.props.name}
            </div >
        );
    }
}

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    render() {
        return (
            <div>
                <HeaderButton name='LOGIN' onClick={this.toggle} />
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <form>
                            <p className='inputLabel'>EMAIL</p>
                            <input type='text' id='email' name='email' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>PASSWORD</p>
                            <input type='password' id='passwrd' name='password' />
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='modalButton' onClick={this.toggle}>LOGIN</Button>
                        <div className='modalCenteredLink'>
                            <a href='https://www.google.com'>Forgot password?</a>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
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
                                <LoginModal />
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
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

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => this.setState({
        isOpen: !this.state.isOpen
    });

    disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }

    enableScroll = () => {
        document.body.style.overflow = 'scroll';
    }

    render() {
        return (
            <div>
                <HeaderButton name='SIGNUP' onClick={this.toggle} />
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} onOpened={this.disableScroll} onClosed={this.enableScroll}>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalBody>
                        <p>With a Social Account</p>
                        <div style={{ display: 'flex' }}>
                            <Button className='google socialButton'>GOOGLE</Button>
                            <div className='fillerBox' />
                            <Button className='facebook socialButton'>FACEBOOK</Button>
                            <div className='fillerBox' />
                            <Button className='twitter socialButton'>TWITTER</Button>
                        </div>
                        <div className='horizontalLineText'>
                            <p style={{ fontSize: '10pt' }}>or</p>
                        </div>
                        <form>
                            <p className='inputLabel'>FIRST NAME</p>
                            <input type='text' id='fName' name='firstName' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>LAST NAME</p>
                            <input type='text' id='lName' name='lastName' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>USERNAME</p>
                            <input type='text' id='uName' name='userName' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>EMAIL</p>
                            <input type='text' id='email' name='email' />
                            <div style={{ height: '20px' }} />
                            <p className='inputLabel'>PASSWORD</p>
                            <input type='password' id='passwrd' name='password' />
                            <div style={{ height: '20px' }} />
                            <div style={{ display: 'flex' }}>
                                <input className='checkBox' type='checkbox' id='termsAndConditions' name='termsAndConditions' value='TAC' />
                                <label className='checkBoxLabel' for='termsAndConditions'>I agree to the <a href='https://www.google.com'>Terms and Condtitions</a></label>
                            </div>
                            <div style={{ height: '20px' }} />
                            <div style={{ display: 'flex' }}>
                                <input className='checkBox' type='checkbox' id='mailList' name='mailList' value='mList' />
                                <label className='checkBoxLabel' for='mailList'>Join mailing list</label>
                            </div>
                            <p>It was their first date and she had been looking forward to it the entire week. She had her eyes on him for months, and it had taken a convoluted scheme with several friends to make it happen, but he'd finally taken the hint and asked her out. After all the time and effort she'd invested into it, she never thought that it would be anything but wonderful. It goes without saying that things didn't work out quite as she expected.
The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there. And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank.
The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't.</p>
                            <p>By joining the mailing list you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices <a href='https://www.google.com'>here</a>.</p>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='modalButton' onClick={this.toggle}>SIGN UP</Button>
                        <div className='modalCenteredLink'>
                            <p>Already have an account? <a href='https://www.google.com'>Sign In</a></p>
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
                                <SignUpModal />
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
//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
import "./styles/styles.css";
import "./styles/carousel.css";

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import Header from './header';
import NewAndTrending from './newAndTrending';
import ContentSection from './contentSection';
import AnnouncementsContainer from './announcementsContainer';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NewAndTrending />
                <AnnouncementsContainer />
                <ContentSection />
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));
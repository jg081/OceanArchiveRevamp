import "./styles/styles.css";
import "./styles/carousel.css";

declare var require: any

var React = require('react');

import NewAndTrending from './newAndTrending';
import ContentSection from './contentSection';
import AnnouncementsContainer from './announcementsContainer';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NewAndTrending />
                <AnnouncementsContainer />
                <ContentSection />
            </div>
        );
    }
}
declare var require: any

var React = require('react');

export default class ItemCollectionPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='itemCollectionPage'>
                <div className='breadcrumbsContainer'>Breadcrumbs</div>
                <div style={{ display: 'flex', flex: '1 0 auto' }}>
                    <div className='itemCollectionContainer'>
                        <div className='title'>TITLE</div>
                        <div className='thumbnailAndInfoContainer'>
                            <img className='thumbnail' />
                            <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0px' }}>
                                <div className='infoContainer'>
                                    <div className='info left'>INFO LEFT</div>
                                    <div className='info'>INFO RIGHT</div>
                                </div>
                                <div className='tagsBox'>TAGS</div>
                            </div>
                        </div>
                        <div className='description'>DESCRIPTION</div>
                        <div className='itemsAndSubcollContainer'>
                            <div className='itemTabs'>
                                <div>ITEMS</div>
                                <div>SUB-COLLECTIONS</div>
                            </div>
                            <div className='contentBackground'>
                                <div className='scrollable contentContainer'>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                    <div className='content'>Content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='recommendationsContainer'>
                        <div className='title'>RECOMMENTDATIONS</div>
                        <div className='scrollable recommendationsList'>LIST</div>
                    </div>
                </div>
            </div>
        );
    }
}
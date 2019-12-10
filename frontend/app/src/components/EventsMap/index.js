import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

import { connect } from 'react-redux';
import ReactMapGL, { Marker, Popup, LinearInterpolator } from 'react-map-gl';
import { findIndex } from 'lodash-es';
import moment from 'moment';
import config from '../../services/config';
import { mapEventsByLongitude } from '../../redux/events/selectors';
import { updateEvents } from '../../redux/events/actions';

import Image from '../../components/Image';

class EventsMapControls extends PureComponent {
    static propTypes = {
        onMinus: PropTypes.func,
        onPlus: PropTypes.func,
        onReset: PropTypes.func
    };

    render() {
        return (
            <div className="EventsMapControls">
                <i className="EventsMapControls--button icon-minus" onClick={this.props.onMinus}></i>
                <i className="EventsMapControls--button icon-plus" onClick={this.props.onPlus}></i>
                <i className="EventsMapControls--button icon-ccw" onClick={this.props.onReset}></i>
            </div>
        );
    }
}

const initialViewPort = {
    width: '100%',
    height: '100%',
    latitude: 20.1699,
    longitude: 24.9384,
    zoom: 1.5
};

class EventsMap extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            viewport: initialViewPort,
            activeMarker: null
        };

        this.clearActiveMarker = this.clearActiveMarker.bind(this);
        this.setPrevMarker = this.setPrevMarker.bind(this);
        this.setNextMarker = this.setNextMarker.bind(this);
        this.updateViewport = this.updateViewport.bind(this);
    }

    componentDidMount() {
        this.props.updateEvents();
    }

    updateViewport(viewport) {
        this.setState({ viewport });
    }

    clearActiveMarker() {
        this.setState({
            activeMarker: null
        });
    }

    handleMarkerClick(event) {
        this.setState({
            activeMarker: event._id,
            viewport: {
                ...this.state.viewport,
                latitude: event.latitude + 5,
                longitude: event.longitude,
                zoom: 4
            }
        });
    }

    setPrevMarker() {
        const { events } = this.props;
        const { activeMarker } = this.state;
        const currIdx = findIndex(events, e => e._id === activeMarker);
        const newIdx = currIdx === 0 ? events.length - 1 : currIdx - 1;

        this.handleMarkerClick(events[newIdx]);
    }

    setNextMarker() {
        const { events } = this.props;
        const { activeMarker } = this.state;
        const currIdx = findIndex(events, e => e._id === activeMarker);
        const newIdx = currIdx === events.length - 1 ? 0 : currIdx + 1;

        this.handleMarkerClick(events[newIdx]);
    }

    renderMarkers() {
        const { events } = this.props;
        const { activeMarker } = this.state;
        return events.map(event => {
            const isActive = activeMarker === event._id;
            const eventTime = event.timeDescription || moment(event.begins).format('DD.MM.YYYY');
            const eventImage = event.image || (event.eventconcept ? event.eventconcept.image : '');
            return (
                <React.Fragment key={event._id}>
                    <Marker
                        latitude={event.latitude}
                        longitude={event.longitude}
                        offsetTop={-35}
                        offsetLeft={-25}
                        className="EventsMap--MarkerWrapper"
                    >
                        <div className="EventsMap--Marker" onClick={() => this.handleMarkerClick(event)}>
                            <i className="EventsMap--Marker__pin icon-location" />
                        </div>
                    </Marker>
                    {isActive ? (
                        <Popup
                            latitude={event.latitude}
                            longitude={event.longitude}
                            offsetTop={-40}
                            offsetLeft={0}
                            closeButton={false}
                            dynamicPosition={false}
                            captureClick={isActive}
                            className={`EventsMap--PopupWrapper ${isActive ? 'EventsMap--PopupWrapper-active' : ''}`}
                        >
                            <div className={`EventsMap--Popup`}>
                                <Image
                                    className="EventsMap--Popup__image"
                                    image={eventImage}
                                    width={300}
                                    height={180}
                                />
                                <div className="EventsMap--Popup__content">
                                    <h4 className="EventsMap--Popup__name">{event.name}</h4>
                                    <p className="EventsMap--Popup__dates">
                                        {eventTime} | {event.locationDescription}
                                    </p>
                                    <p className="EventsMap--Popup__desc">{event.shortDescription}</p>
                                    {event.linkToTickets ? (
                                        <a className="EventsMap--Popup__link" href={event.linkToTickets}>
                                            Tickets
                                        </a>
                                    ) : null}
                                    {event.linkToEventSite ? (
                                        <a className="EventsMap--Popup__link" href={event.linkToEventSite}>
                                            Event website
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                            <div className="EventsMap--Popup__prev">
                                <i className="Header--menu-button icon-left-open" onClick={this.setPrevMarker} />
                            </div>
                            <div className="EventsMap--Popup__next">
                                <i className="Header--menu-button icon-right-open" onClick={this.setNextMarker} />
                            </div>
                        </Popup>
                    ) : null}
                </React.Fragment>
            );
        });
    }

    render() {
        if (!config.MAPBOX_TOKEN || this.props.events.length === 0) {
            return null;
        }
        return (
            <div className="EventsMap">
                <h2 className="EventsMap--title">On the map.</h2>
                <p className="EventsMap--desc">Click markers for details</p>
                <div className="EventsMap--Inner">
                    <ReactMapGL
                        {...this.state.viewport}
                        width="100%"
                        height="100%"
                        mapboxApiAccessToken={config.MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        onViewportChange={this.updateViewport}
                        transitionDuration={300}
                        transitionInterpolator={new LinearInterpolator()}
                        dragPan={false}
                        dragRotate={false}
                        scrollZoom={false}
                        touchZoom={false}
                        doubleClickZoom={false}
                        touchAction="pan-y"
                        onNativeClick={this.clearActiveMarker}
                        attributionControl={false}
                    >
                        <EventsMapControls
                            onMinus={() =>
                                this.setState({
                                    viewport: {
                                        ...this.state.viewport,
                                        zoom: this.state.viewport.zoom - 1
                                    }
                                })
                            }
                            onPlus={() =>
                                this.setState({
                                    viewport: {
                                        ...this.state.viewport,
                                        zoom: this.state.viewport.zoom + 1
                                    }
                                })
                            }
                            onReset={() =>
                                this.setState({
                                    viewport: initialViewPort
                                })
                            }
                        />
                        {this.renderMarkers()}
                    </ReactMapGL>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    events: mapEventsByLongitude(state)
});

const mapDispatchToProps = dispatch => ({
    updateEvents: () => dispatch(updateEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsMap);

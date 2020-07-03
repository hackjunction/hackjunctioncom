import React, { PureComponent } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import HeaderImage from "../../../components/HeaderImage";
import BasicHeader from "../../../components/HeaderImage/BasicHeader";
import EventCalendar from "../../../components/EventCalendar";
import Divider from "../../../components/Divider";
import NewsLetterForm from "../../../components/NewsLetterForm";

import Page from "../../PageHOC";

class CalendarPage extends PureComponent {
    render() {
        return (
            <Page
                className="CalendarPage"
                pageTitle="Calendar"
                metaDescKey={KEYS.calendarPageSubtitle}
                ogImageKey={MEDIA_KEYS.calendarPageHeaderImage}
            >
                <HeaderImage
                    imageKey={MEDIA_KEYS.calendarPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader
                        titleKey={KEYS.calendarPageTitle}
                        bodyKey={KEYS.calendarPageSubtitle}
                    />
                </HeaderImage>
                <EventCalendar />
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
            </Page>
        );
    }
}

export default CalendarPage;

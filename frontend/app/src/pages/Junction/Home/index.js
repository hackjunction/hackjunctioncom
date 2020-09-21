import React, { PureComponent } from 'react'
import './style.scss'

import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'

import DividerLine from '../../../components/DividerLine'
import SectionImage from '../../../components/SectionImage'
import Planet from '../../../components/Planet'
import EventCalendar from '../../../components/EventCalendar'

import Page from '../../PageHOC'
import LinkButton from '../../../components/LinkButton/index'
import Button from '../../../components/Button'
import HeaderSection from '../../../components/HeaderSection'
import SingleColumnSection from '../../../components/SingleColumnSection'

const EventsMap = React.lazy(() => import('../../../components/EventsMap'))

export default () => {
    return (
        <Page
            pageTitle="Hack the Future"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                body=" We organize epic hackathons and other tech events -
                        around the world, around the year."
                logo={require('../../../assets/logos/text_black.png')}
            >
                <Button className="Button-default" text="Read More" />
                <div className="Button-row">
                    <Button className="Button-small" to text="Junction App" />

                    <Button
                        className="Button-small"
                        onClick={'/story'}
                        text="Organize a hackathon"
                    />

                    <Button className="Button-small" to text="Junction 2020 Connected" />
                </div>
            </HeaderSection>
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            ></SectionImage>
            <DividerLine stop />
            <SingleColumnSection halfpage>
                <Planet />
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require('../../../assets/images/connected_main.webp'),
                }}
                imageKey={MEDIA_KEYS.homePageHackingImage}
                alt="People attending a hackathon"
            ></SectionImage>
            <DividerLine stop />
            <SingleColumnSection halfpage title="Upcoming events">
                <EventCalendar />
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require('../../../assets/images/connected_main.webp'),
                }}
                imageKey={MEDIA_KEYS.homePageCommunityImage}
                alt="Junction Community"
            ></SectionImage>
        </Page>
    )
}

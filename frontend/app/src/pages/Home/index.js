import React, { PureComponent, Suspense } from 'react';
import './style.scss';

import KEYS from '../../redux/staticcontent/keys';
import MEDIA_KEYS from '../../redux/staticmedia/keys';

import HeaderVideo from '../../components/HeaderVideo';
import BlockSection from '../../components/BlockSection';
import StatBlocks from '../../components/StatBlocks';
import NewsLetterForm from '../../components/NewsLetterForm';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import ConceptsPreview from '../../components/ConceptsPreview';
import PartnerLogoGrid from '../../components/LinkGrid/PartnerLogoGrid';
import StoryGrid from '../../components/LinkGrid/StoryGrid';
import ImageLinks from '../../components/ImageLinks';
import Page from '../PageHOC';
import LinkButton from '../../components/LinkButton/index';
import PageImage from '../../components/PageImage';
import HalfBlock from '../../components/HalfBlockSection';
import EventCard from '../../components/EventCard';

const EventsMap = React.lazy(() => import('../../components/EventsMap'));

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/calendar',
        linkText: 'Calendar'
    },
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/partners',
        linkText: 'For partners'
    },
    {
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: 'Link',
        linkTo: '/volunteers',
        linkText: 'For volunteers'
    }
];

class HomePage extends PureComponent {
    render() {
        return (
            <div className="container">
                <div>
                    {/* <EventCard
                        text="JunctionX Asia"
                        date="18.-23.06.2020, Asia"
                        image="https://media-exp1.licdn.com/dms/image/C5603AQGAsmoy5ja_Kw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=I206WUq_fyC7J04a2GJ-zZvchrzugfB3OJc4diHBZAc"
                    /> */}
                    {/* <LinkButton to="facebook.com" text="Read More " />
                <LinkButton to="facebook.com" text="Junction App " accent /> */}
                </div>
                    <img src="https://live.staticflickr.com/65535/49091319657_bdbd52c70e_b.jpg" alt="Junction 2019 Friday"/>


                
            </div>
        );
    }
}

export default HomePage;

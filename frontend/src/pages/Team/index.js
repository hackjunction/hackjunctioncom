import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader'
import TeamMemberGrid from '../../components/TeamMemberGrid';
import BlockSection from '../../components/BlockSection';
import ContactForm from '../../components/ContactForm';
import Divider from '../../components/Divider';

import Page from '../PageHOC';

import * as StaticContentSelectors from '../../redux/static/selectors';
import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import * as MediaSelectors from '../../redux/media/selectors';
import KEYS from '../../redux/static/keys';
import MEDIA_KEYS from '../../redux/media/keys';
import { objectWithKeys } from '../../redux/static/helpers';
import { mediaByKey } from '../../redux/media/helpers';
import CenteredBlock from '../../components/CenteredBlock/';
import LinkButton from '../../components/LinkButton';
import Markdown from '../../components/Markdown';

const CONTENT_KEYS = [
    KEYS.teamPageTitle,
    KEYS.teamPageSubtitle,
    KEYS.teamPageVolunteerTitle,
    KEYS.teamPageVolunteerSubtitle,
    KEYS.teamPageVolunteerBody
];

const TeamPage = ({ allContent, allMedia, teamMembers, shouldUpdate, updateTeamMembers }) => {
    const content = objectWithKeys(allContent, CONTENT_KEYS);
    const headerImage = mediaByKey(allMedia, MEDIA_KEYS.teamPageHeaderImage);
    useEffect(() => {
        if (shouldUpdate) {
            updateTeamMembers();
        }
    }, []);

    return (
        <Page className="TeamPage" pageTitle="Team" metaDesc={content.teamPageSubtitle}>
            <HeaderImage
                image={headerImage}
                alt="Header image"
            >
                <BasicHeader title={content.teamPageTitle} body={content.teamPageSubtitle} />
            </HeaderImage>
            <TeamMemberGrid teamMembers={teamMembers} />
            <Divider lg />

            <BlockSection title={content.teamPageVolunteerTitle} subtitle={content.teamPageVolunteerSubtitle}>
                <Markdown source={content.teamPageVolunteerBody} />
                <LinkButton to="/volunteers" text="More about volunteering" />
            </BlockSection>
            <CenteredBlock>
            </CenteredBlock>
            <Divider lg />
            <ContactForm />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    teamMembers: ContentSelectors.teammembersByPriority(state),
    shouldUpdate: ContentSelectors.teammembersShouldUpdate(state)
});

const mapDispatchToProps = dispatch => ({
    updateTeamMembers: () => dispatch(ContentActions.updateTeamMembers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamPage);

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

const CONTENT_KEYS = [KEYS.teamPageTitle, KEYS.teamPageSubtitle, KEYS.joinCommunity, KEYS.joinCommunityBody];

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
                <BasicHeader title={content.teamPageTitle} bodyText={content.teamPageSubtitle} />
            </HeaderImage>
            <TeamMemberGrid teamMembers={teamMembers} />
            <Divider lg />
            <BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody}>
                <ContactForm />
            </BlockSection>
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    allContent: StaticContentSelectors.content(state),
    allMedia: MediaSelectors.media(state),
    teamMembers: ContentSelectors.teammembers(state),
    shouldUpdate: ContentSelectors.teammembersShouldUpdate(state)
});

const mapDispatchToProps = dispatch => ({
    updateTeamMembers: () => dispatch(ContentActions.updateTeamMembers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamPage);

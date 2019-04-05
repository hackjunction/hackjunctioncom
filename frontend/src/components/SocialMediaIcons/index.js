import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import SocialMediaIcon from '../SocialMediaIcon/';

import { socialmedias } from '../../redux/socialmedias/selectors';
import { updateSocialMedias } from '../../redux/socialmedias/actions';

const SocialMediaIcons = React.memo(({ data }) => {

    useEffect(() => {
        updateSocialMedias()
    }, [])

    function renderIcons() {
        return data.map(item => {
            return <SocialMediaIcon key={item._id} image={item.icon} alt={item.name} link={item.link} />;
        });
    }

    return <div className="SocialMediaIcons">{renderIcons()}</div>;
});

const mapStateToProps = (state) => ({
    data: socialmedias(state)
})

const mapDispatchToProps = dispatch => ({
    updateSocialMedias: () => dispatch(updateSocialMedias())
})

export default connect(mapStateToProps, mapDispatchToProps)(SocialMediaIcons);

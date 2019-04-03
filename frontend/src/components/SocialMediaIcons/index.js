import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import SocialMediaIcon from '../SocialMediaIcon/';

import { socialmedias } from '../../redux/socialmedias/selectors';

const SocialMediaIcons = React.memo(({ data }) => {
    function renderIcons() {
        return data.map(item => {
            return <SocialMediaIcon key={item._id} image={item.icon} alt={item.alt} link={item.link} />;
        });
    }

    return <div className="SocialMediaIcons">{renderIcons()}</div>;
});

const mapStateToProps = (state) => ({
    data: socialmedias(state)
})

export default connect(mapStateToProps)(SocialMediaIcons);

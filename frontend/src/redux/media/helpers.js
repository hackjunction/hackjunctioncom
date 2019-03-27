import _ from 'lodash';
import MEDIA_KEYS from './keys';

export const mediaObjectWithKeys = (medias, selectKeys = []) => {
    const res = {};

    _.each(selectKeys, selectKey => {
        if (typeof selectKey == 'undefined') throw new Error('Trying to get undefined media key');
        const item = _.find(medias, ({ key, content }) => key.trim() === selectKey);
        res[selectKey] = item ? item.media : null;
    });

    return res;
};

export const mediaByKey = (medias, selectKey) => {
    let item = _.find(medias, ({ key, media }) => key.trim() === selectKey);

    if (!item) {
        item = _.find(medias, ({ key, media }) => key.trim() === MEDIA_KEYS.defaultBackgroundImage);
    }

    return item ? item.media : null;
};

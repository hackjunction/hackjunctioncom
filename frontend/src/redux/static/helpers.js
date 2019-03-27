import _ from 'lodash';
import config from '../../services/config';

export const objectWithKeys = (content, selectKeys) => {
    const res = {};

    _.each(selectKeys, selectKey => {
        if (typeof selectKey == 'undefined') throw new Error('Trying to get undefined content key');
        const item = _.find(content, ({ key, content }) => key.trim() === selectKey);
        res[selectKey] = item ? item.content : config.IS_DEBUG ? `{${selectKey}}` : null;
    });

    return res;
};

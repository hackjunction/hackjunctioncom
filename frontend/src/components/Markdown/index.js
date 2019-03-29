import React from 'react';
import './style.scss';

import ReactMarkdown from 'react-markdown';
import YouTube from 'react-youtube';
import breaks from 'remark-breaks';

import { isYoutubeUrl } from '../../utils/regex';

const Markdown = ({ source }) => {
    return (
        <div className="Markdown">
            <ReactMarkdown
                plugins={[breaks]}
                source={source}
                renderers={{
                    delete: () => <br />,
                    image: ({ src, alt }) => {
                        let youtubeId = isYoutubeUrl(src);
                        if (youtubeId) {
                            return (
                                <YouTube
                                    videoId={youtubeId}
                                    containerClassName="Markdown--youtube"
                                    className="Markdown--youtube__video"
                                    opts={{
                                        width: '100%',
                                        height: '100%',
                                        playerVars: {
                                            cc_lang_pref: 'en-US',
                                            cc_load_policy: 1
                                        }
                                    }}
                                />
                            );
                        }

                        return <img className="Markdown--image" alt={alt} src={src} />;
                    }
                }}
            />
        </div>
    );
};

export default Markdown;

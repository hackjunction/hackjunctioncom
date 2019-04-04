import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import YouTube from 'react-youtube';
import breaks from 'remark-breaks';

import { content as selectContent } from '../../redux/staticcontent/selectors';

import { isYoutubeUrl } from '../../utils/regex';

class Markdown extends PureComponent {
    render() {
        const { source } = this.props;
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
    }
}

const mapStateToProps = (state, ownProps) => {
    const { sourceKey } = ownProps;
    const content = selectContent(state);

    return {
        source: content[sourceKey] || ownProps.source
    }
}

export default connect(mapStateToProps)(Markdown);

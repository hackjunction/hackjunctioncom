import React, { PureComponent } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import ImgBlock from "../../../components/ImgBlock";
import Page from "../../PageHOC";
import DividerLine from "../../../components/DividerLine";
import BlockSection from "../../../components/BlockSection";
import Button from "../../../components/Button";
import SingleColumnSection from "../../../components/SingleColumnSection";

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/partners",
        linkText: "For partners",
    },
    {
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/volunteers",
        linkText: "For volunteers",
    },
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/calendar",
        linkText: "Calendar",
    },
];

class ReferencesPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require("../../../assets/images/logos/logos2.png"),
                require("../../../assets/images/logos/logos3.png"),
                require("../../../assets/images/logos/logos4.png"),
                require("../../../assets/images/logos/logos5.png"),
                require("../../../assets/images/logos/logos6.png"),
                require("../../../assets/images/logos/logos7.png"),
                require("../../../assets/images/logos/logos8.png"),
            ],
            selectedImage: "../../../assets/images/logos/logos2",
        };
    }

    componentDidMount() {
        let intervalId = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.selectedImage === this.state.images[0]) {
                    return {
                        selectedImage: this.state.images[1],
                    };
                } else {
                    return {
                        selectedImage: this.state.images[0],
                    };
                }
            });
        }, 3000);

        this.setState({
            intervalId,
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        return (
            <Page
                className="ReferencesPage"
                pageTitle="References"
                metaDescKey={KEYS.ReferencesPageSubtitle}
                ogImageKey={MEDIA_KEYS.ReferencesPageHeaderImage}
            >
                <SingleColumnSection halfpage>
                    <h1 className="topic">References & Testimonials</h1>

                    <div className="ReferencesPage--TopContent--Second">
                        <span>
                            “K Group is here at Junction because we believe that
                            in order to be able to meet the changing customer
                            needs we need to open up even more than we’ve done
                            before, look outside of our own box and have
                            somebody else challenge our thinking. Help us come
                            up with things we never even thought were possible.“
                        </span>
                        <p className="person-title">
                            Jussi Mantere, Director of CX & Design at Kesko
                        </p>
                        <Button
                            className="Default-button"
                            to
                            text="READ MORE"
                        />
                    </div>
                </SingleColumnSection>
                <div className="ReferencesPage--TopContent--Third">
                    <img src={this.state.selectedImage} width="80%" />
                </div>

                <BlockSection
                    halfpage
                    extra={
                        <>
                            <h3>Case Ericssson</h3>
                            <p>
                                In 2019 Ericsson attended Junction for the
                                second time as a Track Owner with two challenges
                                that had different goals: one to attract as many
                                participants as possible, and the other to work
                                on the themes of the real R&D pipeline, also
                                while offering a competitive element. The first
                                was titled “Security Awareness for Kids” and the
                                second “Greener City Transport with 5G”.
                            </p>
                            <p>
                                Security and usability seldom go hand-in-hand,
                                and one approach to this is through children:
                                they have most of the same security concerns as
                                adults, but as users are very different, very
                                complicated solutions do not work here. In the
                                5G challenge, Ericsson first had multiple
                                iterations of the idea for the challenge and
                                once decided, prepared the necessary tech (APIs,
                                cloud, visual application).
                            </p>
                            <p>
                                “At the end 36 teams took our Security awareness
                                for kids -challenge and 14 teams our Greener
                                city transport with 5G -challenge. Just amazing!
                                But of course, the greatest thing of all was
                                that Tassu Passu won Junction 2019’s main prize
                                — such a perfect ending for an amazing
                                adventure!”
                            </p>
                            <Button
                                className="Default-button"
                                to
                                text="READ MORE"
                            />
                        </>
                    }
                >
                    <img
                        src={require("../../../assets/images/references/ericsson.png")}
                    />
                </BlockSection>
                <DividerLine />
                <BlockSection
                    halfpage
                    inverted
                    extra={
                        <>
                            <h3>Case Varian</h3>
                            <p>
                                Varian is a global medical device and treatment
                                company committed to fighting for a world
                                without the fear of cancer. Globally they have
                                over 10 000 employees. In Finland, 270
                                professionals develop radiation therapy
                                software, which is used to help patients of
                                every Finnish cancer clinic.
                            </p>
                            <p>
                                Varian participated in Junction 2019 with a
                                challenge on how to improve the workflow of the
                                physician when approving and reviewing a
                                treatment plan. The participants had access to
                                previous plans and a database API, along with
                                professionals from the Varian team.
                            </p>
                            <p>
                                The projects introduced collaborative aspects to
                                planning treatment between doctors and planners
                                in addition to improved visualization of various
                                kinds of data relevant to medical professionals.
                            </p>
                            <Button
                                className="Default-button"
                                to
                                text="READ MORE"
                            />
                        </>
                    }
                >
                    <img
                        src={require("../../../assets/images/references/varian.png")}
                    />
                </BlockSection>
            </Page>
        );
    }
}

export default ReferencesPage;

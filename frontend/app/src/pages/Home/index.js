import React, { PureComponent, Suspense } from "react";
import "./style.scss";

// import KEYS from "../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../redux/staticmedia/keys";

import InputButton from "../../components/InputButton";
import LinkButton from "../../components/LinkButton";
import { Grid, Typography } from "@material-ui/core";
import Button from "../../components/Button";
import EventsGridItem from "../../components/EventCard";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// const EventsMap = React.lazy(() => import("../../components/EventsMap"));

// const BOTTOM_LINKS = [
//     {
//         imageKey: MEDIA_KEYS.calendarPageHeaderImage,
//         imageAlt: "Link",
//         linkTo: "/calendar",
//         linkText: "Calendar",
//     },
//     {
//         imageKey: MEDIA_KEYS.partnerPageHeaderImage,
//         imageAlt: "Link",
//         linkTo: "/partners",
//         linkText: "For partners",
//     },
//     {
//         imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
//         imageAlt: "Link",
//         linkTo: "/volunteers",
//         linkText: "For volunteers",
//     },
// ];

class HomePage extends PureComponent {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {/* <EventCard
                        text="JunctionX Asia"
                        date="18.-23.06.2020, Asia"
                        image="https://media-exp1.licdn.com/dms/image/C5603AQGAsmoy5ja_Kw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=I206WUq_fyC7J04a2GJ-zZvchrzugfB3OJc4diHBZAc"
                    /> */}
                <Grid
                    container
                    item
                    md={12}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Typography variant="h1">J U N C T I O N</Typography>
                    <Typography variant="h5">
                        We organize epic hackathons and other tech events -
                        around the world, around the year.
                    </Typography>
                    <Grid item md={4}>
                        {/* <EventsGridItem event="text"></EventsGridItem> */}
                        <Button text="Read More" />
                    </Grid>
                </Grid>

                <Grid>
                    {/* <img
                        className="container-center-img"
                        src="https://live.staticflickr.com/65535/49091319657_bdbd52c70e_b.jpg"
                        alt="Junction 2019 Friday"
                    /> */}
                </Grid>
            </Grid>
        );
    }
}

export default HomePage;

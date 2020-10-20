import React, { PureComponent, Suspense } from 'react'
import './style.scss'

import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'

import { Link, Element } from 'react-scroll'

import SectionImage from '../../../components/SectionImage'
import { Grid } from '@material-ui/core'

import '../../../components/HeaderSection/style.scss'

import DividerLine from '../../../components/DividerLine'
import Page from '../../PageHOC'
import Button from '../../../components/Button'
import HeaderSection from '../../../components/HeaderSection'
import TrackGrid from '../../../components/TrackGrid'
import BlockSection from '../../../components/BlockSection'
import ChallengeGrid from '../../../components/ChallengeGrid'

import { challenges as selectChallenges } from '../../../redux/challenges/selectors'
import { connect } from 'react-redux'

/*const challenges = [
    {
        title: "Api Management",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus.",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["api"],
        key: 0,
    },
    {
        title: "cutting edge technologies",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'none',
        tags: ["technologies"],
        key: 1,
    },
    {
        title: "GameJam",
        desc: "Want to invent the coolest game ever? Now’s the time!",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),

            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["jam"],
        key: 2,
    },
    {
        title: "intelligent frameworks",
        desc: "Are you intelligent? Do you know something about frameworks? Great.",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'none',
        tags: ["frameworks"],
        key: 3,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["vitun hyvä", "ebin"],
        key: 4,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'none',
        tags: ["vitun hyvä", "ebin"],
        key: 5,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["vitun hyvä", "ebin"],
        key: 6,
    },
    {
        title: "Vitun hyvä",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'none',
        tags: ["vitun hyvä"],
        key: 7,
    },
    {
        title: "Ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["ebin"],
        key: 8,
    },
];*/
/*
const tracks = [
    {
        title: "Api Management",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus.",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'url("/card.png")',
        key: 0,
    },
    {
        title: "cutting edge technologies",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'url("/card.png")',
        key: 1,
    },
    {
        title: "GameJam",
        desc: "Want to invent the coolest game ever? Now’s the time!",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),

            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'url("/card.png")',
        key: 2,
    },
    {
        title: "intelligent frameworks",
        desc: "Are you intelligent? Do you know something about frameworks? Great.",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'url("/card.png")',
        key: 3,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'url("/card.png")',
        key: 4,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'url("/card.png")',
        key: 5,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'url("/card.png")',
        key: 6,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'url("/card.png")',
        key: 7,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'url("/card.png")',
        key: 8,
    },
];
*/
window.mobileCheck = function () {
  let check = false
  ;(function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}
const mobile = window.mobileCheck()

class Challenges extends PureComponent {
  render() {
    return (
      <Page
        className="Connected"
        pageTitle="Junction 2020 Connected"
        metaDescKey={KEYS.whoAreWeBody}
        ogImageKey={MEDIA_KEYS.homePageHeaderImage}
      >
        <HeaderSection
          title={/*"Tracks & "+*/ 'Challenges'}
          //body="The hackathon is divided into tracks based on different industries and themes. All tracks include multiple challenges you can choose to work on during the hackathon: and you can even combine challenges and submit your project to multiple ones!"
          body="The hackathon is divided into challenges based on different industries and themes. You can choose to work on multiple challenges during the hackathon: and you can even combine them and submit your project to multiple ones!"
        >
          <div className="button-margin" direction="row">
            <Button
              className="Button-small Button-apply"
              to="https://app.hackjunction.com/events/junction-2020-connected"
              text="Apply Here"
            />
            <Button className="Button-small" to="/info" text="Event info" />
          </div>
        </HeaderSection>

        {!mobile ? (
          <>
            <DividerLine />
            <SectionImage
              image={{
                url: require('../../../assets/images/Junction2019-Saturday-IljaSmelich-SeveralTracks1.png'),
              }}
              alt="Junction 2020 Connected"
            />
            <DividerLine />
          </>
        ) : null}

        <h2 className="HeaderSection--body ChallengeSubtitle">
          Here are the challenges for Junction 2020 Connected. Click the cards
          to read more about each challenge.
        </h2>
        <Element class="MobileLink" name="challenges" id="challenges" />
        <ChallengeGrid items={Object.values(this.props.challenges)} />
      </Page>
    )
  }
}

function MapStateToProps(state, ownProps) {
  var challenges = selectChallenges(state)
  console.log(challenges)
  return {
    challenges: challenges,
  }
}

export default connect(MapStateToProps)(Challenges)

import { combineReducers } from 'redux'

// Import the reducer from each module here, and add it to the combined reducer
import nav from './nav/reducer'
import staticcontent from './staticcontent/reducer'
import faq from './faq/reducer'
import job from './job/reducer'
import staticmedia from './staticmedia/reducer'
import events from './events/reducer'
import eventconcepts from './eventconcepts/reducer'
import kpis from './kpis/reducer'
import pages from './pages/reducer'
import partners from './partners/reducer'
import socialmedias from './socialmedias/reducer'
import stories from './stories/reducer'
import teammembers from './teammembers/reducer'
import testimonials from './testimonials/reducer'
import onlineevents from './onlineevents/reducer'
import challenges from './challenges/reducer'
import schedules from './schedules/reducer'
import misc from './misc/reducer'
import hubs from './hubs/reducer'

export default () =>
  combineReducers({
    nav,
    faq,
    job,
    staticcontent,
    staticmedia,
    events,
    eventconcepts,
    kpis,
    pages,
    partners,
    socialmedias,
    stories,
    schedules,
    teammembers,
    testimonials,
    onlineevents,
    challenges,
    misc,
    hubs,
  })

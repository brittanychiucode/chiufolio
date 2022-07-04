import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School'
import "react-vertical-timeline-component/style.min.css"

export default function Experiences() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3c005a'>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date='2021-Current'
                iconStyle={{background: "#3c005a", colo: ""}}
            >

            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

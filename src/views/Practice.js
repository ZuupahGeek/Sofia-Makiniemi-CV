import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './Practice.css'

import CarouselTheEverydayProject from '../components/Carousel/CarouselTheEverydayProject'
import CarouselTheGriefProject from '../components/Carousel/CarouselTheGriefProject';




export default function Practice() {
  return (
    <div className='project-page'>
    <Accordion transition transitionTimeout={250}>
    <AccordionItem header={
      <div>
        <p className='accordion-title'>The Grief Project</p>     
      </div>
    }>
      <div className='accordion-description'>
        <p>The Grief Projects focuses on the theme of grief in general, and my
        grief towards losing a sibling in specific.</p>
        <p>This project thus far consists of:</p>
        <ul>
          <li><i class="fa-solid fa-leaf"></i> A filmed monologue that turned into over 200 stills and a video piece. </li>
          <li><i class="fa-solid fa-leaf"></i> Monologue photographed with a 20 second interval.</li>
          <li><i class="fa-solid fa-leaf"></i> CMYK prints</li>
          <li><i class="fa-solid fa-leaf"></i> Collages</li>
          <li><i class="fa-solid fa-leaf"></i> 1 Scrapbook</li>
        </ul>
      </div>
      <CarouselTheGriefProject/>
    </AccordionItem>

    <AccordionItem header={
      <div>
        <p className='accordion-title'>The Everyday Project</p>
            
      </div>
    }>
      <div className='accordion-description'>
        <p>
          The everyday project is all about experiencing and reflecting about
          your everyday life. I wanted to create a relatable way of communicating how I experience my life as someone who is neuro divergent, struggling with mental health, body dysmorphia and social
          anxiety. And what is more relatable than putting on underwear? By
          putting on too small pants I want to tell you about my daily struggles, and for you to start reflecting on your own daily routines.
        </p>
        <p>
          The project wants to highlight neurodivergent minds, body dysmorphia, social anxiety and many more neurological and mental
          states. Even though these photos and videos show my body, I want
          the audience to view it with themselves in mind. What feelings do
          these images evoke? Do you feel uncomfortable or empowered?
          How would you illustrate your mind with a pair of pants?
        </p>
      </div>
      <CarouselTheEverydayProject/>
    </AccordionItem>

    
  </Accordion>
  </div>
  );
}
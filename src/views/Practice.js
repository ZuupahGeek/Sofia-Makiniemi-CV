import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './Practice.css'

import CarouselComponent from '../components/Carousel/CarouselComponent'





export default function Practice() {
  return (
    <div className='project-page'>
    <Accordion>
    <AccordionItem header={
      <div>
        <p className='title'>What is Lorem Ipsum?</p>
            
      </div>
    }>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </AccordionItem>

    <AccordionItem header={
      <div>
        <p className='title'>What is Lorem Ipsum?</p>
            
      </div>
    }>
      Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
      vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
      vitae, accumsan auctor mi.
    </AccordionItem>

    <AccordionItem header={
      <div>
        <p className='title'>What is Lorem Ipsum?</p>
            
      </div>
    }>
      Suspendisse massa risus, pretium id interdum in, dictum sit amet
      ante. Fusce vulputate purus sed tempus feugiat.
    </AccordionItem>
  </Accordion>
  </div>
  );
}
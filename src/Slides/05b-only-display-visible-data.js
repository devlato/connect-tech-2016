import React from 'react';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';
import SvgWrapper from '../Components/SvgWrapper';
import image from '../../public/occlusion-culling.jpg';
import './05-only-display-visible-data.css';

export default () => (
  <Stepper numSteps={5}>
    <Slide>
      <h1>Only display visible data</h1>

      <p>Video games do this ('Occlusion Culling')</p>

      <Step index={0} exactMatch>
        <div>
          <div className='Spacer' />
          <MarioSvg />
        </div>
      </Step>

      <ul>
        <Step><li>Given a perspective of a user/camera</li></Step>
        <Step><li>Which objects are in the direction being viewed</li></Step>
        <Step><li>Which ones aren't obscurred by other items (eg walls)</li></Step>
      </ul>

      <Step>
        <img
          className='OcclusionImage'
          role='presentation'
          src={image}
        />
      </Step>
    </Slide>
  </Stepper>
);

function MarioSvg () {
  return (
    <SvgWrapper viewBoxHeight='385' viewBoxWidth='361' width='150' height='150'>
      <rect x='0' y='0' width='362' height='386' fill='#ffffff' strokeWidth={0} />
      <path d='M120 0L120 24L144 24L144 0Z' fill='#ff0000' strokeWidth={0} />
      <path d='M144 0L144 24L168 24L168 0Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 0L168 24L192 24L192 0Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 0L192 24L216 24L216 0Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 0L216 24L240 24L240 0Z' fill='#ff0000' strokeWidth={0} />
      <path d='M96 24L96 48L120 48L120 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M120 24L120 48L144 48L144 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M144 24L144 48L168 48L168 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 24L168 48L192 48L192 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 24L192 48L216 48L216 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 24L216 48L240 48L240 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M240 24L240 48L264 48L264 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M264 24L264 48L288 48L288 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M288 24L288 48L312 48L312 24Z' fill='#ff0000' strokeWidth={0} />
      <path d='M96 48L96 72L120 72L120 48Z' fill='#857d4c' strokeWidth={0} />
      <path d='M120 48L120 72L144 72L144 48Z' fill='#857d4c' strokeWidth={0} />
      <path d='M144 48L144 72L168 72L168 48Z' fill='#857d4c' strokeWidth={0} />
      <path d='M168 48L168 72L192 72L192 48Z' fill='#ffebad' strokeWidth={0} />
      <path d='M192 48L192 72L216 72L216 48Z' fill='#ffebad' strokeWidth={0} />
      <path d='M216 48L216 72L240 72L240 48Z' fill='#857d4c' strokeWidth={0} />
      <path d='M240 48L240 72L264 72L264 48Z' fill='#ffebad' strokeWidth={0} />
      <path d='M72 72L72 96L96 96L96 72Z' fill='#857d4c' strokeWidth={0} />
      <path d='M96 72L96 96L120 96L120 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M120 72L120 96L144 96L144 72Z' fill='#857d4c' strokeWidth={0} />
      <path d='M144 72L144 96L168 96L168 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M168 72L168 96L192 96L192 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M192 72L192 96L216 96L216 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M216 72L216 96L240 96L240 72Z' fill='#857d4c' strokeWidth={0} />
      <path d='M240 72L240 96L264 96L264 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M264 72L264 96L288 96L288 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M288 72L288 96L312 96L312 72Z' fill='#ffebad' strokeWidth={0} />
      <path d='M72 96L72 120L96 120L96 96Z' fill='#857d4c' strokeWidth={0} />
      <path d='M96 96L96 120L120 120L120 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M120 96L120 120L144 120L144 96Z' fill='#857d4c' strokeWidth={0} />
      <path d='M144 96L144 120L168 120L168 96Z' fill='#857d4c' strokeWidth={0} />
      <path d='M168 96L168 120L192 120L192 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M192 96L192 120L216 120L216 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M216 96L216 120L240 120L240 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M240 96L240 120L264 120L264 96Z' fill='#857d4c' strokeWidth={0} />
      <path d='M264 96L264 120L288 120L288 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M288 96L288 120L312 120L312 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M312 96L312 120L336 120L336 96Z' fill='#ffebad' strokeWidth={0} />
      <path d='M72 120L72 144L96 144L96 120Z' fill='#857d4c' strokeWidth={0} />
      <path d='M96 120L96 144L120 144L120 120Z' fill='#857d4c' strokeWidth={0} />
      <path d='M120 120L120 144L144 144L144 120Z' fill='#ffebad' strokeWidth={0} />
      <path d='M144 120L144 144L168 144L168 120Z' fill='#ffebad' strokeWidth={0} />
      <path d='M168 120L168 144L192 144L192 120Z' fill='#ffebad' strokeWidth={0} />
      <path d='M192 120L192 144L216 144L216 120Z' fill='#ffebad' strokeWidth={0} />
      <path d='M216 120L216 144L240 144L240 120Z' fill='#857d4c' strokeWidth={0} />
      <path d='M240 120L240 144L264 144L264 120Z' fill='#857d4c' strokeWidth={0} />
      <path d='M264 120L264 144L288 144L288 120Z' fill='#857d4c' strokeWidth={0} />
      <path d='M288 120L288 144L312 144L312 120Z' fill='#857d4c' strokeWidth={0} />
      <path d='M120 144L120 168L144 168L144 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M144 144L144 168L168 168L168 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M168 144L168 168L192 168L192 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M192 144L192 168L216 168L216 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M216 144L216 168L240 168L240 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M240 144L240 168L264 168L264 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M264 144L264 168L288 168L288 144Z' fill='#ffebad' strokeWidth={0} />
      <path d='M48 168L48 192L72 192L72 168Z' fill='#857d4c' strokeWidth={0} />
      <path d='M72 168L72 192L96 192L96 168Z' fill='#857d4c' strokeWidth={0} />
      <path d='M96 168L96 192L120 192L120 168Z' fill='#857d4c' strokeWidth={0} />
      <path d='M120 168L120 192L144 192L144 168Z' fill='#857d4c' strokeWidth={0} />
      <path d='M144 168L144 192L168 192L168 168Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 168L168 192L192 192L192 168Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 168L192 192L216 192L216 168Z' fill='#857d4c' strokeWidth={0} />
      <path d='M216 168L216 192L240 192L240 168Z' fill='#857d4c' strokeWidth={0} />
      <path d='M0 192L0 216L24 216L24 192Z' fill='#ffebad' strokeWidth={0} />
      <path d='M24 192L24 216L48 216L48 192Z' fill='#ffebad' strokeWidth={0} />
      <path d='M48 192L48 216L72 216L72 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M72 192L72 216L96 216L96 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M96 192L96 216L120 216L120 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M120 192L120 216L144 216L144 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M144 192L144 216L168 216L168 192Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 192L168 216L192 216L192 192Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 192L192 216L216 216L216 192Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 192L216 216L240 216L240 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M240 192L240 216L264 216L264 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M264 192L264 216L288 216L288 192Z' fill='#857d4c' strokeWidth={0} />
      <path d='M288 192L288 216L312 216L312 192Z' fill='#ffebad' strokeWidth={0} />
      <path d='M312 192L312 216L336 216L336 192Z' fill='#ffebad' strokeWidth={0} />
      <path d='M336 192L336 216L360 216L360 192Z' fill='#ffebad' strokeWidth={0} />
      <path d='M0 216L0 240L24 240L24 216Z' fill='#ffebad' strokeWidth={0} />
      <path d='M24 216L24 240L48 240L48 216Z' fill='#ffebad' strokeWidth={0} />
      <path d='M48 216L48 240L72 240L72 216Z' fill='#ffebad' strokeWidth={0} />
      <path d='M96 216L96 240L120 240L120 216Z' fill='#857d4c' strokeWidth={0} />
      <path d='M120 216L120 240L144 240L144 216Z' fill='#857d4c' strokeWidth={0} />
      <path d='M144 216L144 240L168 240L168 216Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 216L168 240L192 240L192 216Z' fill='#ffebad' strokeWidth={0} />
      <path d='M192 216L192 240L216 240L216 216Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 216L216 240L240 240L240 216Z' fill='#ff0000' strokeWidth={0} />
      <path d='M240 216L240 240L264 240L264 216Z' fill='#ff0000' strokeWidth={0} />
      <path d='M264 216L264 240L288 240L288 216Z' fill='#857d4c' strokeWidth={0} />
      <path d='M288 216L288 240L312 240L312 216Z' fill='#857d4c' strokeWidth={0} />
      <path d='M312 216L312 240L336 240L336 216Z' fill='#ffebad' strokeWidth={0} />
      <path d='M336 216L336 240L360 240L360 216Z' fill='#ffebad' strokeWidth={0} />
      <path d='M0 240L0 264L24 264L24 240Z' fill='#ffebad' strokeWidth={0} />
      <path d='M24 240L24 264L48 264L48 240Z' fill='#ffebad' strokeWidth={0} />
      <path d='M96 240L96 264L120 264L120 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M120 240L120 264L144 264L144 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M144 240L144 264L168 264L168 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 240L168 264L192 264L192 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 240L192 264L216 264L216 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 240L216 264L240 264L240 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M240 240L240 264L264 264L264 240Z' fill='#ff0000' strokeWidth={0} />
      <path d='M312 240L312 264L336 264L336 240Z' fill='#857d4c' strokeWidth={0} />
      <path d='M72 264L72 288L96 288L96 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M96 264L96 288L120 288L120 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M120 264L120 288L144 288L144 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M144 264L144 288L168 288L168 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 264L168 288L192 288L192 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 264L192 288L216 288L216 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 264L216 288L240 288L240 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M240 264L240 288L264 288L264 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M264 264L264 288L288 288L288 264Z' fill='#ff0000' strokeWidth={0} />
      <path d='M288 264L288 288L312 288L312 264Z' fill='#857d4c' strokeWidth={0} />
      <path d='M312 264L312 288L336 288L336 264Z' fill='#857d4c' strokeWidth={0} />
      <path d='M48 288L48 312L72 312L72 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M72 288L72 312L96 312L96 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M96 288L96 312L120 312L120 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M120 288L120 312L144 312L144 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M144 288L144 312L168 312L168 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M168 288L168 312L192 312L192 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M192 288L192 312L216 312L216 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 288L216 312L240 312L240 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M240 288L240 312L264 312L264 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M264 288L264 312L288 312L288 288Z' fill='#ff0000' strokeWidth={0} />
      <path d='M288 288L288 312L312 312L312 288Z' fill='#857d4c' strokeWidth={0} />
      <path d='M312 288L312 312L336 312L336 288Z' fill='#857d4c' strokeWidth={0} />
      <path d='M24 312L24 336L48 336L48 312Z' fill='#857d4c' strokeWidth={0} />
      <path d='M48 312L48 336L72 336L72 312Z' fill='#857d4c' strokeWidth={0} />
      <path d='M72 312L72 336L96 336L96 312Z' fill='#ff0000' strokeWidth={0} />
      <path d='M96 312L96 336L120 336L120 312Z' fill='#ff0000' strokeWidth={0} />
      <path d='M120 312L120 336L144 336L144 312Z' fill='#ff0000' strokeWidth={0} />
      <path d='M216 312L216 336L240 336L240 312Z' fill='#ff0000' strokeWidth={0} />
      <path d='M240 312L240 336L264 336L264 312Z' fill='#ff0000' strokeWidth={0} />
      <path d='M264 312L264 336L288 336L288 312Z' fill='#ff0000' strokeWidth={0} />
      <path d='M288 312L288 336L312 336L312 312Z' fill='#857d4c' strokeWidth={0} />
      <path d='M312 312L312 336L336 336L336 312Z' fill='#857d4c' strokeWidth={0} />
      <path d='M24 336L24 360L48 360L48 336Z' fill='#857d4c' strokeWidth={0} />
      <path d='M48 336L48 360L72 360L72 336Z' fill='#857d4c' strokeWidth={0} />
      <path d='M72 336L72 360L96 360L96 336Z' fill='#857d4c' strokeWidth={0} />
      <path d='M48 360L48 384L72 384L72 360Z' fill='#857d4c' strokeWidth={0} />
      <path d='M72 360L72 384L96 384L96 360Z' fill='#857d4c' strokeWidth={0} />
      <path d='M96 360L96 384L120 384L120 360Z' fill='#857d4c' strokeWidth={0} />
    </SvgWrapper>
  );
}

import React from 'react'
import Me from '../../img/profileTransparent.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-hello'> Hello, my name is </h2>
          <h1 className='intro-name'> Evelyn Rodriguez </h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'> Web Developer </div>
              <div className='intro-title-item'> We Developer </div>
              <div className='intro-title-item'> W Developer </div>
            </div>
          </div>
          <div className='intro-desc'>
            Lorem ipsum I design things, I create websites woo hoo react create react app. This is crazyyyy. Let me try to squeeze in one more line. I am a bootcamp grad from Brooklyn. I love pizza 
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='intro-bg'> </div>
        <img src={Me} alt='' className='intro-img' />
      </div>
    </div>
  )
}

export default Intro
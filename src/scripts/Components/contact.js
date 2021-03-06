import React from 'react';

import twitterIcon from './Icons/twitter.png';
import githubIcon from './Icons/github.png';
import instagramIcon from './Icons/instagram.png';
import websiteIcon from './Icons/website.png';
import SocialIcons from './socialmediaicons';
// import content from '../content';

const contact = {
  github: 'https://github.com/prashant-acharya',
  instagram: 'https://instagram.com/prashant_acharya_',
  twitter: 'https://twitter.com/dev_prashaant',
  blog: 'https://bigomega.dev'
};

const { twitter, github, instagram, blog } = contact;

const Contact = () => (
  <>
    <h2 style={{ textAlign: 'center' }}>Hit me up 😉</h2>

    <div className='icons-container'>
      <SocialIcons image={twitterIcon} link={twitter} name='Twitter' />
      <SocialIcons image={githubIcon} link={github} name='GitHub' />
      <SocialIcons image={instagramIcon} link={instagram} name='Instagram' />
      <SocialIcons image={websiteIcon} link={blog} name='Blog' />
    </div>

    <p className='icons8' style={{ textAlign: 'center', fontSize: 12 }}>
      <a href='https://icons8.com/' target='_blank' style={{ color: 'black' }}>
        icons from icons8.com
      </a>
    </p>
  </>
);

export default Contact;

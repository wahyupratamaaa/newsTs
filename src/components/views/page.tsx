import React from 'react';
import Section from './section';
import Tag from './tag';
import SampulTag from './sampultag';
import Slide from './slide';
import Text from '../views/text';
import Cardnews from '../views/cardnews';
import Tagv2 from './tagv2';

const Page = () => {
  return (
    <>
      <Section />
      <Tag />
      <SampulTag />
      <Slide />
      <Text />
      <Cardnews />
      <Tagv2 />
    </>
  );
};

export default Page;

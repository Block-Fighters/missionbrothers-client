import React, { useState } from 'react';
import ImageLoader from '../ImageLoader/ImageLoader';
import { $Active, $ButtonCheck, $ActiveText } from './style';

const MissionPlay = () => {
  const [imgUp, setImgUp] = useState();
  console.log(imgUp);

  return (
    <div>
      <$Active>
        <$ActiveText>활동인증</$ActiveText>
        <$ButtonCheck>인증하기</$ButtonCheck>
      </$Active>
      <ImageLoader setImage={setImgUp} />
    </div>
  );
};

export default MissionPlay;

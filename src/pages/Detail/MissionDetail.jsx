import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  $Small,
  $Title,
  $Image,
  $titleDiv,
  $Line,
  $Table1,
  $Table2,
  $TableText1,
  $TableText2,
  $TotalDiv,
  $LeftDiv,
} from '../Detail/style';
import JoinSticky from '../../components/Join/JoinSticky';
// import MissionPlay from '../../components/MissionPlay/MissionPlay';
import dateFormat from '../../hooks/dateFormat';

function MissionDetail() {
  const { id } = useParams();
  const [mission, setMission] = useState(null);

  const getMissionDetail = async () => {
    try {
      const missionApiUrl = `http://localhost:8000/api/mission/detail/${id}`;
      const response = await axios.get(missionApiUrl);
      setMission(response.data.postData);
    } catch (error) {
      if (error.response.status === 404) {
        console.log('404 Error');
      }
    }
  };

  useEffect(() => {
    getMissionDetail();
  }, []);

  return (
    <div>
      <$titleDiv>
        <$Line>
          <$Small>{mission?.category}미션</$Small>
          <$Title>{mission?.missionTitle}</$Title>
        </$Line>
      </$titleDiv>
      <div>
        <$TotalDiv>
          <$LeftDiv>
            <$Image src={mission?.img} />
            <div>
              <div>
                <$Table1>
                  <$TableText1>모집기간</$TableText1>
                </$Table1>
                <$Table2>
                  <$TableText2>
                    {dateFormat(mission?.recruitmentEnd)}
                  </$TableText2>
                </$Table2>
              </div>
              <div>
                <$Table1 style={{ borderBottom: '1px solid #999999' }}>
                  <$TableText1>미션기간</$TableText1>
                </$Table1>
                <$Table2 style={{ borderBottom: '1px solid #999999' }}>
                  <$TableText2>
                    {dateFormat(mission?.missionStart)}~
                    {dateFormat(mission?.missionEnd)}
                  </$TableText2>
                </$Table2>
              </div>

              <$Line
                style={{ paddingTop: '50px', width: '655px', color: '#BABABA' }}
              ></$Line>
              <div style={{ marginTop: '50px' }}>
                {React.createElement('div', {
                  dangerouslySetInnerHTML: { __html: mission?.rule },
                })}
              </div>

              {/* <MissionPlay /> */}
            </div>
          </$LeftDiv>
          <JoinSticky />
        </$TotalDiv>
      </div>
    </div>
  );
}

export default MissionDetail;

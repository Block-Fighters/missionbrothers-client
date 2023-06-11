import React , { useEffect, useParams , useState }  from 'react';
// import {
//   $Small,
//   $Title,
//   $Image,
//   $titleDiv,
//   $Line,
//   $Table1,
//   $Table2,
//   $TableText1,
//   $TableText2,
//   $TotalDiv,
//   $LeftDiv,
// } from '../Detail/style';
// import JoinSticky from '../../components/Join/JoinSticky';

function MissionDetail() {
  // eslint-disable-next-line
  let {post} = useParams()
  // eslint-disable-next-line
  const [mission, setMission ] =useState([]);

  // eslint-disable-next-line
  const getMission = async () => {
    // eslint-disable-next-line
    let url = `http://localhost:8000/api/mission/list/${post}`;
    // eslint-disable-next-line
    let response = await fetch(url);
    // eslint-disable-next-line
    let data = await response.json(); 
    console.log(data);
    setMission(data);
  };

  useEffect(()=>{
    getMission();
  },[]);

  return (
    <div>
      
      {/* <$titleDiv>
        <$Line>
          <$Small>{mission? .postData.type}</$Small>
          <$Title>{mission? .postData.title}</$Title>
        </$Line>
      </$titleDiv>
      <div>
        <$TotalDiv>
          <$LeftDiv>
            <$Image src={mission? .postData.img}/>
            <div>
              <div>
                <$Table1>
                  <$TableText1>모집기간</$TableText1>
                </$Table1>
                <$Table2>
                  <$TableText2>{detailDate.recruitmentPeriod}</$TableText2>
                </$Table2>
              </div>
              <div>
                <$Table1 style={{ borderBottom: '1px solid #999999' }}>
                  <$TableText1>미션기간</$TableText1>
                </$Table1>
                <$Table2 style={{ borderBottom: '1px solid #999999' }}>
                  <$TableText2>{detailDate.missionPeriod}</$TableText2>
                </$Table2>
              </div>
              <$Line
                style={{ paddingTop: '50px', width: '655px', color: '#BABABA' }}
              ></$Line>
              <div style={{ marginTop: '50px' }}>
                {React.createElement('div', {
                  dangerouslySetInnerHTML: { __html: detailDate.rule },
                })}
              </div>
            </div>
          </$LeftDiv>
          <JoinSticky />
        </$TotalDiv>
      </div> */}
    </div>
  );
}

export default MissionDetail;

import React, { useEffect, useState } from 'react';
import { $CardListDiv, $CardDiv, $Image, $Text, $Title } from './style';

import img from '../../../assets/MissionImg/Running.png';
import recruitingMissionData from './RecruitingMissionData';

function RecruitingMission() {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [done, setDone] = useState(false);

  const fetchMoreMission = async () => {
    setFetching(true);

    try {
      const fetchData = recruitingMissionData[page];
      const mergeData = data.concat(...fetchData);
      setData(mergeData);
    } catch {
      setDone(true);
    }
    setPage((prev) => prev + 1);
    setFetching(false);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (
      scrollTop + clientHeight >= scrollHeight &&
      fetching === false &&
      !done
    ) {
      fetchMoreMission();
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener('scroll', handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const fetchData = recruitingMissionData[page];
    const mergeData = data.concat(...fetchData);
    setData(mergeData);
    const nowPage = page + 1;
    setPage(nowPage);
  }, []);

  return (
    <$CardListDiv>
      {data.map((el, index) => (
        <$CardDiv key={index} index={index + 1}>
          <$Image src={img} />
          <$Text>{el.type} 미션</$Text>
          <$Title>{el.title}</$Title>
          <$Text>모집기간 - {el.recruitmentPeriod}</$Text>
          <$Text>미션기간 - {el.missionPeriod}</$Text>
          <$Text>미션 참가비 - {el.fee.toLocaleString()}브로</$Text>
        </$CardDiv>
      ))}
    </$CardListDiv>
  );
}

export default RecruitingMission;

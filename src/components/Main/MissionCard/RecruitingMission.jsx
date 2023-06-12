
import React, { useEffect , useState } from 'react';
import { $CardListDiv ,$CardDiv, $Image, $Text, $Title } from './style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecruitingMission() {
  const [missionList, setMissionList] = useState([]);
  const navigate = useNavigate();
  // const [fetching, setFetching] = useState(false);
  // const [data, setData] = useState([]);
  // const [page, setPage] = useState(0);
  // const [done, setDone] = useState(false);

  // const fetchMoreMission = async () => {
  //   setFetching(true);

  //   try {
  //     const fetchData = recruitingMissionData[page];
  //     const mergeData = data.concat(...fetchData);
  //     setData(mergeData);
  //   } catch {
  //     setDone(true);
  //   }
  //   setPage((prev) => prev + 1);
  //   setFetching(false);
  // };

  // 스크롤 이벤트 핸들러
  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;
  //   if (
  //     scrollTop + clientHeight >= scrollHeight &&
  //     fetching === false &&
  //     !done
  //   ) {
  //     fetchMoreMission();
  //   }
  // };



  // useEffect(() => {
  //   // scroll event listener 등록
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     // scroll event listener 해제
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  const fetchMissions = async() => {
    const response = await axios.post('http://localhost:8000/api/mission/list');
    setMissionList(response.data.postData)
    
  };
  useEffect(() => {
    fetchMissions();
  }, []);

  return (
    <$CardListDiv>

      {missionList.map((post) => (
        <$CardDiv key={post?.index} index={post?.index + 1} id={post?.index} onClick={()=>{navigate(`/missionDetail/${post.id}`);}}>
          <$Image src={post?.img} />
          <$Text>{post?.category} 미션</$Text>
          <$Title>{post?.missionTitle}</$Title>
          <$Text>모집기간 - {post?.recruitmentEnd}</$Text>
          <$Text>미션기간 - {post?.missionStart}~{post?.missionEnd}</$Text>
          <$Text>미션 참가비 - 브로</$Text>
        </$CardDiv>
      ))}
      
    </$CardListDiv>
  );
}

export default RecruitingMission;

import React, { useRef, useState } from 'react';
import {
  $RegisterWrapper,
  $RegisterTopDiv,
  $MissionTypeSelect,
  $MissionTitleInput,
  $RegisterBottomDiv,
  $RegisterBottomLeftDiv,
  $RegisterBottomRightDiv,
  $MissionImage,
  $RegisterMissionDataDiv,
  $RegisterMissionInputBox,
  $RegisterMissionInput,
  $TextMargin,
  $RegisterButton,
  $RegisterButtonDiv,
} from './style';
import '@toast-ui/editor/dist/toastui-editor.css';
import ImageLoader from '../../components/ImageLoader/ImageLoader';
import { Editor } from '@toast-ui/react-editor';
import { getToday } from '../../hooks/getToday';
import { makeTimeStamp } from '../../hooks/makeTimeStamp';
import axios from 'axios';
import { useAccount } from 'wagmi';
import { missionBroContract } from '../../utils/getContract';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const RegisterMissionPage = () => {
  console.log('이더스 : ', ethers);
  const { address } = useAccount();
  const [type, setType] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState();
  const [recruitmentPeriod, setRecruitmentPeriod] = useState(getToday());
  const [missionStartDate, setMissionStartDate] = useState(getToday());
  const [missionEndDate, setMissionEndDate] = useState(getToday());
  const [fee, setFee] = useState(0);
  const [rewardMethod, setRewardMethod] = useState(0);
  const navigate = useNavigate();

  const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
  };

  console.log('쿠키', getCookie('id'));

  const onChangeType = (value) => {
    setType(value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeRecruitmentPeriod = (event) => {
    setRecruitmentPeriod(event.target.value);
  };

  const onChangeStartMissionDate = (event) => {
    setMissionStartDate(event.target.value);
  };

  const onChangeEndMissionDate = (event) => {
    setMissionEndDate(event.target.value);
  };

  const onChangeFee = (event) => {
    const weiToEther = ethers.utils.parseEther(event.target.value);
    setFee(weiToEther);
  };

  const onChangeRewardMethod = (value) => {
    setRewardMethod(value);
  };

  const editorRef = useRef();

  const onClickRegisterButton = () => {
    const rules = editorRef.current.getInstance().getHTML();

    if (type === null || title === null || fee === 0) {
      alert('필수값을 입력해주세요');
      return;
    }

    const registerData = {
      metamask: address,
      category: type,
      missionTitle: title,
      img: image,
      recruitmentEnd: makeTimeStamp(getToday()),
      missionStart: makeTimeStamp(missionStartDate) + 1,
      missionEnd: makeTimeStamp(missionEndDate),
      fee: fee.toString(),
      rewardMethod,
      content: rules,
      rule: rules,
      registrant: address,
    };

    const token = getCookie('id');

    registerMissionApi(registerData, token);
    console.log(registerData, token);
  };

  const registerMissionApi = async (data, token) => {
    const feeInWei = ethers.utils.formatEther(data.fee);
    try {
      const contractResult = await missionBroContract.methods
        .registerMission(
          data.missionTitle,
          feeInWei,
          data.recruitmentEnd,
          data.missionStart,
          data.missionEnd,
          data.rule,
          data.rewardMethod
        )
        .send({
          from: address,
          gas: 2000000,
          value: '10000000000000000',
        });
      console.log(contractResult);
    } catch (error) {
      console.log('에러발생', error);
    }

    const result = await axios.post(
      'http://localhost:8000/api/mission/register',
      {
        metamask: data.metamask,
        missionTitle: data.missionTitle,
        rule: data.rule,
        recruitmentEnd: data.recruitmentEnd,
        missionStart: data.missionStart,
        missionEnd: data.missionEnd,
        content: data.content,
        category: data.category,
        registrant: data.registrant,
        img: data.img,
      },
      {
        headers: { Authorization: 'Bearer ' + token },
      }
    );
    console.log(result);
    navigate('/');
  };

  return (
    <$RegisterWrapper>
      <$RegisterTopDiv>
        <$MissionTypeSelect
          defaultValue=""
          bordered={false}
          onChange={onChangeType}
          options={[
            {
              value: '',
              label: '미션 타입',
            },
            {
              value: '운동',
              label: '운동 미션',
            },
            {
              value: '공부',
              label: '공부 미션',
            },
            {
              value: '습관',
              label: '습관 미션',
            },
          ]}
        />
        <$MissionTitleInput onChange={onChangeTitle} />
      </$RegisterTopDiv>
      <$RegisterBottomDiv>
        <$RegisterBottomLeftDiv>
          {image ? (
            <$MissionImage src={image} />
          ) : (
            <ImageLoader setImage={setImage} />
          )}
          <$RegisterMissionDataDiv>
            <$RegisterMissionInputBox>
              <span>모집기간</span>
              <$RegisterMissionInput
                onChange={onChangeRecruitmentPeriod}
                type="date"
                min={getToday()}
              />
            </$RegisterMissionInputBox>

            <$RegisterMissionInputBox>
              <span>미션기간</span>
              <$RegisterMissionInput
                onChange={onChangeStartMissionDate}
                type="date"
                min={recruitmentPeriod}
                max={recruitmentPeriod}
              />
              <$TextMargin>~</$TextMargin>
              <$RegisterMissionInput
                onChange={onChangeEndMissionDate}
                type="date"
                min={missionStartDate}
              />
            </$RegisterMissionInputBox>

            <$RegisterMissionInputBox smallMargin={true}>
              <span>미션참가비</span>
              <$RegisterMissionInput onChange={onChangeFee} type="number" />
            </$RegisterMissionInputBox>

            <$RegisterMissionInputBox>
              <span>분배방식</span>

              <$MissionTypeSelect
                defaultValue={0}
                bordered={false}
                onChange={onChangeRewardMethod}
                options={[
                  {
                    value: 0,
                    label: '등수 지급',
                  },
                  {
                    value: 1,
                    label: '분할 지급',
                  },
                ]}
              />
            </$RegisterMissionInputBox>
          </$RegisterMissionDataDiv>

          <Editor
            ref={editorRef}
            initialValue=" "
            previewStyle="tab"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            autofocus={false}
          />
        </$RegisterBottomLeftDiv>
        <$RegisterBottomRightDiv>
          <$RegisterButtonDiv>
            <$RegisterButton onClick={onClickRegisterButton}>
              참가 신청
            </$RegisterButton>
          </$RegisterButtonDiv>
        </$RegisterBottomRightDiv>
      </$RegisterBottomDiv>
    </$RegisterWrapper>
  );
};

export default RegisterMissionPage;

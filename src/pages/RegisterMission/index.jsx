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

const RegisterMissionPage = () => {
  const [type, setType] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImage] = useState();
  const [recruitmentPeriod, setRecruitmentPeriod] = useState(getToday());
  const [missionStartDate, setMissionStartDate] = useState(getToday());
  const [missionEndDate, setMissionEndDate] = useState(getToday());
  const [fee, setFee] = useState(0);
  const [rewardMethod, setRewardMethod] = useState(1);

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
    setFee(event.target.value);
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
      type,
      title,
      image,
      recruitmentPeriod: makeTimeStamp(recruitmentPeriod),
      missionStartDate: makeTimeStamp(missionStartDate),
      missionEndDate: makeTimeStamp(missionEndDate),
      fee,
      rewardMethod,
      rules,
    };

    console.log(registerData);
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
                defaultValue={1}
                bordered={false}
                onChange={onChangeRewardMethod}
                options={[
                  {
                    value: 1,
                    label: '등수 지급',
                  },
                  {
                    value: 2,
                    label: '분할 지급',
                  },
                ]}
              />
            </$RegisterMissionInputBox>
          </$RegisterMissionDataDiv>

          <Editor
            ref={editorRef}
            initialValue=" "
            previewStyle="vertical"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
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

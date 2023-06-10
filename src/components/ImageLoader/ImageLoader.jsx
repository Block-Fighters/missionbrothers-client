import React, { useRef } from 'react';
import { $ImageLoaderDiv } from './style';
import { AiOutlinePlus } from 'react-icons/ai';
import { useCheckFile } from '../../hooks/useCheckFile';
import { awsS3Upload } from '../../utils/Aws';

const ImageLoader = (props) => {
  const fileRef = useRef(null);

  const onChangeFile = async (event) => {
    const file = event.target.files[0];

    const checkFile = useCheckFile(file);

    if (!checkFile) {
      return;
    }
    try {
      const imgUpload = { folder: 'Img', file };

      const data = await awsS3Upload(imgUpload);

      props.setImage(data.rtnRlt.Location);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current.click();
  };

  return (
    <>
      <$ImageLoaderDiv onClick={onClickImage}>
        <AiOutlinePlus />
        <span>이미지를 등록해주세요</span>
      </$ImageLoaderDiv>
      <input
        style={{ display: 'none' }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </>
  );
};

export default ImageLoader;

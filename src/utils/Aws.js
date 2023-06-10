import { v4 as uuidv4 } from "uuid";
import AWS from "aws-sdk";
window.Buffer = window.Buffer || require("buffer").Buffer;

// AWS S3 파일 업로드
export const awsS3Upload = async ({ folder, file }) => {
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const bucket = "block-s3";

  let rtnRlt;
  let msg;

  // AWS Config
  AWS.config.update({
    region: "ap-northeast-2",
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  });

  const extn = file.name.substring(
    file.name.lastIndexOf(".") + 1,
    file.name.length
  );

  const fileNm = uuidv4() + "." + extn;

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket,
      Key: folder + "/" + fileNm,
      Body: file,
    },
  });

  const promise = upload.promise();

  await promise.then(
    function (data) {
      // 이미지 업로드 성공
      console.log("data==>", data);
      rtnRlt = data;
      msg = "성공";
    },
    function (err) {
      // 이미지 업로드 실패
      console.log("error==>", err);
      rtnRlt = err;
      msg = "실패";
    }
  );

  return { rtnRlt, msg };
};
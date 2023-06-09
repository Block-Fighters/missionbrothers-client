export const useCheckFile = (file) => {
  if (!file?.size) {
    alert('파일이 없습니다.');
    return false;
  }

  if (
    !file.type.includes('jpeg') &&
    !file.type.includes('png') &&
    !file.type.includes('jpg') &&
    !file.type.includes('webp') &&
    !file.type.includes('webp')
  ) {
    alert('jpeg, png, jpg, webp, gif 파일만 업로드 가능합니다.');
    return false;
  }

  return true;
};

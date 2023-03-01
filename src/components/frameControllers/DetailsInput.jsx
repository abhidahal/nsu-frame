import React from 'react';

// Components
import Upload from '../toolbox/Upload';
import CustomText from '../toolbox/InputText';

const Inputs = ({
  checked,
  setchecked,
  checkedGuild,
  setcheckedGuild,
  handleChange,
  handleChangeGuild,
  uploadedImage,
  setUploadedImage,
  userName,
  setUsername,
  guildName,
  setGuildname,
  fontFamily,
  setFontFamily,
  bgColor,
  setBgColor,
  fontColor,
  setFontColor,
  alignment,
  bgColorGuild,
  setBgColorGuild,
  fontColorGuild,
  setFontColorGuild,
  handleAlignment,
  fontFamilyGuild,
  setFontFamilyGuild,
  align,
  setHeight,
  setWidth,
}) => (
  <div>
    <Upload
      uploadedImage={uploadedImage}
      setUploadedImage={setUploadedImage}
      setHeight={setHeight}
      setWidth={setWidth}
    />
  </div>
);

export default Inputs;

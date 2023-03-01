import React, { useState, useRef } from 'react';

// Libraries
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import Helmet from 'react-helmet';

// Components
import Inputs from '../components/frameControllers/DetailsInput';
import Download from '../components/toolbox/Download';
import CanvasStage from '../components/canvas/Stage';

// Assets
import frameData from '../../config/frameData';

const Container3 = styled.h1`
  ${tw`
   w-94
   pt-2
   m-auto
   sm:w-full
`}
`;

const C1 = styled.div`
  ${tw`
  mt-5
  mlg:mt-0
  `}

  background-color: #333333;
  padding: 1rem;
  border-radius: 4px;
  width: 100%;
`;

const C3 = styled.div`
  ${tw`
  `}
`;

const C2 = styled.div`
  ${tw`
    flex
    gap-20
    mt-18
    mlg:grid
    mlg:gap-0
  `}
`;

const Container = styled.div`
  ${tw`
    bg-color-secondary
    h-full
    grid
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    `}
`;

const FRAMES = {
  ONE: frameData.frames.ONE,
  TWO: frameData.frames.TWO,
};

const align = ['center', 'left', 'right'];
let i = 0;

const Heading1 = styled.h1`
  ${tw`
  font-normal
  pl-4
  text-left
  mt-2
  text-color-bright
 `}
  font-size: 1.5rem;
`;

const Home = () => {
  const [selectedFrame, setSelectedFrame] = useState(FRAMES.ONE);
  const [uploadedImage, setUploadedImage] = useState();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [userName, setUserName] = useState('Your Name');
  const [guildName, setGuildName] = useState('Guild Name');
  const [checked, setchecked] = useState(false);
  const [checkedGuild, setcheckedGuild] = useState(false);
  const [fontFamily, setFontFamily] = useState(null);
  const [fontFamilyGuild, setFontFamilyGuild] = useState(null);
  const [fontColorGuild, setFontColorGuild] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [bgColorGuild, setBgColorGuild] = useState(null);
  const [fontColor, setFontColor] = useState(null);
  const [alignment, setAlignment] = useState(align[0]);

  const handleAlignment = () => {
    setAlignment(align[i + 1]);
    // eslint-disable-next-line no-const-assign
    i += 1;

    if (i === 3) {
      setAlignment(align[i - 3]);
      i = 0;
    }
  };
  const handleChange = () => setchecked((prevCheck) => !prevCheck);
  const handleChangeGuild = () => setcheckedGuild((prevCheck) => !prevCheck);

  const stageRef = useRef(null);
  const [frameImg] = useImage(selectedFrame, 'Anonymous');
  const [image] = useImage(uploadedImage, 'Anonymous');

  return (
    <>
      <Helmet>
        <title>NSU Frame</title>
        <meta name='NSU Frame' contect='Photo Frame For NSU' />
      </Helmet>

      <Container>
      <Heading1>NSU - Kathford International College Frame App</Heading1>
        <C2>
          <C1>
            {typeof window !== 'undefined' && (
              <CanvasStage
                stageRef={stageRef}
                userName={userName}
                guildName={guildName}
                frameImg={frameImg}
                image={image}
                alignment={alignment}
                fontColor={fontColor}
                checked={checked}
                checkedGuild={checkedGuild}
                fontFamily={fontFamily}
                bgColor={bgColor}
                bgColorGuild={bgColorGuild}
                fontColorGuild={fontColorGuild}
                fontFamilyGuild={fontFamilyGuild}
                height={height}
                width={width}
              />
            )}
          </C1>
          <C3>
            <Container3>
              <Inputs
                handleChange={handleChange}
                handleChangeGuild={handleChangeGuild}
                checked={checked}
                checkedGuild={checkedGuild}
                setchecked={setchecked}
                setheckedGuild={setcheckedGuild}
                uploadedImage={uploadedImage}
                setUploadedImage={setUploadedImage}
                userName={userName}
                setUsername={setUserName}
                guildName={guildName}
                setGuildname={setGuildName}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
                bgColor={bgColor}
                setBgColor={setBgColor}
                fontColor={fontColor}
                setFontColor={setFontColor}
                alignment={alignment}
                bgColorGuild={bgColorGuild}
                setBgColorGuild={setBgColorGuild}
                fontColorGuild={fontColorGuild}
                setFontColorGuild={setFontColorGuild}
                handleAlignment={handleAlignment}
                align={align}
                fontFamilyGuild={fontFamilyGuild}
                setFontFamilyGuild={setFontFamilyGuild}
                setHeight={setHeight}
                setWidth={setWidth}
              />
            </Container3>
            <Download stageRef={stageRef} />
          </C3>
        </C2>
      </Container>
    </>
  );
};

export default Home;

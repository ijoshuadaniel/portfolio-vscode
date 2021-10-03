import React from 'react';
import EditorLine from '../editorline';
import {
  CusDiv,
  CusExport,
  CusImport,
  CusParagraph,
  CusCommon,
  CusCommomTag,
  CusFunctionStart,
  CusFunctionEnd,
} from '../customelement';

export const IndexJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine
        ln='2'
        data={<CusImport name='ReactDOM' from='react-dom' />}
      />
      <EditorLine ln='3' data={<CusImport name='App' from='./app' />} />
      <EditorLine ln='4' data={''} />

      <EditorLine
        ln='5'
        data={'ReactDOM.render(<App/>,document.getElementById("root"))'}
      />
    </>
  );
};

export const AppJs = () => {
  const CustomRoute = () => {
    return (
      <>
        <EditorLine
          ln='7'
          data={<CusCommomTag tag='<BrowserRouter>' color='#931c06' />}
        />
        <EditorLine
          ln='8'
          data={<CusCommomTag tag='<Switch>' color='#28a745' />}
        />
        <EditorLine
          ln='9'
          data={
            <CusCommon
              tag={'Route'}
              prop={'path="/home"'}
              children={'<Home />'}
              color='#0366d6'
            />
          }
        />

        <EditorLine
          ln='10'
          data={
            <CusCommon
              tag={'Route'}
              prop={'path="/resume"'}
              children={'<Resume />'}
              color='#0366d6'
            />
          }
        />

        <EditorLine
          ln='11'
          data={
            <CusCommon
              tag={'Route'}
              prop={'path="/contact"'}
              children={'<Contact />'}
              color='#0366d6'
            />
          }
        />

        <EditorLine
          ln='12'
          data={<CusCommomTag tag='</Switch>' color='#28a745' />}
        />
        <EditorLine
          ln='13'
          data={<CusCommomTag tag='</BrowserRouter>' color='#931c06' />}
        />
      </>
    );
  };
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine
        ln='2'
        data={
          <CusImport
            name='{ BrowserRouter, Switch , Route }'
            from='react-router-dom'
          />
        }
      />
      <EditorLine
        ln='3'
        data={<CusImport name='Contact' from='./pages/contact' />}
      />
      <EditorLine ln='4' data={<CusImport name='Home' from='./pages/home' />} />
      <EditorLine
        ln='5'
        data={<CusImport name='Resume' from='./pages/resume' />}
      />
      <EditorLine ln='6' data={CustomRoute()} />

      <EditorLine ln='14' data={''} />
      <EditorLine ln='15' data={<CusExport name='app' />} />
    </>
  );
};

export const ContactJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine
        ln='2'
        data={<CusImport name='Header' from='./components/header' />}
      />
      <EditorLine
        ln='3'
        data={<CusImport name='Footer' from='./components/footer' />}
      />
      <EditorLine ln='4' data={''} />
      <EditorLine ln='5' data={<CusFunctionStart name='Contact' />} />
      <EditorLine ln='6' data={<CusCommomTag tag='<Header />' />} />
      <EditorLine
        ln='7'
        data={
          <CusCommomTag tag='div' prop='className="contact"' color='#005cc5' />
        }
      />

      <EditorLine ln='8' data={<CusParagraph data='Contact Me' />} />
      <EditorLine
        ln='9'
        data={
          <CusParagraph data='Looking for a knowledgeable and experienced' />
        }
      />
      <EditorLine
        ln='10'
        data={
          <CusParagraph data='Web developer for your company or need to work on projects? Kindly contact me' />
        }
      />
      <EditorLine
        ln='11'
        data={<CusParagraph data='danielpauljoshuas@gmail.com' />}
      />

      <EditorLine
        ln='12'
        data={<CusCommomTag tag='</div>' color='#005cc5' />}
      />
      <EditorLine ln='13' data={<CusCommomTag tag='<Footer />' />} />

      <EditorLine ln='14' data={<CusFunctionEnd />} />
      <EditorLine ln='15' data={''} />
      <EditorLine ln='16' data={<CusExport name='Contact' />} />
    </>
  );
};

export const HomeJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine
        ln='2'
        data={<CusImport name='Header' from='./components/header' />}
      />
      <EditorLine
        ln='3'
        data={<CusImport name='Footer' from='./components/footer' />}
      />
      <EditorLine ln='4' data={''} />
      <EditorLine ln='5' data={<CusFunctionStart name='Home' />} />
      <EditorLine ln='6' data={<CusCommomTag tag='<Header />' />} />
      <EditorLine
        ln='7'
        data={
          <CusCommomTag tag='div' prop='className="home"' color='#005cc5' />
        }
      />

      <EditorLine ln='8' data={<CusParagraph data='About Me' />} />
      <EditorLine
        ln='9'
        data={
          <CusParagraph data='I am a classic blend of knowledge and experience with certifications,' />
        }
      />
      <EditorLine
        ln='10'
        data={
          <CusParagraph data=' a Web developer with varied skills and visionary achievements.' />
        }
      />
      <EditorLine
        ln='11'
        data={
          <CusParagraph data='I have build high speed websites and applications with' />
        }
      />
      <EditorLine
        ln='12'
        data={
          <CusParagraph data='happy clients for employer and make leading differentiation for the projects worked.' />
        }
      />

      <EditorLine
        ln='13'
        data={<CusCommomTag tag='</div>' color='#005cc5' />}
      />
      <EditorLine ln='14' data={<CusCommomTag tag='<Footer />' />} />

      <EditorLine ln='15' data={<CusFunctionEnd />} />
      <EditorLine ln='16' data={''} />
      <EditorLine ln='17' data={<CusExport name='Home' />} />
    </>
  );
};

export const ResumeJS = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine
        ln='2'
        data={<CusImport name='Header' from='./components/header' />}
      />
      <EditorLine
        ln='3'
        data={<CusImport name='Footer' from='./components/footer' />}
      />
      <EditorLine ln='4' data={''} />
      <EditorLine ln='5' data={<CusFunctionStart name='Resume' />} />
      <EditorLine ln='6' data={<CusCommomTag tag='<Header />' />} />
      <EditorLine
        ln='7'
        data={
          <CusCommomTag tag='div' prop='className="resume"' color='#005cc5' />
        }
      />

      <EditorLine ln='8' data={<CusParagraph data='My Resume' />} />
      <EditorLine ln='9' data={<CusParagraph data='Download Resume' />} />

      <EditorLine
        ln='10'
        data={<CusCommomTag tag='</div>' color='#005cc5' />}
      />
      <EditorLine ln='11' data={<CusCommomTag tag='<Footer />' />} />

      <EditorLine ln='12' data={<CusFunctionEnd />} />
      <EditorLine ln='13' data={''} />
      <EditorLine ln='14' data={<CusExport name='Home' />} />
    </>
  );
};

export const HeaderJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine ln='2' data={''} />
      <EditorLine ln='3' data={<CusFunctionStart name='Header' />} />
      <EditorLine
        ln='4'
        data={
          <CusCommomTag tag='div' prop='className="header"' color='#005cc5' />
        }
      />

      <EditorLine ln='5' data={<CusParagraph data='Daniel Paul Joshua S' />} />
      <EditorLine ln='6' data={<CusParagraph data='Download Resume' />} />

      <EditorLine ln='7' data={<CusCommomTag tag='</div>' color='#005cc5' />} />

      <EditorLine ln='8' data={<CusFunctionEnd />} />
      <EditorLine ln='9' data={''} />
      <EditorLine ln='10' data={<CusExport name='Header' />} />
    </>
  );
};

export const FooterJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine ln='2' data={''} />
      <EditorLine ln='3' data={<CusFunctionStart name='Footer' />} />
      <EditorLine
        ln='4'
        data={
          <CusCommomTag tag='div' prop='className="header"' color='#005cc5' />
        }
      />

      <EditorLine ln='5' data={<CusParagraph data='Contact me through' />} />
      <EditorLine
        ln='6'
        data={<CusParagraph data='danielpauljoshuas@gmail.com' />}
      />

      <EditorLine ln='7' data={<CusCommomTag tag='</div>' color='#005cc5' />} />

      <EditorLine ln='8' data={<CusFunctionEnd />} />
      <EditorLine ln='9' data={''} />
      <EditorLine ln='10' data={<CusExport name='Footer' />} />
    </>
  );
};

export const SkillsJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine ln='2' data={''} />
      <EditorLine ln='3' data={<CusFunctionStart name='Skills' />} />
      <EditorLine
        ln='4'
        data={
          <CusCommomTag tag='div' prop='className="header"' color='#005cc5' />
        }
      />

      <EditorLine ln='5' data={<CusParagraph data='React JS' />} />
      <EditorLine ln='6' data={<CusParagraph data='Electron Js' />} />
      <EditorLine ln='7' data={<CusParagraph data='React Native' />} />
      <EditorLine ln='8' data={<CusParagraph data='Node Js' />} />
      <EditorLine ln='9' data={<CusParagraph data='PHP' />} />
      <EditorLine ln='10' data={<CusParagraph data='Flutter and Dart' />} />

      <EditorLine
        ln='11'
        data={<CusCommomTag tag='</div>' color='#005cc5' />}
      />

      <EditorLine ln='12' data={<CusFunctionEnd />} />
      <EditorLine ln='13' data={''} />
      <EditorLine ln='14' data={<CusExport name='skills' />} />
    </>
  );
};

export const ProjectJs = () => {
  return (
    <>
      <EditorLine ln='1' data={<CusImport name='React' from='react' />} />
      <EditorLine ln='2' data={''} />
      <EditorLine ln='3' data={<CusFunctionStart name='Project' />} />
      <EditorLine
        ln='4'
        data={
          <CusCommomTag tag='div' prop='className="header"' color='#005cc5' />
        }
      />

      <EditorLine ln='5' data={<CusParagraph data='My Projects' />} />
      <EditorLine ln='6' data={<CusParagraph data='Blinctrip' />} />
      <EditorLine
        ln='7'
        data={<CusParagraph data='Illusion web developers' />}
      />
      <EditorLine ln='8' data={<CusParagraph data='Miracle Gases' />} />
      <EditorLine ln='9' data={<CusParagraph data='Ebenezer Gases' />} />
      <EditorLine ln='10' data={<CusParagraph data='Kaira' />} />
      <EditorLine ln='11' data={<CusParagraph data='The Frolik' />} />
      <EditorLine ln='12' data={<CusParagraph data='Mayans' />} />

      <EditorLine
        ln='13'
        data={<CusCommomTag tag='</div>' color='#005cc5' />}
      />

      <EditorLine ln='14' data={<CusFunctionEnd />} />
      <EditorLine ln='15' data={''} />
      <EditorLine ln='16' data={<CusExport name='Project' />} />
    </>
  );
};

export const PackagesJson = () => {
  return (
    <>
      <EditorLine ln='1' data='"name": "daniel-paul-joshua-portfolio",' />
      <EditorLine ln='2' data='"version": "1.0.0",' />
      <EditorLine ln='3' data='"main": "index.js",' />
      <EditorLine ln='4' data='"author": "Daniel Paul Joshua S",' />
      <EditorLine ln='5' data='"license": "MIT",' />
      <EditorLine ln='6' data='"private": false,' />
      <EditorLine ln='7' data='"scripts": {' />
      <EditorLine ln='8' data='"start": "react react-scripts-start"' />
      <EditorLine ln='9' data='},' />
      <EditorLine ln='10' data='"dependencies": {' />
      <EditorLine ln='11' data='"react": "^17.0.2",' />
      <EditorLine ln='12' data='"react-dom": "^17.0.2",' />
      <EditorLine ln='13' data='"react-icons": "^4.2.0"' />
      <EditorLine ln='14' data='},' />
    </>
  );
};

export const IndexHtml = () => {
  return (
    <>
      <EditorLine ln='1' data='<!DOCTYPE html>' />
      <EditorLine ln='2' data='<html lang="en">' />
      <EditorLine ln='3' data='<head>' />
      <EditorLine ln='4' data='<meta charset="UTF-8" />' />
      <EditorLine
        ln='5'
        data='<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
      />
      <EditorLine
        ln='6'
        data='<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
      />
      <EditorLine ln='7' data='<title>Daniel Paul Joshua S</title>' />
      <EditorLine ln='8' data='</head>' />
      <EditorLine ln='9' data='<body>' />
      <EditorLine ln='10' data='<div id="root"></div>' />
      <EditorLine ln='11' data='</body>' />
      <EditorLine ln='12' data='</html>' />
    </>
  );
};

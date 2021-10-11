import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

const App:React.FC=()=>{
  interface lifeTags{
    "趣味":string;
    "特技":string;
    "熱中しているもの":string;
    "得意科目":string;
    "苦手科目":string;
    "委員会":string;
    "部活":string;
    "アルバイト":string;
    "将来の夢":string;
    "志望動機":string;
    "悩みごと":string;
    "想い出":string;
  }

  const TopInfo=styled.div<{PCView:boolean}>`
    width:${({PCView})=>PCView ? "95":"50"}%;
    margin:auto;
    display:flex;
  `;

  const TopLeftCol=styled.div`
    width:65%;
  `;

  const TopRightCol=styled.div`
    width:35%;
  `;

  const TopUnderInfo=styled.div`
    display:flex;
    justify-content:space-around;
  `;

  const LifeTags=styled.div`
    position:relative;
    width:100%;
    margin:auto;
  `;

  const [charaName,setCharaName]=useState<string>("");
  const [age,setAge]=useState<string>("");
  const [gender,setGender]=useState<string>("女");
  const [exp,setExp]=useState<string>("0");
  const [lifeTag,setLifeTag]=useState<lifeTags>({"趣味":"","特技":"","熱中しているもの":"","得意科目":"","苦手科目":"","委員会":"","部活":"","アルバイト":"","将来の夢":"","志望動機":"","悩みごと":"","想い出":""});

  const handleLifeTagChange=(event:React.ChangeEvent<HTMLInputElement>,lifeTagName:string):void=>{
    event.preventDefault();
    setLifeTag({...lifeTag,[lifeTagName]:event.target.value});
  }

  const lifeTagArray=Object.keys(lifeTag).map((value,index)=>{
    return <label key={index}><LifeTagView lifeTag={lifeTag[value as keyof lifeTags]} lifeTagName={value} lifeTags={lifeTag} index={index} handleChange={handleLifeTagChange} /></label>
  });

  

  return (
    <div className="App">
      <TopInfo PCView={true}>
        <TopLeftCol>
          <CharaName
            charaName={charaName}
            setCharaName={setCharaName}
          />
          <TopUnderInfo>
            <UnderCharaName
              age={age}
              setAge={setAge}
              category="age"
            />
            <UnderCharaName
              gender={gender}
              setGender={setGender}
              category="gender"
            />
            <UnderCharaName
              exp={exp}
              setExp={setExp}
              category="exp"
            />
          </TopUnderInfo>
        </TopLeftCol>
        <TopRightCol>
          <CharaPicture/>
        </TopRightCol>
      </TopInfo>
      <LifeTags>
        {lifeTagArray}
      </LifeTags>
    </div>
  );
}

const CharaName=(props:{charaName:string,setCharaName:React.Dispatch<React.SetStateAction<string>>})=>{
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    props.setCharaName(event.target.value);
  }

  return (
    <div>
      <input className="name_input" value={props.charaName} onChange={handleChange} />
    </div>
  );
}

function UnderCharaName(props:any){
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    if(props.age!==undefined){
      props.setAge(event.target.value);
    }else if(props.gender!==undefined){
      props.setGender(event.target.value);
    }else if(props.exp!==undefined){
      props.setExp(event.target.value);
    }
    
  }
  
  return(
    <div>
      <input className="under_name_input" value={props[props.category]} onChange={handleChange} />
    </div>
  );
}

function CharaPicture(props:any){
  return(
    <div>
      <img alt="キャラ画像" />
    </div>
  );
}

const LifeTagView=(props:any)=>{
  

  const LifeTagInput=styled.div`
    text-align:${props.index>=5&&props.index<=9?"right":"left"};
    ${props.index>=5&&props.index<=9?`position:absolute;top:${-10+(props.index-5)*35}px;left:50%;`:""}
  `;

  return(
    <LifeTagInput>
      <p>{props.lifeTagName}<input value={props.lifeTag} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>props.handleChange(event,props.lifeTagName)} /></p>
    </LifeTagInput>
  );
}

export default App;

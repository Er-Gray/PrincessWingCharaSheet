import React, { useState } from 'react';
import './App.css';
import { styled } from '@linaria/react';

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

  const TopInfo=styled.div`
    width:${(props:any)=>props.PCView ? 95:50}%;
    margin:auto;
  `;

  const TopLeftCol=styled.div`
    width:65%;
  `;

  const TopUnderInfo=styled.div`
    display:flex;
    justify-content:space-around;
  `;

  const [charaName,setCharaName]=useState<string>("");
  const [age,setAge]=useState<string>("");
  const [gender,setGender]=useState<string>("女");
  const [exp,setExp]=useState<string>("0");
  const [lifeTag,setLifeTag]=useState<lifeTags>({"趣味":"","特技":"","熱中しているもの":"","得意科目":"","苦手科目":"","委員会":"","部活":"","アルバイト":"","将来の夢":"","志望動機":"","悩みごと":"","想い出":""});

  const lifeTagArray=Object.keys(lifeTag).map((value,index)=>{
    if(index<10){
      return <LifeTagView lifetag={value} long="" setLifeTag={setLifeTag} />
    }else{
      return <LifeTagView lifetag={value} long="life_tag_long"  setLifeTag={setLifeTag} />
    }
  });

  return (
    <div className="App">
      <TopInfo>
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
              sex={gender}
              setSex={setGender}
              category="gender"
            />
            <UnderCharaName
              exp={exp}
              setExp={setExp}
              category="exp"
            />
          </TopUnderInfo>
        </TopLeftCol>
        <div>
          <CharaPicture/>
        </div>
      </TopInfo>
      <div className="life_tags">
        {lifeTagArray}
      </div>
    </div>
  );
}

function CharaName(props:any){
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

function LifeTagView(props:any){
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    props.setLifeTag(event.target.value);
  }

  return(
    <div>
      <input className={`life_tag_input ${props.long}`} value={props.lifeTag} onChange={handleChange} />
    </div>
  );
}

export default App;

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './DetailsCard.css';
import testImage from "../../assets/test.jpg"
import { YoobicBasicGrid } from "yoobic-basic-grid-react/src/components"
function DetailsCard(props: any) {
  var elem = props.value;

  return (
    <div className="box">
      {/* This will become an avatar component */}
      <div className="imgBox">
        <img alt="logo" src={testImage} />
        <p>{elem["Name"]}</p>
      </div>

      {/* This will be the custom components from StencilJS */}
      <div className="contents">
        <YoobicBasicGrid array={elem}></YoobicBasicGrid>
        {Object.keys(elem).map((field: any) => (
          field !== 'Name' ?
            <p><strong>{field}</strong>:{elem[field]}</p> : <span></span>
        ))}
      </div>
    </div>);
}

export default DetailsCard;

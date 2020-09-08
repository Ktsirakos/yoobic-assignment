import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './DetailsCard.css';

function DetailsCard(props : any) {
    return <h1>Hello, {props.name}</h1>;
  }

export default DetailsCard;

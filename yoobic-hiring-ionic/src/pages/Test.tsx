import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Test.css';

class List extends React.Component {

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Test</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
            
                </IonContent>
            </IonPage>
        );
    };
};

export default List;

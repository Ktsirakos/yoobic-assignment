import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './List.css';
import axios from "axios"

class List extends React.Component {
    state = {
        starWars: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>List</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    
                </IonContent>
            </IonPage>
        );
    };
};

export default List;

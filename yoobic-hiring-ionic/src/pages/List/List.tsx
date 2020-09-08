import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './List.css';
import axios from "axios"

class List extends React.Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get(`https://swapi.dev/api/people`)
            .then(res => {
                const result = res.data.results
                const people = result.map((elem: any) => {
                    return {
                        name: elem.name,
                        height: elem.height,
                        eye_color: elem.eye_color,
                        mass: elem.mass,
                        filmsNumber: elem.films.length,
                        startshipsNumber: elem.starships.length
                    }
                })

                this.setState({ people });
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
                    {this.state.people.map((elem:any) => (
                        <p>{elem.name}</p>
                    ))}
                </IonContent>
            </IonPage>
        );
    };
};

export default List;

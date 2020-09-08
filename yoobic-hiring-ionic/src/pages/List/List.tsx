import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './List.css';
import DetailsCard from "../../components/DetailsCard/DetailsCard"
import axios from "axios"
import testImage from "../../assets/test.jpg"

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
                        "Name": elem.name,
                        "Height": elem.height,
                        "Eye Color": elem.eye_color,
                        "Mass": elem.mass,
                        "#Films": elem.films.length,
                        "#Start ships": elem.starships.length
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
                    {this.state.people.map((elem: any) => (
                        <div className="box">
                            {/* This will become an avatar component */}
                            <div className="imgBox">
                                <img alt="logo" src={testImage} />
                                <p>{elem["Name"]}</p>
                            </div>

                            {/* This will be the custom components from StencilJS */}
                            <div className="contents">
                                {Object.keys(elem).map((field: any) => (
                                    <p><strong>{field}</strong>:{elem[field]}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </IonContent>
            </IonPage>
        );
    };
};

export default List;

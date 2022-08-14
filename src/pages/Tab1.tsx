import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/Container/ExploreContainer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <ExploreContainer />
    </IonPage>
  );
};

export default Tab1;

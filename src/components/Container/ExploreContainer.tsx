import "./ExploreContainer.css";
import { IonContent, IonSegment, IonSegmentButton } from "@ionic/react";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent fullscreen className="ion-padding">
      <IonSegment value="today">
        <IonSegmentButton className="ion-segment-button" value="today">
          Hoje
        </IonSegmentButton>
        <IonSegmentButton className="ion-segment-button" value="tomorrow">
          Amanhã
        </IonSegmentButton>
        <IonSegmentButton className="ion-segment-button" value="nextDays">
          15 dias
        </IonSegmentButton>
      </IonSegment>
    </IonContent>
  );
};

export default ExploreContainer;

import "./ExploreContainer.css";
import { IonContent, IonSegment, IonSegmentButton } from "@ionic/react";
import { ArrowUpOutline, ArrowDownOutline } from "react-ionicons";
import solImg from "../../assets/sol.png";
import nubladoImg from "../../assets/nublado.png";
import frio from "../../assets/frio.png";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const temp = 30;
  return (
    <>
      <IonContent className="ion-content">
        <div className="segment">
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
        </div>
        <div className="card-container">
          <div className="localizacao">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1255/1255406.png?w=826&t=st=1660351910~exp=1660352510~hmac=364c547ace29acade549f414319a22eee0003cbf65216d370950dda679b99863"
              alt="Imagem localização"
            />
            <h4>Itapeva-SP</h4>
          </div>
          <div className="imagem-tempo">
            {temp >= 30 && <img src={solImg} alt="" />}
            {temp < 30 && temp > 15 && <img src={nubladoImg} alt="" />}
            {temp <= 15 && <img src={nubladoImg} alt="" />}
          </div>
          <div className="minmax">
            <ArrowUpOutline color="#ED7E17" height="14px" width="14px" />
            <div>37º</div>
            <ArrowDownOutline color="#2D5A74" height="14px" width="14px" />
            <div>31º</div>
          </div>
          <div className="temperatura">{temp}</div>
        </div>
      </IonContent>
    </>
  );
};

export default ExploreContainer;

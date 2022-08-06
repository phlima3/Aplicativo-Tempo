import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Header.css";
import { MenuOutline, SearchOutline } from "react-ionicons";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons className="buttons">
          <IonButton>
            <MenuOutline color="#000" height="30px" width="30px" />
          </IonButton>
          <IonTitle className="ion-title">
            Clima<span>Tempo</span>{" "}
          </IonTitle>

          <SearchOutline color="#000" height="30px" width="30px" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

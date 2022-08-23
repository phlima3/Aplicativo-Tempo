import { IonApp, setupIonicReact } from "@ionic/react";

import Tab1 from "./pages/Tab1";

import "@ionic/react/css/core.css";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "./theme/variables.css";
import "./App.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Tab1 />
  </IonApp>
);

export default App;

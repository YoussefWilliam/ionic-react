import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import {
  globeOutline,
  peopleCircleOutline,
  personCircleOutline,
} from "ionicons/icons";

const Settings: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/menu/settings/tab1">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/menu/settings/tab2">
          <IonIcon icon={peopleCircleOutline} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route path="/menu/settings/tab1" component={Tab1} />
        <Route path="/menu/settings/tab2" component={Tab2} />
        <Route exact path="/menu/settings">
          <Redirect to="/menu/settings/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Settings;

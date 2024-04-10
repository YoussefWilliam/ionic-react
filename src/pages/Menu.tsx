import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Layout from "../components/Layout";
import { Redirect, Route } from "react-router";
import List from "./List";
import Settings from "./Settings";
import { homeOutline, logOutOutline, newspaperOutline } from "ionicons/icons";

const MenuPage: React.FC = () => {
  const paths = [
    { name: "Home", url: "/menu/list", icon: homeOutline },
    { name: "Settings", url: "/menu/settings", icon: newspaperOutline },
  ];
  return (
    <IonPage>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {paths.map((item, index) => (
            <IonMenuToggle key={index}>
              <IonItem routerDirection="none" routerLink={item.url}>
                <IonIcon slot="start" icon={item.icon} />
                {item.name}
              </IonItem>
            </IonMenuToggle>
          ))}

          <IonMenuToggle autoHide={false}>
            <IonItem detail={false} routerLink="/" routerDirection="root">
              <IonIcon slot="start" icon={logOutOutline} />
              Logout
            </IonItem>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main">
        <Route exact path="/menu/list" component={List} />
        <Route path="/menu/settings" component={Settings} />
        <Route exact path="/menu">
          <Redirect to="/menu/list" />
        </Route>
      </IonRouterOutlet>
    </IonPage>
  );
};

export default MenuPage;

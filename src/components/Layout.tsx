import {
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { ReactNode } from "react";

interface ILayout {
  title: string;
  color?: string;
  children: ReactNode;
  footer?: ReactNode;
  toolBar?: ReactNode;
}
const Layout: React.FC<ILayout> = ({
  title,
  color = "primary",
  children,
  footer,
  toolBar,
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={color}>
          <IonTitle>{title}</IonTitle>
          {toolBar && toolBar}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              {children}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      {footer && <IonFooter>{footer}</IonFooter>}
    </IonPage>
  );
};

export default Layout;

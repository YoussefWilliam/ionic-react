import React from "react";
import Layout from "../components/Layout";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  useIonRouter,
} from "@ionic/react";
import { newspaperOutline } from "ionicons/icons";
import FavIcon from "../assets/favicon.png";
const RegisterPage: React.FC = () => {
  const router = useIonRouter();
  const formAction = (event: any) => {
    event.preventDefault();
    router.push("/", "root");
  };

  return (
    <Layout
      color="warning"
      title="Register page"
      toolBar={
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      }
    >
      <div className="ion-text-center ion-padding">
        <img src={FavIcon} alt="fav-ico" width={"50%"} />
      </div>
      <IonCard>
        <IonCardContent>
          <form onSubmit={formAction}>
            <IonInput
              fill="outline"
              label="Email"
              type="email"
              placeholder="Enter email"
              labelPlacement="floating"
            />
            <IonInput
              fill="outline"
              label="Password"
              type="password"
              className="ion-margin-top"
              placeholder="Enter password"
              labelPlacement="floating"
            />
            <IonButton type="submit" expand="block" className="ion-margin-top">
              Create account
              <IonIcon icon={newspaperOutline} slot="end" />
            </IonButton>
          </form>
        </IonCardContent>
      </IonCard>
    </Layout>
  );
};

export default RegisterPage;

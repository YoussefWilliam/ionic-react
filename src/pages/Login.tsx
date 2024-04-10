import React from "react";
import Layout from "../components/Layout";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import FavIcon from "../assets/favicon.png";
import Intro from "../components/Intro";
const LoginPage: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const formAction = async (event: any) => {
    event.preventDefault();
    console.log(event.target);
    await present("Logging in...");

    setTimeout(async () => {
      dismiss();
      router.push("/menu", "root");
    }, 2000);
  };
  return (
    <Layout color="success" title="Login page">
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
              Login
              <IonIcon icon={logInOutline} slot="end" />
            </IonButton>
            <IonButton
              routerLink="/register"
              color="secondary"
              className="ion-margin-top"
              expand="block"
              fill="outline"
            >
              Register
              <IonIcon icon={personCircleOutline} slot="end" />
            </IonButton>
          </form>
        </IonCardContent>
      </IonCard>
    </Layout>
  );
};

export default LoginPage;

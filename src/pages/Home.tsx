import "./Home.css";
import Layout from "../components/Layout";
import { IonToolbar, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const Home: React.FC = () => {
  const router = useIonRouter();

  const handleFinishLogin = async () =>
    Preferences.set({ key: "finish-login", value: "done" });

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: "finish-login" });
      if (seen.value === "done") router.push("/login");
    };
    checkStorage();
  }, []);
  return (
    <Layout
      footer={<IonToolbar>Hey there</IonToolbar>}
      title="Well this is something"
    >
      <Intro handleFinishLogin={handleFinishLogin} />
    </Layout>
  );
};

export default Home;

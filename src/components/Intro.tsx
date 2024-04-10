import React, { ReactNode } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { IonButton, IonText } from "@ionic/react";

interface IIntroProps {
  handleFinishLogin(): void;
}

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>Next</IonButton>;
};
const Intro: React.FC<IIntroProps> = ({ handleFinishLogin }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <IonText color="primary">
          <h1>Hey there</h1>
        </IonText>
        <SwiperButtonNext />
      </SwiperSlide>
      <SwiperSlide>
        <IonText color="secondary">
          <h1>Ready for fun?</h1>
        </IonText>
        <SwiperButtonNext />
      </SwiperSlide>
      <SwiperSlide>
        <IonText color="danger">
          <h1>Go f urself</h1>
        </IonText>
        <IonButton onClick={handleFinishLogin}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;

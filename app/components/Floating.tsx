"use client";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Floating = () => {
  const [statusMessage, setStatusMessage] = useState("Offline");

  const checkBusinessHours = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 es domingo, 1 es lunes, ..., 6 es sábado

    // Define tu horario de atención aquí
    // Por ejemplo: de lunes a viernes de 10:00 a 17:00
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    const isBusinessHours = currentHour >= 10 && currentHour < 17;

    if (isWeekday && isBusinessHours) {
      setStatusMessage("Available");
    } else {
      setStatusMessage("Be back soon! Mon-Fri: 10AM - 5PM");
    }
  };

  useEffect(() => {
    // Verificar el horario al cargar el componente
    checkBusinessHours();

    // Configurar un intervalo para actualizar el estado cada minuto
    const intervalId = setInterval(checkBusinessHours, 60000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <FloatingWhatsApp
      messageDelay={1}
      accountName="Ellie Williams"
      phoneNumber="+14373882358"
      statusMessage="Typically replies within 1 hour"
      allowEsc
      chatMessage={
        "Hi there! 👋 Welcome to Talk & Bloom. \nHow can we assist you today?"
      }
      // allowClickAway
      notification
      notificationSound
      notificationDelay={30}
    />
  );
};

export default Floating;

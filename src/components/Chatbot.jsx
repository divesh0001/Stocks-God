import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    window.botpressWebChat = {
      botId: "08a112d8-876c-43a6-9c50-99eb5efd20ae",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "08a112d8-876c-43a6-9c50-99eb5efd20ae",
      botName: "StocksGod Bot",
      showPoweredBy: false,
      stylesheet: "https://cdn.botpress.cloud/webchat/v1/themes/light.css",
      enableReset: true,
      showWidget: true, // ✅ Required to show the chat bubble
    };

    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;

import React, { useEffect } from "react";
import { notification } from "antd";

const Notification = ({ type, message, description }) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const openNotificationWithIcon = () => {
      api[type]({
        message: message,
        description: description,
      });
    };

    openNotificationWithIcon();
  }, [api, type, message, description]);

  return <>{contextHolder}</>;
};

export default Notification;

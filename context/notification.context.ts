import { createContext } from 'react';

interface NotificationContextProps {
  sendNotification: (message: string) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  sendNotification: () => {},
});

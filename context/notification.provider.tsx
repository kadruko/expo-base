import { useState } from 'react';
import { Toast } from 'react-native-ui-lib/src/incubator';
import { NotificationContext } from './notification.context';

interface NotificationProviderProps {
  children: React.ReactNode;
}

export default function NotificationProvider({
  children,
}: NotificationProviderProps) {
  const [message, setMessage] = useState<string>();

  return (
    <NotificationContext.Provider
      value={{
        sendNotification: setMessage,
      }}
    >
      {children}
      <Toast
        visible={message !== undefined}
        position={'bottom'}
        autoDismiss={5000}
        onDismiss={() => setMessage(undefined)}
      />
    </NotificationContext.Provider>
  );
}

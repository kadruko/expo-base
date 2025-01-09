import { useContext } from "react";
import { NotificationContext } from "../context/notification.context";

export default function useNavigationContext() {
    return useContext(NotificationContext);
}
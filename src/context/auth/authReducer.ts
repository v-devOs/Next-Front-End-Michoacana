import { User } from "@/interfaces/general";
import { Employee } from "@/interfaces/admin";

export interface AuthState {
  isLoggedIn: boolean;
  user?: User;
  employee?: Employee;
}

export type AuthActionType = { type: "Login" } | { type: "Logout" };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "Logout":
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
        employee: undefined,
      };
    default:
      return state;
  }
};

// import React, { createContext, useReducer, useContext } from "react";

// //얘도 커밋금지해야한다.
// const initialAuth = [];

// const AuthStateContext = createContext();
// const AuthDispatchContext = createContext();

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "SIGNUP":
//       return state.concat(action.auth);
//     default:
//       throw new Error(`unhandled action type`);
//   }
// };

// export function AuthProvider({ children }) {
//   const [state, dispatch] = useReducer(authReducer, initialAuth);
//   return (
//     <AuthStateContext.Provider value={state}>
//       <AuthDispatchContext.Provider value={dispatch}>
//         {children}
//       </AuthDispatchContext.Provider>
//     </AuthStateContext.Provider>
//   );
// }

// export function useAuthState() {
//   const context = useContext(AuthStateContext);
//   if (!context) {
//     throw new Error(`Cannot find Authprovider`);
//   }
//   return context;
// }
// export function useAuthDispatch() {
//   const context = useContext(AuthDispatchContext);
//   if (!context) {
//     throw new Error("Cannot find AuthProvider");
//   }
//   return context;
// }

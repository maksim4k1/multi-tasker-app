import StartPage from "../pages/StartPage";
import LogInPage from "../pages/Auth/LogInPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import RecoveryPage from "../pages/Recovery/RecoveryPage";
import RecoveryCheckCodePage from "../pages/Recovery/RecoveryCheckCodePage";
import RecoveryChangePasswordPage from "../pages/Recovery/RecoveryChangePasswordPage";

const routes = [
  // Auth
  {path: "/", element: <StartPage/>},
  {path: "/login", element: <LogInPage/>},
  {path: "/register", element: <RegisterPage/>},

  // Recovery
  {path: "/password-recovery", element: <RecoveryPage/>},
  {path: "/password-recovery/code", element: <RecoveryCheckCodePage/>},
  {path: "/password-recovery/change", element: <RecoveryChangePasswordPage/>},
];

export default routes;
import { FAILING, LOADING, EDIT_PASSWORD_FAILING, RECOVERY_CHECK_CODE_FAILING, RECOVERY_CHECK_CODE_LOADING, EDIT_PASSWORD_LOADING, EDIT_PASSWORD_SUCCESS, EDIT_EMAIL_FAILING, EDIT_EMAIL_LOADING, EDIT_EMAIL_SUCCESS, EDIT_NAME_FAILING, EDIT_NAME_LOADING, EDIT_NAME_SUCCESS, REGISTER_FAILING, REGISTER_LOADING, REGISTER_SUCCESS, SUCCESS, LOGIN_FAILING, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_FAILING, LOGOUT_LOADING, LOGOUT_SUCCESS, RECOVERY_CHECK_CODE_SUCCESS, RECOVERY_CHECK_EMAIL_SUCCESS, RECOVERY_CHECK_EMAIL_LOADING, RECOVERY_CHECK_EMAIL_FAILING, RECOVERY_SET_PASSWORD_SUCCESS, RECOVERY_SET_PASSWORD_LOADING, RECOVERY_SET_PASSWORD_FAILING, EDIT_PHOTO_SUCCESS, EDIT_PHOTO_LOADING, EDIT_PHOTO_FAILING } from "../types";
import stateCreator from "../../utils/stateCreator";

const initialState = {
  isAuth: false,
  profile: null,
  token: null,

  recovery_email: null,
  recovery_code: null,

  registerState: stateCreator(),
  loginState: stateCreator(),
  logoutState: stateCreator(),

  recoveryCheckEmailState: stateCreator(),
  recoveryCheckCodeState: stateCreator(),
  recoverySetPasswordState: stateCreator(),

  editNameState: stateCreator(),
  editEmailState: stateCreator(),
  editPhotoState: stateCreator(),
  editPasswordState: stateCreator(),
}

const authReducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerState: stateCreator(SUCCESS),
        isAuth: true,
        profile: payload,
      }
    } case REGISTER_LOADING: {
      return {
        ...state,
        registerState: stateCreator(LOADING),
      }
    } case REGISTER_FAILING: {
      return {
        ...state,
        registerState: stateCreator(FAILING, payload),
      }
    } case LOGIN_SUCCESS: {
      return {
        ...state,
        loginState: stateCreator(SUCCESS),
        isAuth: true,
        profile: payload,
      }
    } case LOGIN_LOADING: {
      return {
        ...state,
        loginState: stateCreator(LOADING),
      }
    } case LOGIN_FAILING: {
      return {
        ...state,
        loginState: stateCreator(FAILING, payload),
      }
    } case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutState: stateCreator(SUCCESS),
        isAuth: false,
        profile: null,
      }
    } case LOGOUT_LOADING: {
      return {
        ...state,
        logoutState: stateCreator(LOADING),
      }
    } case LOGOUT_FAILING: {
      return {
        ...state,
        logoutState: stateCreator(FAILING, payload),
      }
    } case EDIT_NAME_SUCCESS: {
      return {
        ...state,
        editNameState: stateCreator(SUCCESS),
        profile: {
          ...state.profile,
          username: payload
        },
      }
    } case EDIT_NAME_LOADING: {
      return {
        ...state,
        editNameState: stateCreator(LOADING),
      }
    } case EDIT_NAME_FAILING: {
      return {
        ...state,
        editNameState: stateCreator(FAILING, payload),
      }
    } case EDIT_EMAIL_SUCCESS: {
      return {
        ...state,
        editEmailState: stateCreator(SUCCESS),
        profile: {
          ...state.profile,
          email: payload
        },
      }
    } case EDIT_EMAIL_LOADING: {
      return {
        ...state,
        editEmailState: stateCreator(LOADING),
      }
    } case EDIT_EMAIL_FAILING: {
      return {
        ...state,
        editEmailState: stateCreator(FAILING, payload),
      }
    } case EDIT_PHOTO_SUCCESS: {
      return {
        ...state,
        editPhotoState: stateCreator(SUCCESS),
        profile: {
          ...state.profile,
          photo: payload
        },
      }
    } case EDIT_PHOTO_LOADING: {
      return {
        ...state,
        editPhotoState: stateCreator(LOADING),
      }
    } case EDIT_PHOTO_FAILING: {
      return {
        ...state,
        editPhotoState: stateCreator(FAILING, payload),
      }
    } case EDIT_PASSWORD_SUCCESS: {
      return {
        ...state,
        editPasswordState: stateCreator(SUCCESS),
        profile: {
          ...state.profile,
          password: payload
        },
      }
    } case EDIT_PASSWORD_LOADING: {
      return {
        ...state,
        editPasswordState: stateCreator(LOADING),
      }
    } case EDIT_PASSWORD_FAILING: {
      return {
        ...state,
        editPasswordState: stateCreator(FAILING, payload),
      }
    } case RECOVERY_CHECK_EMAIL_SUCCESS: {
      return {
        ...state,
        recoveryCheckEmailState: stateCreator(SUCCESS),
        recovery_email: payload
      }
    } case RECOVERY_CHECK_EMAIL_LOADING: {
      return {
        ...state,
        recoveryCheckEmailState: stateCreator(LOADING),
      }
    } case RECOVERY_CHECK_EMAIL_FAILING: {
      return {
        ...state,
        recoveryCheckEmailState: stateCreator(FAILING, payload),
      }
    } case RECOVERY_CHECK_CODE_SUCCESS: {
      return {
        ...state,
        recoveryCheckCodeState: stateCreator(SUCCESS),
        recovery_code: payload
      }
    } case RECOVERY_CHECK_CODE_LOADING: {
      return {
        ...state,
        recoveryCheckCodeState: stateCreator(LOADING),
      }
    } case RECOVERY_CHECK_CODE_FAILING: {
      return {
        ...state,
        recoveryCheckCodeState: stateCreator(FAILING, payload),
      }
    } case RECOVERY_SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        recoverySetPasswordState: stateCreator(SUCCESS),
        recovery_email: null,
        recovery_code: null
      }
    } case RECOVERY_SET_PASSWORD_LOADING: {
      return {
        ...state,
        recoverySetPasswordState: stateCreator(LOADING),
      }
    } case RECOVERY_SET_PASSWORD_FAILING: {
      return {
        ...state,
        recoverySetPasswordState: stateCreator(FAILING, payload),
      }
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
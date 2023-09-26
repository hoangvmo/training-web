import { PayloadLoginType, PayloadRegisterType } from "../schemes/auth";

export enum KEY {
  USERS = 'USERS',
  USER_INFO = 'USER_INFO',
}

export const authServices = {
  login: (payload: PayloadLoginType) => {
    const users = localStorage.getItem(KEY.USERS);

    let isUserExisted = false;
    if (!users) {
      isUserExisted = false;
    } else {
      isUserExisted = JSON.parse(users)?.findIndex?.((user: PayloadRegisterType) => user.email === payload.email) !== -1
    }

    if (!isUserExisted) {
      throw new Error("User not found!");
    }

    const userInfo = JSON.parse(users || "[]")?.find?.((user: PayloadRegisterType) => user.email === payload.email)

    if (payload.password !== userInfo.password) {
      throw new Error("Incorrect password");
    }

    localStorage.setItem(KEY.USER_INFO, userInfo);

    return userInfo;
  },

  register: (payload: PayloadRegisterType) => {
    const users = localStorage.getItem(KEY.USERS);
    let isUserExisted = false;
    if (!users) {
      isUserExisted = false;
    } else {
      isUserExisted = JSON.parse(users)?.findIndex?.((user: PayloadRegisterType) => user.email === payload.email) !== -1
    }

    if (isUserExisted) {
      throw new Error("Email is existed!")
    }

    const usersArray = JSON.parse(users || "[]");
    const newUserArray = [...usersArray, payload];
    localStorage.setItem(KEY.USERS, JSON.stringify(newUserArray))

    return newUserArray;
  },

  logout: () => {
    localStorage.removeItem(KEY.USER_INFO);
  }
}
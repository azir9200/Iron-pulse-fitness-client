import { RootState } from "@/redux/store";
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logout } from "../../features/userSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://better-manage-project.vercel.app/api",
  // baseUrl: "http://localhost:5000/api",

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;

    if (token) {
      headers.set("Authorization", `${token}`);
    }
    return headers;
  },
});
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    //* Send Refresh

    console.log("base, token", result);

    //   const refreshResult = await fetch(
    //     "http://localhost:5000/api/auth/refresh-token",

    //     {
    //       method: "POST",
    //       credentials: "include",
    //     }
    //   );
    //   const data = await refreshResult.json();
    //   console.log("res/data azir", data);

    //   if (data?.accessToken) {
    //     const user = (api.getState() as RootState).user;
    //     api.dispatch(setUser({ ...user, token: data.accessToken }));
    //     console.log("user refresh", user);
    //     result = await baseQuery(args, api, extraOptions);
    //   } else {
    //     api.dispatch(logout());
    //   }
    // }

    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

import { baseApi } from "../baseApi/baseApi";

const payIntentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteIntent: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/create-payment-intent`,
          body: data,
        };
      },
    }),
  }),
});
export const { useCreteIntentMutation } = payIntentApi;

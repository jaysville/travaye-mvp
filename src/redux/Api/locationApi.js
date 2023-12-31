import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../queryInterceptors";

export const LocationApi = createApi({
  reducerPath: "location",
  baseQuery: baseQueryWithInterceptor,
  refetchOnReconnect: true,
  refetchOnUpdateTimeout: 50000,
  tagTypes: ["Locations", "Location"],
  endpoints: (builder) => ({
    createLocation: builder.mutation({
      query: (body) => ({
        url: "location",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Locations"],
    }),
    getLocations: builder.query({
      query: (page, count) => `location?page=${page}&count=${count}`,
      providesTags: ["Locations"],
      refetchOnUpdate: true,
      refetchOnReconnect: true,
    }),
    getLocation: builder.query({
      query: (id) => `location/${id}`,
      providesTags: ["Location"],
    }),
  }),
});

export const {
  useCreateLocationMutation,
  useGetLocationsQuery,
  useGetLocationQuery,
} = LocationApi;

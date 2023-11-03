import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  tagTypes: ['FavoriteTracks', 'Track'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    getTracks: build.query({
      query: () => ({
        url: 'track/all',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavoriteTracks', id })),
              { type: 'FavoriteTracks', id: 'LIST' },
            ]
          : [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    getIdTrack: build.query({
      query: ({ id }) => ({
        url: `track/${id}`,
        method: 'GET',
      }),
      providesTags: [{ type: 'Track' }],
    }),
    getFavoriteTracks: build.query({
      query: () => ({
        url: 'track/favorite/all',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavoriteTracks', id })),
              { type: 'FavoriteTracks', id: 'LIST' },
            ]
          : [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
    addFavoriteTracks: build.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'FavoriteTracks', id: 'LIST' },
        { type: 'Track' },
      ],
    }),
    deleteFavoriteTracks: build.mutation({
      query: ({ id }) => ({
        url: `track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'FavoriteTracks', id: 'LIST' },
        { type: 'Track' },
      ],
    }),
    getCategoryTracks: build.query({
      query: ({ id }) => ({
        url: `selection/${id}/`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.items.map(({ id }) => ({ type: 'FavoriteTracks', id })),
              { type: 'FavoriteTracks', id: 'LIST' },
            ]
          : [{ type: 'FavoriteTracks', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetTracksQuery,
  useGetIdTrackQuery,
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
  useGetCategoryTracksQuery,
} = favoritesApi

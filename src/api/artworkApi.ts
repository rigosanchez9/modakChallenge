import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const artworkApi = createApi({
  reducerPath: 'artworkApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.artic.edu/api/v1/'}),
  endpoints: builder => ({
    getArtworks: builder.query<any, void>({
      query: () =>
        'artworks?fields=id,title,artist_display,date_display,main_reference_number,thumbnail,image_id',
    }),
    getArtworksById: builder.query({
      query: id => `artworks/${id}`,
    }),
  }),
});
export const {useGetArtworksQuery, useGetArtworksByIdQuery} = artworkApi;

const artworkData = {
  pagination: {
    total: 123673,
    limit: 12,
    offset: 0,
    total_pages: 10307,
    current_page: 1,
    next_url:
      'https://api.artic.edu/api/v1/artworks?page=2&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cmain_reference_number%2Cthumbnail%2Cimage_id',
  },
  data: [
    {
      id: 3752,
      title: 'The Madonna of the Rosary',
      thumbnail: {
        lqip: 'data:image/gif;base64,R0lGODlhAwAFAPMAAIqKd4+Pe5WVgJWUgZaVgZaXgpiYhJmZhJqahpubh52diaOijaink6qqlAAAAAAAACH5BAAAAAAALAAAAAADAAUAAAQLMAUlziiIKGDaYhEAOw==',
        width: 2218,
        height: 3258,
        alt_text: 'A work made of engraving on ivory laid paper.',
      },
      main_reference_number: '1956.836',
      date_display: 'c. 1480',
      artist_display:
        'Israhel van Meckenem the Younger\nGerman, c. 1440/45-1503',
      image_id: 'd0979087-dc1b-f259-a23f-169cdced27ee',
    },
    {
      id: 6010,
      title: 'Number 19',
      thumbnail: {
        lqip: 'data:image/gif;base64,R0lGODlhAwAFAPMAAKlyV6pyWqt2Xad9W654XYx+d6qMUqyRV5OCdqeAaa+DbLWIaLeLcLKKd7ePgAAAACH5BAAAAAAALAAAAAADAAUAAAQLUASAFClptHUcMxEAOw==',
        width: 16610,
        height: 10836,
        alt_text:
          'Blurry rectangles of yellow, gray, and black float against background of orange.',
      },
      main_reference_number: '1957.308',
      date_display: '1949',
      artist_display:
        'Mark Rothko (Marcus Rothkowitz)\nAmerican, born Russia (Latvia), 1903–1970',
      image_id: '0a0e16c5-8510-bb2d-b2ca-424feae48d5c',
    },
    // {
    //   id: 3816,
    //   title: 'Ornamental Panel With Two Lovers',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBwAFAPQAAGpoVXJxXXRyXXVzXnd2Ynh2YHh3Ynl3Y3l3ZHt5ZHt5ZX17ZXx6Zn17Znx6Z358ZoB+aIF+aYF/aYB/a4J/a4OAaoKAa4OBa4KAbYOBbYWDb4aEb42LdI6Md4+MeAAAACH5BAAAAAAALAAAAAAHAAUAAAUdoBMYVzJo0wFxT9VhzbVZkccUSyM1GQIIBMWBEgIAOw==',
    //     width: 3372,
    //     height: 2284,
    //     alt_text:
    //       'A work made of engraving printed in black, on ivory laid paper.',
    //   },
    //   main_reference_number: '1956.854',
    //   date_display: '1480–90',
    //   artist_display:
    //     'Israhel van Meckenem the Younger\nGerman, c. 1440/45-1503',
    //   image_id: '763257c8-fbf9-0377-54ab-ae3cee7ff7a4',
    // },
    // {
    //   id: 9505,
    //   title: 'Two Studies of a Roma Woman and a Roma Boy in a Large Hat',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBgAFAPQAAJR+ZZaBaZ+JcJ+Kc6CKcKCLcqOMcqONcqKMc6ONc6SNcqWOdaeSeKmTeauUe66Yf7Obf6+agLCagbKcgbOcgbOdgbKcgrOdgrafhLulirymi8GrjsavkgAAAAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYYLZNE6c5BxVcEqYwhDBUUAIYSLQ0hfWEADs=',
    //     width: 5824,
    //     height: 5093,
    //     alt_text:
    //       'A work made of pen and black iron gall ink on tan laid paper.',
    //   },
    //   main_reference_number: '1959.2',
    //   date_display: 'c. 1605',
    //   artist_display: 'Jacques de Gheyn II\nDutch, 1565-1629',
    //   image_id: '9484feef-7c7f-e70f-4d5e-4320ece4bfd1',
    // },
    // {
    //   id: 7122,
    //   title: 'Seated Boy',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhAwAFAPMAANXCo9bDpdfDpdnEptjFptjFp9nGqdrGqtvGqtzIq9vIrNzJrOHMseHNseXRtwAAACH5BAAAAAAALAAAAAADAAUAAAQLsDmWDiIDFBGWMhEAOw==',
    //     width: 1467,
    //     height: 2250,
    //     alt_text: 'A work made of graphite on cream laid paper.',
    //   },
    //   main_reference_number: '1958.15',
    //   date_display: '1918',
    //   artist_display: 'Max Beckmann\nGerman, 1884-1950',
    //   image_id: 'f2a2c17c-8eee-a1b8-cfe4-71bb59f3798e',
    // },
    // {
    //   id: 11723,
    //   title: 'Woman at Her Toilette',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBwAFAPUAAE9MQV1XRl5YRmNdT2JgVGplV3RtW3JsX35wXW9rYHl3cX17eYJ4a4+Hd4GBfoaDf4iEfY6JgYmKhZuXjZWSkJaSkJydlpqZmZqamp+dmpqbnamelqCemqShk6Cgm6ujnK6nn7m0rbSzsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhwABDYnBYOgTFAvHAcA6JyIZyyQwAFZHGMykIPiEQpBEEADs=',
    //     width: 4946,
    //     height: 3703,
    //     alt_text:
    //       'Painted portrait dominated by loose, large brushstrokes of a woman, seen from the back, wearing a gauzy white off-the-shoulder dress and black choker, blond hair swept up, examining herself in a mirror at left. The background is a feathered swirl suggesting floral pattern in cool pale tones of gray, purple, pink, and blue.',
    //   },
    //   main_reference_number: '1924.127',
    //   date_display: '1875/80',
    //   artist_display: 'Berthe Morisot\nFrench, 1841-1895',
    //   image_id: '78c80988-6524-cec7-c661-a4c0a706d06f',
    // },
    // {
    //   id: 11294,
    //   title: 'Half-Length Female Nude',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBAAFAPQAAFlRTWpjXGtkXHJoX3VoY3drYnZsY3BqZHNrZHNvZ3lvZXNwaHNxaXZybH93a3l1bYZ+c4+CdZOCc5WGeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAUR4NMIEHMASxIUDmJMETFISggAOw==',
    //     width: 14989,
    //     height: 18651,
    //     alt_text: 'A work made of oil on canvas.',
    //   },
    //   main_reference_number: '1959.619',
    //   date_display: 'autumn 1906',
    //   artist_display: 'Pablo Picasso\nSpanish, active France, 1881–1973',
    //   image_id: '77ecb291-d716-f898-b491-3192a96307c8',
    // },
    // {
    //   id: 13096,
    //   title: 'The Baptism of the Eunuch',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBgAFAPQAAK2biK6biLejj7yqlsKvmsiznsi1n8m2ocu2oMq3o865os27p867qM+8qdHArNXBrdjDrNnFrdjFr9vFrtvJteHNtuDMt+LNt+DOuOLOuOPRu+PRvePTwAAAAAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYIKdV2bVhSARNFjUYgmItBBAUjCMdydOEADs=',
    //     width: 2625,
    //     height: 2250,
    //     alt_text: 'A work made of etching on buff laid paper.',
    //   },
    //   main_reference_number: '1924.618',
    //   date_display: '1641',
    //   artist_display: 'Rembrandt van Rijn\nDutch, 1606-1669',
    //   image_id: '6561d09e-7a49-394e-7ce1-ed7778ad0544',
    // },
    // {
    //   id: 14572,
    //   title: 'The Millinery Shop',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBgAFAPQAAEMtIk40KE83KlhHLVxELlNPN1hLMVJOP19UN1dYM1lUOVpUP2dAIWlKKHZKKXZLKWRNPGpbMGpaNGtaOkxUTF9dRlJaS15YSV5kUnZpRH12W4ZkM49uRI52VQAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUY4AUtFWZxHZIdExFEybAJQGE00sNQmqOEADs=',
    //     width: 5003,
    //     height: 4543,
    //     alt_text:
    //       'Impressionist painting of woman wearing green dress trying on hats.',
    //   },
    //   main_reference_number: '1933.428',
    //   date_display: 'c. 1879-86',
    //   artist_display: 'Edgar Degas\nFrench, 1834-1917',
    //   image_id: '6f513908-03cc-b974-633b-adfce56b7936',
    // },
    // {
    //   id: 21977,
    //   title: 'Melon-Shaped Ewer with Stylized Flowers',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBQAFAPQAAKWnorG0qL28tsPGrMbFyNHSztPUz9rez83N1dbV19bW29PT3tbW3tnZ397g1ePn0eDg3tra4tra49vb5ODg5+Pi6Obk6+Ti7Obl7QAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVYHRZ2NRATqEwxxMgkjEAS5UIBBUCADs=',
    //     width: 2265,
    //     height: 2250,
    //     alt_text:
    //       'A work made of stoneware with celadon glaze and underglaze incised decoration.',
    //   },
    //   main_reference_number: '1964.972',
    //   date_display: 'Goryeo dynasty (918–1392), 12th century',
    //   artist_display: 'Korea',
    //   image_id: '968e49fe-a6a4-bf2a-ce6e-948fa31f13ac',
    // },
    // {
    //   id: 20199,
    //   title: 'Final Study for "Bathers at Asnières"',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhCAAFAPUAAD5hSWxVTHRcTXZmX39nWVRjZGxpYYF5XYF1cn+DX3OGbnyDcJCVaICAdYyHcpGGdsCafH59kIaFiYuIjJmVgpeYh5uQmayfgKqdi7WTjLObjqOXk6GUlaqbk7GhmYqUpZ+dqI2YsZ6isKSkqreqqqipsLiyupmkwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlwI/oFOKASpUFxTTakBQAw+Pi0XQahcGBgclYJAgCRBBwJCaRIAA7',
    //     width: 10657,
    //     height: 6653,
    //     alt_text: 'A work made of oil on panel.',
    //   },
    //   main_reference_number: '1962.578',
    //   date_display: '1883',
    //   artist_display: 'Georges Seurat\nFrench, 1859-1891',
    //   image_id: '1db67905-d421-95bf-1e91-4b60dd776886',
    // },
    // {
    //   id: 25699,
    //   title: 'Birmingham Race Riot, from X + X (Ten Works by Ten Painters)',
    //   thumbnail: {
    //     lqip: 'data:image/gif;base64,R0lGODlhBgAFAPQAADg3ODg4OD49PD89PEZEQ0xKSU1MS1BPTlFPTllXVmpoZmxqaGxqam9ta3FubnJwbnl2dXl3d4WCgZGPjZOQjpSRj5WSkZ2amaOgnquoprCtq7q3tAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUYIHYIxNBsU7IUjyNBVJUBhoQUChNEmnWFADs=',
    //     width: 6899,
    //     height: 5795,
    //     alt_text: 'A work made of screenprint on white wove paper.',
    //   },
    //   main_reference_number: '1966.339.10',
    //   date_display: '1964',
    //   artist_display:
    //     'Andy Warhol (American, 1928-1987)\nprinted by Sirocco Screenprinters (American, 20th century), under the supervision of Ives-Sillman (American, 20th century)\npublished by Wadsworth Atheneum (American, 20th-21st century)',
    //   image_id: '5f8a625a-fbaf-7666-a803-2e8061fd188d',
    // },
  ],
  info: {
    license_text:
      'The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.',
    license_links: [
      'https://creativecommons.org/publicdomain/zero/1.0/',
      'https://www.artic.edu/terms',
    ],
    version: '1.10',
  },
  config: {
    iiif_url: 'https://www.artic.edu/iiif/2',
    website_url: 'http://www.artic.edu',
  },
};

export default artworkData;

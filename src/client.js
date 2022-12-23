import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId : 'ctcht68w',
    dataset : 'production',
    apiVersion : '2022-07-08',
    useCdn : true,
    token : 'skxPZ9St0qR7SL6PwxdZBErBdBwah3bM8FOlG4X8OnPGE9wMpN78fGmbwk3UBXqzDghGm5bU8MyLIHmlrPPtFDhEIhKQIP5fterw2DE7TIs7bW2GUbbB3Iu4XGyyyS4eDeYOqkTcUOVOI5whaGmFptzwNuTtB0VFoAyYw24h4LEvm3sFBevk'
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
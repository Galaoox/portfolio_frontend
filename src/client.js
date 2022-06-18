import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { env } from './constants';

export const client = sanityClient({
    ...env.sanity
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
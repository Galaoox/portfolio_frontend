import { urlFor, client } from '../client';


const getAbouts = async () => {
    const query = '*[_type == "abouts"]';
    const data = await client.fetch(query);
    return data.map(adaptAbout);
}

const adaptAbout = (about) => {
    return {
        id: about._id,
        title: about.title,
        description: about.description,
        imgUrl: urlFor(about.imgUrl)
    }
}

export default {
    getAbouts,
}
const sanity = {
    projectId: import.meta.env.VITE_SANITY_PROJECTID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: import.meta.env.VITE_SANITY_APIVERSION,
    useCdn: import.meta.env.VITE_SANITY_USECND === 'true',
    token: import.meta.env.VITE_SANITY_TOKEN,

}

export default {
    sanity,
}
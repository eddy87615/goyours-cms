export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-19'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION)
console.log('Token:', process.env.NEXT_PUBLIC_SANITY_TOKEN)

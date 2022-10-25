import api from '../baseApi'

import { PostAttractions, PutAttractions } from './types'

const path = 'Attractions'

export const getAttractions = () => api.get(`/${path}`)

export const putAttractions = (id: number, payload: PutAttractions) => api.put<PutAttractions>(`/${path}/${id}`, payload)

export const postAttractions = (payload: PostAttractions) => api.post<PostAttractions>(`/${path}/`, payload)

export const getAttractionsByState = (state: string) => api.get(`/${path}/${state}`)

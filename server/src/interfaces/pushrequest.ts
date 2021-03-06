import { IDevice } from './../models'

export interface IPushRequest {
    title: string
    subtitle: string
    content: string
    payload: any
    category: string
}
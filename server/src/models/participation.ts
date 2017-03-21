import * as mongoose from 'mongoose'
import { IUser } from './user'


export interface IParticipation {
    user: string | IUser
    event: string
    willAttend: boolean
    didAttend: boolean
}

export interface IParticipationModel extends IParticipation, mongoose.Document { }

let participationSchema = new mongoose.Schema({
    user: mongoose.SchemaTypes.ObjectId,
    event: mongoose.SchemaTypes.ObjectId,
    willAttend: Boolean,
    didAttend: Boolean
})

export let Participation = mongoose.model<IParticipationModel>('Participation', participationSchema)
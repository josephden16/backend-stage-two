import mongoose, { Model } from 'mongoose';

export interface IPerson extends Document {
  name: string;
}

export interface IPersonModel extends Model<IPerson> {
  isNameTaken(name: string, excludePersonId?: string): Promise<boolean>;
}

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'This name is already taken'],
    required: [true, 'You must include a name'],
  },
});

personSchema.statics.isNameTaken = async function (name: string, excludePersonId?: string) {
  const person = await this.findOne({ name, _id: { $ne: excludePersonId } });
  return !!person;
};

const Person = mongoose.model<IPerson, IPersonModel>('Person', personSchema);

export default Person;

import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProblemSchema = new Schema({
  title: 
  {
    type: String,
    required: [true, 'Title is required'],
  },
  description: 
  {
    type: String,
    required: [true, 'Description is required'],
  },
  difficulty: 
  {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: [true, 'Difficulty is required'],
    default: 'Easy',
  },
  testCases:[
    {
        input:{
            type: String,
            required: [true, 'Input is required'],
        },
        output:{
            type: String,
            required: [true, 'Output is required'],
        }
    }
  ],
  editorial:{
    type: String,
  }
});

const Problem = mongoose.model('Problem', ProblemSchema);
module.exports = Problem;
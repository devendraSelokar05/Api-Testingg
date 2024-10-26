import  mongoose  from "mongoose";

const newmoviesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rank: { type: Number, required: true },
    rankChange: { type: String, required: true },
    rating: { type: Number, required: true },
    imdbRating: { type: Number, required: true },
    imdbVotes: { type: String, required: true },
    backdropImage: { type: String, required: true },
    posterImage: { type: String, required: true },
    duration: { type: String, required: true },
    highestRank: { type: Number, required: true },
    top10Days: { type: Number, required: true },
    top100Days: { type: Number, required: true },
    top1000Days: { type: Number, required: true },
    watchOptions: [
      {
        platform: { type: String, required: true },
        price: { type: String, required: true }
      }
    ],
    likes: { type: String, required: true },
    dislikes: { type: String, required: true },
    watchlistText:{ type: String, required: true},
    seenText: { type: String, required: true },
    syncText: { type: String, required: true },
    videoId: { type: String, required: true },
    type: { type: [String], required: true }, // Array of strings
    videoId: { type: String, required: true }, // Add videoId field here
    genre: { type: [String], required: true }, // Array of strings
    seasons: [
      {
        seasonNumber: { type: Number},
        episodes: { type: Number},
        posterImage: { type: String}
      }
    ],
    description:{type: String},
    cast: [
      {  
        character: { type: String },
        name: { type: String },
        photo: { type: String }
      }
    ]    

},{timestamps:true})

 const Movie = mongoose.model('Movie', newmoviesSchema)
 export default Movie

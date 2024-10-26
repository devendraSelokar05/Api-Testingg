import Movie from '../models/newmovies.model.js';

// Get all movies or filter by title, type, or genre
export const getMovies = async (req, res) => {
  try {
    const { title, type, genre } = req.query;
    let query = {};

    if (title) {
      query.title = new RegExp(title, 'i'); // Case-insensitive search
    }

    if (type) {
      query.type = new RegExp(type, 'i'); // Search for type
    }

    if (genre) {
      query.genre = new RegExp(genre, 'i'); // Search for genre
    }


    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movies', error: error.message });
  }
};

// Get a single movie by ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving movie', error: error.message });
  }
};

// Add a new movie
export const createMovie = async (req, res) => {
  try {
    // Check if req.body is an array
    if (Array.isArray(req.body)) {
      // If it's an array, map through it and create an array of Movie instances
      const newMovies = req.body.map(movieData => new Movie(movieData));
      
      // Save all movies to the database
      const savedMovies = await Movie.insertMany(newMovies);
      return res.status(201).json(savedMovies); // Return the saved movies
    } else {
      // If it's a single movie object
      const newMovie = new Movie(req.body);
      await newMovie.save();
      return res.status(201).json(newMovie); // Return the saved movie
    }
  } catch (error) {
    console.error('Error creating movie:', error);
    return res.status(500).json({ message: 'Error creating movie', error: error.message });
  }
};

// Update a movie
export const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie', error: error.message });
  }
};

  

// Delete a movie
export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error: error.message });
  }
};

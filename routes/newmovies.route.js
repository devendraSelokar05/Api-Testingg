import express from 'express';
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../controllers/newmovies.controller.js';

const router = express.Router();

// Get all movies or filter
router.get('/New-movies', getMovies);

// Get a movie by ID
router.get('/New-movies/:id', getMovieById);

// Add a new movie
router.post('/Create-movies', createMovie);

// Update a movie

router.put('/New-movies/:id', updateMovie);

// Delete a movie
router.delete('/:id', deleteMovie);

export default router;

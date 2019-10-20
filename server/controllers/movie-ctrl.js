const Movie = require('../models/movie-model');

createMovie = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie'
        })
    }

    const movie = new Movie(body);

    if (!movie) {
        return res.status(400).json({ sucess: false, error: err })
    }

    movie.save()
        .then((movie) => {
            return res.status(201).json({
                success: true,
                id: movie.id,
                name: movie.name,
                message: 'Movie created'
            })
        })
        .catch(err => {
            return res.status(400).json({
                err,
                message: 'Movie not created'
            })
        })
}

updateMovie = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update'
        })
    }

    const movie = await Movie.findOne({ _id: req.params.id });
    if (!movie) {
        return res.status(404).json({
            err,
            message: 'Movie not found!'
        })
    };

    movie.name = body.name;
    movie.time = body.time;
    movie.rating = body.rating;
    movie.save()
      .then((movie) => {
          return res.status(200).json({
              success: true,
              id: movie._id,
              name: movie.name,
              message: 'Movie updated!'
          })
      })
      .catch(err => {
          return res.status(404).json({
              err,
              message: 'Movie not updated!'
          })
      })
}

deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({ _id: req.params.id })
        if (!movie) {
            return res.status(404).json({
                success: false,
                error: 'Movie not found'
            })
        }
        return res.status(200).json({
            success: true,
            data: movie
        })
    } catch (err) {
        console.log(err);
        return null;
    }
}

getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findOne({ _id: req.params.id });
        if (!movie) {
            return res.status(404).json({
                success: false,
                error: 'Movie not found'
            })
        }
        return res.status(200).json({ success: true, movie: movie})
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

getMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        if (!movies.length) {
            return res.status(404).json({
                success: false,
                error: 'Movie not found'
            })
        }
        return res.status(200).json({ success: true, movies: movies})
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById
};


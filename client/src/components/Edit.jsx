import { useNavigate, useParams } from "react-router";
import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";

const initalData = {
  title: "",
  genre: "",
  players: "",
  date: "",
  summary: "",
};

export function Edit() {
  const { id: gameId } = useParams();
  const navigate = useNavigate();
  const { request, data: game } = useFetch(`data/games/${gameId}`)

  const validate = (data) => {
    const errors = {};

    if (!data.title) {
      errors.title = "Title is required!";
    }

    if (data.players === 0 || Number(data.players) < 0) {
      errors.players = "Players are required!";
    }

    if (!data.genre) {
      errors.genre = "Genre is required!";
    }

    if (!data.imageUrl) {
      errors.imageUrl = "Image is required!";
    }

    if (!data.date) {
      errors.date = "Date is required!";
    }

    if (!data.summary) {
      errors.summary = "Summary is required!";
    }

    return errors;
  };

  const editGame = async (data) => {
    data.players = Number(data.players)
    try {
      await request(`data/games/${gameId}`, 'PUT', data)
      navigate(`/games/details/${gameId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const { errors , onSubmitHandler, inputFiller, setData } = useForm(
    initalData,
    editGame,
    validate
  );

  useEffect(() => {
    if (game) {
        setData(game)
    }
  }, [game, setData])

  

  return (
    // <!-- add Page ( Only for logged-in users ) -->
    <section id="edit-page">
      <form id="add-new-game" action={onSubmitHandler}>
        <div className="container">
          <h1>Edit Game</h1>

          <div className="form-group-half">
            <label htmlFor="gameName">Game Name:</label>
            <input
              type="text"
              id="gameName"
              {...inputFiller('title')}
              placeholder="Enter game title..."
            />
            {errors.title && <p>{errors.title}</p>}
          </div>

          <div className="form-group-half">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              {...inputFiller('genre')}
              placeholder="Enter game genre..."
            />
            {errors.genre && <p>{errors.genre}</p>}
          </div>

          <div className="form-group-half">
            <label htmlFor="activePlayers">Active Players:</label>
            <input
              type="number"
              id="activePlayers"
              {...inputFiller('players')}
              min="0"
              placeholder="0"
            />
            {errors.players && <p>{errors.players}</p>}
          </div>

          <div className="form-group-half">
            <label htmlFor="releaseDate">Release Date:</label>
            <input
              type="date"
              id="date"
              {...inputFiller('date')}
            />
            {errors.date && <p>{errors.date}</p>}
          </div>

          <div className="form-group-full">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              {...inputFiller('imageUrl')}
              placeholder="Enter image URL..."
            />
            {errors.imageUrl && <p>{errors.imageUrl}</p>}
          </div>

          <div className="form-group-full">
            <label htmlFor="summary">Summary:</label>
            <textarea
              {...inputFiller('summary')}
              id="summary"
              rows="5"
              placeholder="Write a brief summary..."
            ></textarea>
            {errors.summary && <p>{errors.summary}</p>}
          </div>

          <input className="btn submit" type="submit" value="EDIT GAME" />
        </div>
      </form>
    </section>
  );
}

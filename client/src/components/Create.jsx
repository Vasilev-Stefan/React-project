import { useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";

const intialData = {
  title: "",
  genre: "",
  players: "",
  date: "",
  imageUrl: "",
  summary: "",
};

export function Create() {
  const { request } = useFetch();
  const navigate = useNavigate();
  
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

        return errors
    };
    
    const createGame = async (data) => {
        data.players = Number(data.players)
        try {
            await request("data/games", "POST", data);
            navigate('/')
        } catch (error) {
            alert(error.message);
        }
    };
    const { errors, onSubmitHandler, inputFiller} = useForm(intialData, createGame, validate)
    
    return (
        <section id="add-page">
      <form id="add-new-game" action={onSubmitHandler}>
        <div className="container">
          <h1>Add New Game</h1>

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
              id="releaseDate"
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
              id="summary"
              {...inputFiller('summary')}
              rows="5"
              placeholder="Write a brief summary..."
            ></textarea>
            {errors.summary && <p>{errors.summary}</p>}
          </div>

          <input className="btn submit" type="submit" value="ADD GAME" />
        </div>
      </form>
    </section>
  );
}

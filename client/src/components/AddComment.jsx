import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";



export function AddComment() {
  const { id: gameId } = useParams();
  const navigate = useNavigate();
  const { request } = useFetch()

  const initialData = {
    gameId,
    comment: "",
  };

  const validate = (data) => {
    const errors = {}

    if(!data.comment){
        errors.comment = 'Text is required!'
    }

    return errors
  }

  const submitComment = async (data) => {
    try {
        await request('data/comments', 'POST', data)
        console.log('comment adde')
        navigate(`/games/details/${gameId}`)
    } catch (error) {
        alert(error.message)
    }
  }

  const { errors, onSubmitHandler, inputFiller} = useForm(
    initialData,
    submitComment,
    validate
  )

  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" action={onSubmitHandler}>
        <textarea {...inputFiller('comment')} placeholder="Comment......"></textarea>
        {errors.comment && <p>{errors.comment}</p>}
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
}

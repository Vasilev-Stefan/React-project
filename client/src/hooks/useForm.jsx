import { useState } from "react";

export function useForm(initialValues, onSumbitCallback, validate) {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((state) => ({
        ...state,
        [name]: value
    }))
  };

  const onSubmitHandler = () => {

    const validationErrors = validate ? validate(data) : {}

    if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors)
        return;
    }

    setErrors({})
    onSumbitCallback(data)
  }

  const inputFiller = (name) => ({
    name,
    value: data[name],
    onChange: onChangeHandler

  })

  return {
    data,
    setData,
    errors,
    onChangeHandler,
    onSubmitHandler,
    setErrors,
    inputFiller
  }
}



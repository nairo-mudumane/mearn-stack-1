import React from "react";
import { api } from "../config";
import { IData, IWorkout } from "../types";

export function WorkoutForm() {
  const [title, setTitle] = React.useState("");
  const [load, setLoad] = React.useState("");
  const [reps, setReps] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsDone(false);
    }, 4000);
  }, [isDone]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 4000);
  }, [isError]);

  const isAllFieldsValid = () => {
    if (isLoading) {
      return false;
    } else if (
      title &&
      title.length > 0 &&
      load &&
      load.length > 0 &&
      reps &&
      reps.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const workout = {
      title,
      load,
      reps,
    };

    return api
      .post<IData<Pick<IWorkout, "_id">>>("/workouts", workout)
      .then((response) => {
        if (response.status === 201) {
          setIsDone(true);
          setTitle("");
          setLoad("");
          setReps("");
          return;
        } else {
          throw new Error(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label htmlFor="title">Exercise Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
      />

      <label htmlFor="load">Load (kg)</label>
      <input
        type="number"
        name="load"
        id="load"
        value={load}
        onChange={(event) => setLoad(event.currentTarget.value)}
      />

      <label htmlFor="reps">Reps</label>
      <input
        type="number"
        name="reps"
        id="reps"
        value={reps}
        onChange={(event) => setReps(event.currentTarget.value)}
      />

      {isError && <div className="error">Not created!</div>}
      {isDone && <p>Created!</p>}

      <button type="submit" disabled={!isAllFieldsValid()}>
        {isLoading ? "Sending" : "Add workout"}
      </button>
    </form>
  );
}

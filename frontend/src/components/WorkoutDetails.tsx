import React from "react";
import { IWorkout } from "../types";
import { deleteById } from "../services";

interface IWorkoutDetailsProps {
  workout: IWorkout;
}

export function WorkoutDetails(props: IWorkoutDetailsProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    return await deleteById(props.workout._id)
      .then((result) => {
        if (result) {
          setIsDone(true);
          return window.alert("Deleted!");
        }
      })
      .catch(() => {
        setIsDone(false);
        return window.alert("Not deleted");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="workout-details" style={{ opacity: isDone ? "0.7" : "1" }}>
      <h4>{props.workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {props.workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {props.workout.load}
      </p>
      <p>{props.workout.createdAt}</p>
      <span onClick={handleDelete}>{isLoading ? "deleting..." : "delete"}</span>
    </div>
  );
}

import React from "react";
import { IWorkout } from "../types";

interface IWorkoutDetailsProps {
  workout: IWorkout;
}

export function WorkoutDetails(props: IWorkoutDetailsProps) {
  return (
    <div className="workout-details">
      <h4>{props.workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {props.workout.load}
      </p>
      <p>
        <strong>Reps:</strong> {props.workout.load}
      </p>
      <p>{props.workout.createdAt}</p>
    </div>
  );
}

import React from "react";
import { IWorkout } from "../types";

interface IWorkoutDetailsProps {
  workout: IWorkout;
}

export function WorkoutDetails(props: IWorkoutDetailsProps) {
  return <h2>{props.workout.title}</h2>;
}

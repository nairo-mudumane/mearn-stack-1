import React from "react";
import { useQuery } from "@tanstack/react-query";
import * as services from "../services";
import { WorkoutDetails, WorkoutForm } from "../components";

export function Home() {
  const {
    data: workouts,
    isError,
    isLoading,
  } = useQuery(["/"], services.getAll, {
    refetchInterval: 10000,
    staleTime: 10000,
  });

  if (isLoading) {
    return (
      <div className="home">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="home">
        <h3>error fetching data</h3>
      </div>
    );
  }

  return (
    <div className="home">
      {workouts && (
        <div className="workouts">
          {workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        </div>
      )}

      <WorkoutForm />
    </div>
  );
}

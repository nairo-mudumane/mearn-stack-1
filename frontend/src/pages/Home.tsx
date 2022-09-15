import React from "react";
import { useQuery } from "@tanstack/react-query";
import * as services from "../services";

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

  console.log(workouts);

  return (
    <div className="home">
      <h2>Home</h2>

      {workouts && (
        <div className="workouts">
          {workouts.map((workout) => (
            <p key={workout._id}>{workout.title}</p>
          ))}
        </div>
      )}
    </div>
  );
}

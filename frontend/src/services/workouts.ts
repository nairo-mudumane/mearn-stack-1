import { api } from "../config";
import { IData, IWorkout } from "../types";

export async function getAll(): Promise<IWorkout[] | undefined> {
  const workouts = api
    .get<IData<IWorkout[]>>("/workouts")
    .then((response) => {
      if (response.status === 200) {
        return response.data.data;
      }
    })
    .catch((error) => {
      return undefined;
    });

  return workouts;
}

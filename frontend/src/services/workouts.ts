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
      console.error(error);
      return undefined;
    });

  return workouts;
}

export async function deleteById(id: string): Promise<boolean> {
  return await api
    .delete<IData<Pick<IWorkout, "_id">>>(`/workouts/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

import { ListPeoplesDTO } from "../dtos/ListPeoplesDTO";
import { ListToAdd } from "../mock/dataAdding";

export function handleAddInList() {
  if (ListToAdd.length > 0) {
    const lengthList = ListToAdd.length;

    const randomIndex = Math.floor(Math.random() * lengthList);
    const chosenToAdd = ListToAdd[randomIndex];

    ListToAdd.splice(randomIndex, 1);

    return { error: false, chosenToAdd };
  }

  return { error: true, chosenToAdd: {} as ListPeoplesDTO };
}

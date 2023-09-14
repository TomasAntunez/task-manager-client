import { useTasksServices } from '../../../../hooks';


export const useTask = (id: string) => {

  const { removeTask } = useTasksServices();

  const handleClickRemoveButton = async () => {
    await removeTask(id);
  }


  return {
    handleClickRemoveButton
  };
};

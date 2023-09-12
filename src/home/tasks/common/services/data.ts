import { v4 as uuid } from 'uuid';


interface Task {
  id: string;
  title: string;
  description: string
}

export const tasks: Task[] = [
  {
    id: uuid(),
    title: 'test1',
    description: 'description test 1'
  },
  {
    id: uuid(),
    title: 'test2',
    description: 'description test 2'
  },
  {
    id: uuid(),
    title: 'test3',
    description: 'description test 3'
  },
  {
    id: uuid(),
    title: 'test4',
    description: 'description test 4'
  },
  {
    id: uuid(),
    title: 'test5',
    description: 'description test 5'
  },
  {
    id: uuid(),
    title: 'test6',
    description: 'description test 6'
  },
  {
    id: uuid(),
    title: 'test7',
    description: 'description test 7'
  },
  {
    id: uuid(),
    title: 'test8',
    description: 'description test 8'
  }
];

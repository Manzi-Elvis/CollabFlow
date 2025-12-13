export const mockBoardState = {
  activeBoardId: 'board-1',
  boards: {
    'board-1': {
      id: 'board-1',
      name: 'Product Roadmap',
      columnIds: ['col-1', 'col-2'],
    },
  },
  columns: {
    'col-1': {
      id: 'col-1',
      name: 'Todo',
      boardId: 'board-1',
      position: 0,
      taskIds: ['task-1'],
    },
    'col-2': {
      id: 'col-2',
      name: 'In Progress',
      boardId: 'board-1',
      position: 1,
      taskIds: [],
    },
  },
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Set up project structure',
      columnId: 'col-1',
      position: 0,
    },
  },
}
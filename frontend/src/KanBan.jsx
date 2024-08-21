import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const KanbanBoard = () => {
    const [tasks, setTasks] = useState([
        { id: '1', title: 'Design Landing Page', status: 'todo' },
        { id: '2', title: 'Develop Authentication Module', status: 'in-progress' },
        { id: '3', title: 'Setup Database Schema', status: 'done' },
        { id: '4', title: 'Write Unit Tests for API', status: 'todo' },
        { id: '5', title: 'Implement Redux for State Management', status: 'in-progress' },
        { id: '6', title: 'Optimize SEO for Blog', status: 'done' },
        { id: '7', title: 'Create User Profile Page', status: 'todo' },
        { id: '8', title: 'Integrate Payment Gateway', status: 'in-progress' },
        { id: '9', title: 'Deploy App to Production', status: 'done' },
        { id: '10', title: 'Design Dashboard UI', status: 'todo' },
        { id: '11', title: 'Implement Websockets for Real-Time Updates', status: 'in-progress' },
        { id: '12', title: 'Fix Responsive Issues on Mobile', status: 'done' },
        { id: '13', title: 'Set Up CI/CD Pipeline', status: 'todo' },
        { id: '14', title: 'Develop Notification System', status: 'in-progress' },
        { id: '15', title: 'Conduct Code Review', status: 'done' },
        { id: '16', title: 'Create Documentation for API', status: 'todo' },
        { id: '17', title: 'Implement Role-Based Access Control', status: 'in-progress' },
        { id: '18', title: 'Test Cross-Browser Compatibility', status: 'done' },
        { id: '19', title: 'Set Up Monitoring and Alerts', status: 'todo' },
        { id: '20', title: 'Migrate Database to Cloud', status: 'in-progress' },
    ]);
    

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };

  const renderColumn = (status, title) => (
    <Droppable droppableId={status}>
      {(provided) => (
        <Box
          bg="gray.200"
          p={4}
          rounded="md"
          w="100%"
          minH="500px"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <Heading size="lg" mb={4} textAlign="center" color="teal.600">
            {title}
          </Heading>
          {tasks
            .filter((task) => task.status === status)
            .map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <Box
                    bg="white"
                    p={4}
                    mb={3}
                    rounded="md"
                    shadow="md"
                    borderLeft="4px solid"
                    borderColor={
                      status === 'todo'
                        ? 'blue.400'
                        : status === 'in-progress'
                        ? 'orange.400'
                        : 'green.400'
                    }
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Text fontWeight="medium">{task.title}</Text>
                  </Box>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Flex
        className="kanban-board"
        gap={6}
        p={6}
        justify="space-between"
        bg="gray.50"
        rounded="lg"
        shadow="lg"
      >
        <Flex direction="column" flex="1" mx={2}>
          {renderColumn('todo', 'To-Do')}
        </Flex>
        <Flex direction="column" flex="1" mx={2}>
          {renderColumn('in-progress', 'In Progress')}
        </Flex>
        <Flex direction="column" flex="1" mx={2}>
          {renderColumn('done', 'Done')}
        </Flex>
      </Flex>
    </DragDropContext>
  );
};

export default KanbanBoard;

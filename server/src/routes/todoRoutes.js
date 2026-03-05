import express from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleDone,
  deleteTodo,
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.patch('/:id/done', toggleDone);
router.delete('/:id', deleteTodo);

export default router;

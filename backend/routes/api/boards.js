const express = require('express');
const router = express.Router();

// Load Board model
const Board = require('../../models/Board');

// @route GET api/boards/test
// @description tests boards route
// @access Public
router.get('/test', (req, res) => res.send('testing board route!'));

// @route GET api/boards
// @description Get all boards
// @access Public
router.get('/', (req, res) => {
    Board.find()
    .then(boards => res.json(boards))
    .catch(err => res.status(404).json({ noboardsfound: 'No Boards found'}));
})

// @route GET api/boards/:id
// @description Get single board by id
// @access Public
router.get('/:id', (req, res) => {
    Board.findById(req.params.id)
      .then(board => res.json(board))
      .catch(err => res.status(404).json({ noboardfound: 'No Board found' }));
  });

// @route GET api/board
// @description add/save board
// @access Public
router.post('/', (req, res) => {
    Board.create(req.body)
      .then(board => res.json({ msg: 'Board added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this board' }));
  });

// @route GET api/boards/:id
// @description Update board
// @access Public
router.put('/:id', (req, res) => {
    Board.findByIdAndUpdate(req.params.id, req.body)
      .then(board => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

// @route GET api/boards/:id
// @description Delete board by id
// @access Public
router.delete('/:id', (req, res) => {
    Board.findByIdAndRemove(req.params.id, req.body)
      .then(board => res.json({ mgs: 'Board entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a board' }));
  });
  
module.exports = router;
  
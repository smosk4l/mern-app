// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals!" });
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Seted goal!" });
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated goal ${req.params.id}` });
};

// @desc    Delete goal
// @route   DELTETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
};
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
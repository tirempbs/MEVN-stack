export function index(req, res) {
  //Find all tasks
  return res.status(200).json();
}

export function create(req, res) {
  //Create a task
  return res.status(201).json();
}

export function update(req, res) {
  //Update a task
  return res.status(204).json();
}

export function remove(req, res) {
  //Delete a task
  return res.status(204).json();
}

export function show(req, res) {
  //Get task by id
  return res.status(200).json();
}
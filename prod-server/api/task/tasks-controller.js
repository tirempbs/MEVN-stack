"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

function index(req, res) {
  //Find all tasks
  return res.status(200).json();
}

function create(req, res) {
  //Create a task
  return res.status(201).json();
}

function update(req, res) {
  //Update a task
  return res.status(204).json();
}

function remove(req, res) {
  //Delete a task
  return res.status(204).json();
}

function show(req, res) {
  //Get task by id
  return res.status(200).json();
}
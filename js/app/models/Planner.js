class Planner {
  constructor() {
    this._studyPlanner = [];
  }

  add(plan) {
    this._studyPlanner.push(plan);
  }

  deleteItem(id) {
    //apaga da lista o item correspondente ao id clicado
    return this._studyPlanner.splice(id, 1);
  }

  get studyPlanner() {
    return [].concat(this._studyPlanner);
  }
}

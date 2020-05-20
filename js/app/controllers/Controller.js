class Controller {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputSubject = $("#subject");
    this._inputDate = $("#date");
    this._inputTime = $("#time");

    this._planner = new Planner();
    this._plannerView = new PlannerView($("#plannerView"));
    this._message = new Message();
    this._messageView = new MessageView($("#messageView"));

    this._table = $(".table");
  }

  add(event) {
    event.preventDefault();

    this._planner.add(this._createPlan());
    this._plannerView.update(this._planner);

    this._message.text = "Planejamento adicionado com sucesso!";
    this._messageView.update(this._message);

    this._cleanForm();
  }

  delete(event) {
    let itemID;

    //guarda em itemID o id do elemento clicado
    itemID = event.target.parentNode.parentNode.parentNode.id;

    console.log(event.target.parentNode.parentNode.parentNode.id);

    //passa o id que se deseja apagar para o método deleteItem
    this._planner.deleteItem(itemID);
    this._plannerView.update(this._planner);

    console.log(this._planner);

    this._message.text = "Item apagado com sucesso!";
    this._messageView.update(this._message);
  }

  _createPlan() {
    return new Plan(
      DateHelper.textToDate(this._inputDate.value),
      this._inputSubject.value,
      this._inputTime.value
    );
  }

  _cleanForm() {
    this._inputSubject.value = "";
    this._inputDate.value = "";
    this._inputTime.value = "";

    this._inputSubject.focus();
  }
}

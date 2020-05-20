class MessageView extends View {
  constructor(el) {
    super(el);
  }

  template(model) {
    return model.text ? `<p class="alert">${model.text}</p>` : `<p></p>`;
  }
}

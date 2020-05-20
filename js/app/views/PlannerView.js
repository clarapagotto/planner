class PlannerView extends View {
  constructor(el) {
    super(el);
  }

  template(model) {
    return `
        <table class="table-responsive">
        <thead>
            <tr>
                <th>DATA</th>
                <th>ASSUNTO</th>
                <th>1ª REVISÃO<br><i class="desc">1 dia depois, 10min/h</i></th>
                <th>2ª REVISÃO<br><i class="desc">1 sem. depois, 5min/h</i></th>
                <th>3ª REVISÃO<br><i class="desc">15 dias depois, 2min/h</i></th>
                <th>4ª REVISÃO<br><i class="desc">1 mês depois, 1min/h</i></th>
                <th width="30px"></th>
            </tr>
        </thead>
        
        <tbody>
            ${model.studyPlanner
              .map(
                (n, i) =>
                  //fornece para cada item um id de acordo com o index do elemento
                  //capta a data e o tempo de estudo necessário a revisão, de acordo com seu numero (de 1 a 4)
                  `<tr id="${i}" class="item">
                    <td>${DateHelper.dateToText(n._date)}</td>
                    <td>${n._subject}</td>
                    <td>${n._review(1)}</td>
                    <td>${n._review(2)}</td>
                    <td>${n._review(3)}</td>
                    <td>${n._review(4)}</td>
                    <td><button class="delete-btn" onclick="controller.delete(event)"><i class="ion-ios-close-outline"></i></button></td>
                </tr>
                `
              )
              .join("")}
                     
        </tbody>
    </table>
    `;
  }
}

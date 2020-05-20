class Plan {
  constructor(date, subject, time) {
    this._subject = subject;
    this._date = new Date(date.getTime());
    this._time = time;
    Object.freeze(this);
  }

  get subject() {
    return this._subject;
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get time() {
    return this._time;
  }

  _calculateTime(t) {
    /*
       calcula o tempo de estudo de acordo com o n da revisão:
       1 rev = 10min/h estudada
       2 rev = 5min/h estudada
       3 rev = 2min/h estudada
       4 rev = 1min/h estudada
    */

    let studyTime = new Map();
    studyTime.set(1, Math.ceil((this._time / 60) * 10));
    studyTime.set(2, Math.ceil((this._time / 60) * 5));
    studyTime.set(3, Math.ceil((this._time / 60) * 2));
    studyTime.set(4, Math.ceil((this._time / 60) * 1));

    return studyTime.get(t);
  }

  _calculateDate(d) {
    /*
       calcula a data de revisao de acordo com o n da revisão:
       1 rev = 1 dia depois
       2 rev = 7 dias depois
       3 rev = 15 dias depois
       4 rev = 1 mês depois
    */

    let date = new Date(this.date);

    if (d == 1) {
      return new Date(date.setDate(date.getDate() + 1));
    } else if (d == 2) {
      return new Date(date.setDate(date.getDate() + 7));
    } else if (d == 3) {
      return new Date(date.setDate(date.getDate() + 15));
    } else if (d == 4) {
      return new Date(date.setMonth(date.getMonth() + 1));
    }
  }

  _review(n) {
    return ` ${DateHelper.dateToText(
      this._calculateDate(n)
    )} <i>por ${this._calculateTime(n)}min</i>`;
  }
}

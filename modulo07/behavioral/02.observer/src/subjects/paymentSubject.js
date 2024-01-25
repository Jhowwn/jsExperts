export default class PaymentSubject {
  #observers = new Set()
  notify(data) {
    this.#observers.forEach(observer => observer.update(data))
  }

  unsubscribe(observate) {
    this.#observers.delete(observate)
  }

  subscribe(observable) {
    this.#observers.add(observable)
  }
}
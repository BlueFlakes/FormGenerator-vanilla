import {ArrayList} from "../../shared/ArrayList.js";
import {Observer} from "./Observer.js";

export class ObserversEden {
    constructor() {
        this.observersContainer = new ArrayList();
    }

    addObserver(observer) {
        if (!(observer instanceof Observer)) {
            throw "| Error: Given object is not instanceof Observer";
        }

        this.observersContainer.add(observer);
    }

    removeObserver(observer) {
        this.observersContainer.remove(observer);
    }

    notifyAll(context) {
        if (typeof context !== "object") {
            throw "Invalid context delivered, expected typeof object";
        }

        let iterator = this.observersContainer.iterator();
        while (iterator.hasNext()) {
            let observer = iterator.next();
            observer.notify(context);
        }
    }
}
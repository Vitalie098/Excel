import {DomListener} from './DomListener'

export class ExcelComponent extends DomListener {

    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ""
        this.emitter = options.emitter
        this.unSubscribers = []

        this.prepare()
    }

    prepare() {}

    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    $on(event, fn) {
       const unSub = this.emitter.subscribe(event, fn)
       this.unSubscribers.push(unSub)
    }

    init() {
        this.initDomListeners()
    }

    destroy() {
        this.removeDomListeners()
        this.unSubscribers.forEach(unSub => unSub())
    }

    toHtml() {
        return ''
    }
}
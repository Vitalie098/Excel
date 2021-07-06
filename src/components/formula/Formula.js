import {ExcelComponent} from '../../core/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        });
    }

    init() {
        super.init()

        const $formula = this.$root.find("#formula")

        this.$on("table:selected", $cell => {
            $formula.text($cell.text())
        })

        this.$on("table:input", $cell => {
            $formula.text($cell.text())
        })
    }

    toHtml() {
        return `
          <div class="info">fx</div>
          <div id="formula" class="input" contenteditable spellcheck="false"></div>`
    }

    onInput(event) {
       const text = event.target.textContent.trim()
       this.$emit("formula:input", text)
    }

    onKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            this.$emit("formula:enter")
        }

    }
}
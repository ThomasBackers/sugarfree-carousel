class Carousel {
    /**
     * @param {HTMLElement} container - HTML carousel container 
     * @param {Object} options - carousel options
     * @param {Number} options.slidesToScroll - amount of slides to scroll
     * @param {Number} options.slidesVisible - amount of slides visible
     */
    constructor(container, options = {}) {
        this.container = container
        this.containerChildren = [...this.container.children]
        this.options = Object.assign({}, {
            sildesAmount: 3,
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        this.tree = this.createHTMLTree(this.options.sildesAmount)
    }

    /**
     * @param {String} typeOfElement - type of HTML tag to add (h1, div, ...)
     * @param {String} className - class string to assign to the HTML tag to add
     * @param {HTMLElement} container - HTML container for the HTML tag to add
     * @returns {HTMLElement} - returns the freshly added HTML tag
     */
    addHTMLTag(typeOfElement, className, container) {
        const element = document.createElement(`${typeOfElement}`)
        if (!container.className) element.setAttribute("class", `${className}`)
        else element.setAttribute(`${container.className}__${className}`)
        container.appendChild(element)
        return container.lastElementChild
    }

    /**
     * @param {Number} amountOfSlides - quantity of slides you'd like to have
     */
    createHTMLTree(amountOfSlides) {
        const carousel = this.addHTMLTag("div", "carousel", this.container)
        const slides = this.addHTMLTag("div", "slides", carousel)
        for (i = 0; i < amountOfSlides; i++) this.addHTMLTag("div", "slide", slides)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Carousel(document.querySelectorAll(".homepage-carousel"))
})
//const controllerButtons = document.querySelectorAll(".header__slider__controller__button")

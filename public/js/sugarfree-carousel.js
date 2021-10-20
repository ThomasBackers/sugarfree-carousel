class Carousel {
    constructor(parentNode, options = {}) {
        this.parentNode = parentNode
        this.options = Object.assign({}, {
            // slides options
            slidesToScroll: 1,
            slidesVisibile: 1,
            // carousel tag options
            carouselTagName: 'div',
            carouselClassName: 'carousel',
            // panorama tag options
            panoramaTagName: 'div',
            panoramaClassName: 'panorama'
        }, options)
        this.carousel = this.setNewNode(
            this.options.carouselTagName,
            this.options.carouselClassName,
            this.parentNode
        )
        this.panorama = this.setNewNode(
            this.options.panoramaTagName,
            this.options.panoramaClassName,
            this.carousel
        )
    }

    setNewNode(tagName, className, receiverNode) {
        const newNode = document.createElement(tagName)
        if (!receiverNode.className) newNode.setAttribute('class', className)
        else newNode.setAttribute('class', `${receiverNode.className}__${className}`)
        receiverNode.appendChild(newNode)
        return newNode
    }
}

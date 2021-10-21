class Carousel {
    /**
     * @param {HTMLElement} parentNode - carousel container
     * @param {Object.<string, number|string>} options - config object
     * @param {Number} options.slidesAmount - amount of slides
     * @param {Number} options.slidesToScroll - amount of slides to move per event
     * @param {Number} options.slidesVisibile - amount of visible slides
     * @param {String} options.carouselTagName - carousel HTML tag type (p, div, section, ...)
     * @param {String} options.carouselClassName - carousel classname
     * @param {String} options.panoramaTagName - carousel panorama HTML tag type (p, div, section, ...)
     * @param {String} options.panoramaClassName - carousel panorama classname
     * @param {String} options.elementsTagName - panorama elements HTML tag type (p, div, section, ...)
     * @param {String} options.elementsClassName - panorama elements classname
     * @param {String} options.contentTagName - elements content HTML tag type (p, div, section, ...)
     * @param {String} options.contentClassName - elements content classname
     */
    constructor(parentNode, options = {}) {
        this.parentNode = parentNode
        this.options = Object.assign({}, {
            // slides options
            slidesAmount: 3,
            slidesToScroll: 1,
            slidesVisibile: 1,
            // carousel tag options
            carouselTagName: 'div',
            carouselClassName: 'carousel',
            // panorama tag options
            panoramaTagName: 'div',
            panoramaClassName: 'panorama',
            // elements tags options
            elementsTagName: 'div',
            elementsClassName: 'elements',
            // content tags options
            contentTagName: 'div',
            contentClassName: 'content'
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
        this.elements = this.setPanoramaElts(
            this.options.elementsTagName,
            this.options.elementsClassName
        )
        this.content = this.setEltsContents(
            this.options.contentTagName,
            this.options.contentClassName
        )
    }

    /**
     * @param {String} tagName - HTML tag type (p, div, section, ...)
     * @param {String} className - classname
     * @param {Object} receiverNode - new node container
     * @returns {HTMLElement} - the freshly created 
     */
    setNewNode(tagName, className, receiverNode) {
        const newNode = document.createElement(tagName)
        if (!receiverNode.className) newNode.setAttribute('class', className)
        else newNode.setAttribute('class', `${receiverNode.className}__${className}`)
        receiverNode.appendChild(newNode)
        return newNode
    }

    /**
     * @param {String} tagName - panorama elements HTML tag type (p, div, section, ...)
     * @param {String} className - panorama elements classname
     * @returns {Array.<HTMLElement>} - array of panorama elements
     */
    setPanoramaElts(tagName, className) {
        const newNodes = []
        for (let i = 0; i < this.options.slidesAmount; i++) 
            newNodes.push(
                this.setNewNode(tagName, className, this.panorama)
            )
        return newNodes
    }

    setEltsContents(tagName, className) {
        const newNodes = []
        for (let element of this.elements)
            newNodes.push(
                this.setNewNode(tagName, className, element)
            )
        return newNodes
    }
}

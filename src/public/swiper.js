export default class Swiper{

    getAllChildren(obj){
        console.log(obj.children[0]);
    }

    constructor({container}){
        const { clientWidth, clientHeight } = typeof container === "string" ? document.querySelector(container): container;
        this.width = clientWidth;
        this.height = clientHeight;

        this.getAllChildren(container);
    }
}
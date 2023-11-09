export class Click{
    constructor(option){
        this.target = option.target
        this.parent = document.querySelector(option.parent)
        this.class = option.class
        this.lock = option.lock
    }
    listenEvent(){
        document.addEventListener('click', this.clickFunc.bind(this))
    }
    clickFunc(e){
       if(e.target.closest(this.target)){
        this.parent.classList.toggle(this.class)
        if(this.lock){
          this.lockBody()  
        }
        
       } 
    }
    lockBody(){
        this.body = document.querySelector('body')
        this.body.classList.toggle('lock')
    }
    
}
import {Directive, Renderer2, ElementRef, HostListener, HostBinding} from '@angular/core'

@Directive({
    selector: 'appDropDown'
})
export class DropDownDirecive{
    @HostBinding('class.open') isOpen:boolean =  false;
    constructor(private renderer: Renderer2, private elementRef: ElementRef){

    }

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}
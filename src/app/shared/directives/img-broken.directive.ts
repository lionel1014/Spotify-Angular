import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError():void{

    const elNativo = this.elHost.nativeElement; //todo el atributo del <img>

    elNativo.src = '../../../assets/imgs/ashara.jpg';

    console.log('🔴 No cargó la imagen ->', this.elHost);
    // console.log(elNativo);
  }

  constructor( private elHost: ElementRef ) { 
    // console.log(this.elHost)
  }

}

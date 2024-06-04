import { Component, OnInit, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('menu', { static: true }) menu!: ElementRef;
  @ViewChild('menuBar', { static: true }) menuBar!: ElementRef;
  @ViewChild('iconMenu', { static: true }) iconMenu!: ElementRef;
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen(this.menuBar.nativeElement, 'click', () => {
      const iconSrc = this.iconMenu.nativeElement.getAttribute('src');
      if (iconSrc === 'assets/img/menu.png') {
        this.renderer.setAttribute(this.iconMenu.nativeElement, 'src', 'assets/img/close.png');
      } else {
        this.renderer.setAttribute(this.iconMenu.nativeElement, 'src', 'assets/img/menu.png');
      }
      this.menu.nativeElement.classList.toggle('active');
    });

    // Fechar o menu ao clicar fora dele
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.nav.nativeElement.contains(event.target) && this.menu.nativeElement.classList.contains('active')) {
        this.renderer.setAttribute(this.iconMenu.nativeElement, 'src', 'assets/img/menu.png');
        this.menu.nativeElement.classList.remove('active');
      }
    });

    // Fechar o menu ao clicar em uma das opções
    const menuItems = this.menu.nativeElement.querySelectorAll('a');
    menuItems.forEach((menuItem: HTMLElement) => {
      this.renderer.listen(menuItem, 'click', () => {
        this.renderer.setAttribute(this.iconMenu.nativeElement, 'src', 'assets/img/menu.png');
        this.menu.nativeElement.classList.remove('active');
      });
    });
  }
}

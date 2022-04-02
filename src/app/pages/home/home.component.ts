import { AfterViewInit, Component, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import * as AOS from 'aos';
import { NeonCardModel } from 'src/app/components/models/neon-card.model';
import { NeonCardComponent } from 'src/app/components/neon-card/neon-card.component';
import { NeonCardService } from 'src/app/components/services/neon-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren(NeonCardComponent) VCNneonCard!: QueryList<NeonCardComponent>
  cards: NeonCardModel[] = []
  constructor(
    private neonCardService: NeonCardService,
    private render: Renderer2
    ) { }
  
  ngOnInit(): void {
    this.getCards()
    AOS.init()
  }

  ngAfterViewInit(): void {
    const VCNcard = this.VCNneonCard.toArray()
    VCNcard.map((el, index) => {
      el.config.index = index
    })
    VCNcard.map((el, index) => {
      
      this.cards.forEach(e => {
        if (e.index === index){
          this.render.addClass(el.ncard.nativeElement, "hover:ring-".concat(e.color))
          console.log(el.titlenc.nativeElement)
          console.log("text-".concat(e.color))
        }
      })
    })

  }

  getCards(){
    this.cards = this.neonCardService.cards
  }
}

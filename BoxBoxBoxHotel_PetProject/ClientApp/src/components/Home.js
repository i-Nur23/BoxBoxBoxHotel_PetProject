import React, { Component } from 'react';
import { cacheWrapper } from 'workbox-core/_private';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { coatOfArms: [] };
    this.carouselItems = this.carouselItems.bind(this);
  }

    componentDidMount() {
        this.populateHome();
    }

  carouselItems(){
    if (this.coatOfArms === undefined || this.coatOfArms.length === 0)
    {
      return null;
    }

    const listItems = this.coatOfArms.map((coat) =>{
      <div class="carousel-item active">
        <img src={coat} class="d-block col-4" alt="..."/>
      </div>    
    })

    return(
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        {listItems}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
      
    );
  }

  render () {
      return (
      <div>
        <center className="d-flex justify-content-center"><h1 className="brand-name">BoxBoxBox&nbsp;</h1><h1 style={{display:'inline-block'}}> - Ваш выбор для размещения</h1></center>
        <div className="my-4 clearfix">
          <div className="position-relative">
            <img src="images/HouseExterier.jpg" alt="наружное фото отеля" className="float-end image-on-homepage"/>
          </div>
	        <h3 className="position-absolute">Наше цель - обеспечение Вашего пребывания в городах наиболее<br className="main-text-br"/>комфортным и уютным с сочетанием новых технологии</h3>
        </div>
        
        <this.carouselItems/>

      </div>
    );
    }

   async populateHome() {
      const response = await fetch('/');
       const data = await response.json();
       console.log(data);
       this.setState({ coatOfArms: data });
   }
}
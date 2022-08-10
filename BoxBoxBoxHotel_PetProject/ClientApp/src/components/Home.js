import React, { Component } from 'react';
import CoatOfArmsSlide from './CoatOfArmsSlide';
import { UncontrolledCarousel } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {cityNames: [] ,coatOfArms: [] };
  }

  componentDidMount() {
      this.populateHome();
  }

  componentDidUpdate() {
    this.populateHome();
}

  static carouselItems(coatOfArms){
    if (coatOfArms === undefined || coatOfArms.length === 0)
    {
      return null;
    }

    let listItems = []

    
    listItems.push(<div class="carousel-item active">
      <a href="/chain">
        <img src={coatOfArms[0]} class="d-block col-4 coat-of-arms" alt="..."/>
      </a>
    </div>)

    for (let i = 1; i < coatOfArms.length; i++){
      listItems.push(<div class="carousel-item">
      <a href="/chain">
      <img src={coatOfArms[i]} class="d-block col-4 coat-of-arms" alt="..."/>
      </a>
    </div>)
    }

    return(
      <div id="multiCarousel" class="carousel slide w-100" style={{background: "rgba(127,127,127,0.1)"}} data-bs-ride="carousel">
      <div class="carousel-inner w-100 d-flex justify-content-center py-1">
        {listItems}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#multiCarousel"  data-bs-slide="prev">
        <span><i class="bi bi-arrow-left" style={{color: 'black'}}></i></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#multiCarousel"  data-bs-slide="next">
      <span><i class="bi bi-arrow-right" style={{color: 'black'}}></i></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
      
    );
  }

  render () {
    //let carousel = Home.carouselItems(this.state.coatOfArms);  
    return (
      <div>
        <center className="d-flex justify-content-center"><h1 className="brand-name">BoxBoxBox&nbsp;</h1><h1 style={{display:'inline-block'}}> - Ваш выбор для размещения</h1></center>
        <div className="my-4 clearfix">
          <div className="position-relative">
            <img src="images/HouseExterier.jpg" alt="наружное фото отеля" className="float-end image-on-homepage rounded-3"/>
          </div>
	        <p><h3 className="position-absolute">Наше цель - обеспечение Вашего пребывания в городах наиболее<br className="main-text-br"/>комфортным и уютным с сочетанием новых технологии</h3></p>
        </div>
        
        <br/>

        <div className="my-4">
          <h3><a id="hotels-chain" href="/chain">Сеть наших отелей</a> насчитывает уже 7 российских городов. Однако мы не собираемся останавливаться<br className="main-text-br"/>
          на этом.<br className="main-text-br"/> 
          Миссия - соединить крупные города России, чтобы даже вдали от дома Вы чувствовали себя как дома</h3>
        </div>

        <CoatOfArmsSlide 
          items= {this.state.coatOfArms}
          cityNames = {this.state.cityNames}>
        </CoatOfArmsSlide>

        <br/>

        <div className="d-flex justify-content-between" style={{margin: "0 -30px"}}>
          <img src="images/hotel-of-future.jpg" alt="наружное фото отеля" className="image-on-homepage rounded-3 h-100" style={{margin: "0 30px"}}/>
	        <div style={{margin: "0 30px"}}>
            <p className="mx-auto"><h3>Мы стараемся использовать передовые нововведения чтобы<br className="main-text-br"/>упростить жизнь: как Вам, так и нам</h3></p>
          </div>
        </div>

        <br/>

      </div>
    );
    }

   async populateHome() {
      const response = await fetch('api', {method: 'GET', headers:{
        'Content-Type': 'application/json'
      }});
      const data = await response.json();
      this.setState({ coatOfArms: data.coatOfArms, cityNames: data.cityNames });
      //console.log(data);
   }
}
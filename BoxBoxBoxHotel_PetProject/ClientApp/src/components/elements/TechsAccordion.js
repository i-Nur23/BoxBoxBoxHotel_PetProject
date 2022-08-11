import React, {Component} from "react";
import {UncontrolledAccordion,
        AccordionItem,
        AccordionHeader,
        AccordionBody,
  } from 'reactstrap';

export class TechsAccordion extends Component{

    static displayName = TechsAccordion.name;

    render(){
        return( 
            <UncontrolledAccordion defaultOpen="0">
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <h5>Автоматическое заселение</h5>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <h5 className="lh-base">
                            Вы зарегестрировались заранее и теперь прибыли в отель? Подойдите к автоматизированному ресепшону и покажате QR-код 
                            или введите персональный код. Кроме того при наличии свободных мест есть возможность забронировать номер "на месте".
                            Если терминал не будет работать, то в любой момент вы сможете в любой момент позвать привычного (живого) администратора.
                        </h5>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        <h5>Туристический стенд</h5>
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <h5 className="lh-base">
                            Данный апппарат может делать практически все и станет вашим надежным помощником. Желаете куда-то сходить?
                            стенд поможет вам найти развлечения и точки питания рядом с отзывами как постояльцев отеля, так взятые из
                            Интернета. Более того есть возможность бронировать места и заказа такси
                        </h5>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        <h5>Роботизированная уборка</h5>
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <h5 className="lh-base">
                            Если вдруг (есть ненулевая вероятность) вы захотите выйти прогуляться из комфортабельного номера, то скорее всего
                            вы захотите вернутся в невероятно чистое место. Для мы ввели роботов-уборщиков, которые уберут ваш номер до блеска.
                            Для их вызова необходимо выбрать пункт "Уборка" на планшете номера и выйти из комнаты закрыв дверь снаружи.
                        </h5>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">
                        <h5>Ресторан без официантов</h5>
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                        <h5 className="lh-base">
                            В данном ресторане вы сможете сделать заказ, воспользовавшись меню в планшете, после чего вам принесут 
                            заказ с помощью мини-квадракоптера. В случае непонятной ситуации, можете вызвать официанта. Есть возможность
                            делать заказ с комнатного планшета за 10 минут до прихода.  
                        </h5>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">
                        <h5>"Умная" система безопасности</h5>
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                        <h5 className="lh-base">
                            Безопасность - одно из важнейших деталей для комфортной жизни клиентов. Наша система безопасности позволит вам
                            наслаждаться провождением времени в нашем отеле не беспокоясь о прочих вещах. Система помогает распозновать
                            опасность и подают сигнал об этом в охрану.
                        </h5>
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        );
    }
}
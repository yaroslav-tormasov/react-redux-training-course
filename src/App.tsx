import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/Accordion/UnControlledAccordion";
import UnControlledRating from "./components/Rating/UnControlledRating";

// function declaration
function App(props: any) {
    // полезное что-то

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwicthOn] = useState<boolean>(false)

    // обязана  вернуть jsx
    return (
        <div className={"App"}>
            <OnOff on={true} onChange={(on) => { setSwicthOn }}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => { setAccordionCollapsed(!accordionCollapsed) } }/>
            <UnControlledAccordion titleValue={"Menu"} collapsed={true}/>
            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;

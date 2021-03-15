import React from 'react';
import './App.css';

// function declaration
function App() {
    // полезное что-то

    // обязана  вернуть jsx
    return (
        <div>
            <Title/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function Star() {
    return <div>star</div>
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion() {
    return <div>
        <AccordionTitle/>
        <AccordionBody/>
    </div>
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return <h3>Меню</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

function Title() {
    return <>"This is APP component"</>
}


export default App;

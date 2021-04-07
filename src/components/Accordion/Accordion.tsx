import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}

function Accordion(props: AccordionPropsType) {
        return <div>
            <AccordionTitle title={props.titleValue}
            onChange={props.onChange}
            />
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

function AccordionBody(props: AccordionPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value) } } key={index}>{i.title}</li>)}
    </ul>
}

export default Accordion;
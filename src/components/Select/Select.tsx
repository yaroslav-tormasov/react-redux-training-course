import React from "react";
import {RatingPropsType} from "../Rating/Rating";

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export function Select(props: RaingPropsType) {
    return (
    <div>
       <div>{}</div>
        {props.items.map(i => <div>{i.title}</div>)}
    </div>
)
}

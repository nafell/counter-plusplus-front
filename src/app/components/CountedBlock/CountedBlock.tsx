'use client'

import { Input, Textarea } from "@nextui-org/input"
import { useEffect, useState } from "react"

export function CountedBlock() {
    const [title, setTitle] = useState("")
    const [BodyText, setBodyText] = useState("")
    const [maxCount, setMaxCount] = useState(100)
    
    const [count, setCount] = useState(0)


    const onBodyTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newText = event.target.value
        setBodyText(newText)
        setCount(newText.length)
    }

    return (<>
    <Input></Input>
    ({maxCount - count} left) {count}/{maxCount}
    <Textarea onChange={onBodyTextChange}></Textarea>
    </>)
}
import React from 'react'
import CardedRow from '../../common/CardedRow'
import {LinkButton} from '../../common/button/CustomButton'
import styled from 'styled-components';
export default function clubs({content}) {
    let items = content.items.map(item=> {
        return {
            ...item,
            children : <LinkButton  href={item.url}>Visit site</LinkButton>
        }
    })
    return (
        <CardedRow
            id="clubs"
            header={content.header}
            text={content.text}
            items={items}
        />
    )
}

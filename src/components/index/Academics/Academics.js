import React from "react"
import CardedRow from '../../common/CardedRow'
export default function Academics({content}) {
  return (
    <CardedRow
      id="academics"
      header={content.header}
      text={content.description}
      items={content.items}
    />
  )
}

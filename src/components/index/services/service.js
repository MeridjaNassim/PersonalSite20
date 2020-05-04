import React from "react"
import Button from "../../common/button/CustomButton"
import ConsumerContext from "../../../context/Context"
import Card from "../../common/Card"
import { navigate } from "gatsby"
export default function service({ content }) {
  return (
    <ConsumerContext>
      {({ data }) => {
        return (
          <Card
            theme={data.theme}
            icon={require(`../../../images/icons/${content.image}`)}
            title={content.serviceTitle}
            text={content.serviceContent}
            alt={content.alt}
          >
            <Button
              onClick={e => {
                e.preventDefault()
                navigate(content.route)
              }}
            >
              See more
            </Button>
          </Card>
        )
      }}
    </ConsumerContext>
  )
}

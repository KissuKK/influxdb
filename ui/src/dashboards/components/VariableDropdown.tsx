// Libraries
import React, {PureComponent} from 'react'
import {Dropdown} from 'src/clockface'

// Types
import {VariableValuesByID} from 'src/variables/types'

interface Props {
  name: string
  values: any //todo
}

class VariableDropdown extends PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.values)
    return <Dropdown>{this.dropdownItems}</Dropdown>
  }

  private get dropdownItems(): JSX.Element[] {
    const {values} = this.props
    console.log(values)
    return Object.keys(values).map(v => {
      return <Dropdown.Item key={v}>{v}</Dropdown.Item>
    })
  }
}

export default VariableDropdown

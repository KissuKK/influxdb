// Libraries
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

// Components
import VariableDropdown from 'src/dashboards/components/VariableDropdown'

// Types
import {AppState} from 'src/types/v2'
import {VariablesState} from 'src/variables/reducers'

interface OwnProps {
  dashboardID: string
}

interface StateProps {
  variables: VariablesState
}

class VariableDropdowns extends PureComponent<StateProps & OwnProps> {
  render() {
    const {variables, values} = this.props.variables
    const {dashboardID} = this.props

    return (
      <div style={{display: 'flex'}}>
        {Object.keys(variables).map(variableID => {
          console.log(values[dashboardID].values)
          return (
            <VariableDropdown
              key={variableID}
              name={variables[variableID].variable.name}
              values={values[dashboardID].values[variableID].values}
            />
          )
        })}
      </div>
    )
  }
}

const mstp = (state: AppState): StateProps => {
  const {variables} = state

  return {variables}
}

export default connect(mstp)(VariableDropdowns)

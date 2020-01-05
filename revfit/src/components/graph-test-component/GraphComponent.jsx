import React from 'react'
import { Chart } from 'react-charts'
import { Grid } from '@material-ui/core'

//export const ReimbursementRowComponent: React.FC<IReimbursementRowProps> = (props) => {
export default function Graph(props) {

  const testData = props.userData

  const title = props.title

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: testData
      }
    ],
    []
  )


  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{

        width: '400px',
        height: '300px'
      }}
    >
      <Grid>{title}</Grid>
      <Chart data={data} axes={axes} />
    </div>
  );
}

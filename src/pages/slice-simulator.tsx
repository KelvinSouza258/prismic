import { SliceZone } from '@prismicio/react'
import { SliceSimulator } from '@prismicio/slice-simulator-react'

import { components } from '../slices'

function SliceSimulatorPage() {
  return (
    <SliceSimulator
      state={{}}
      // eslint-disable-next-line react/no-unstable-nested-components
      sliceZone={({ slices }) => (
        <SliceZone components={components} slices={slices} />
      )}
    />
  )
}

export default SliceSimulatorPage

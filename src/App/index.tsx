import AppBarTop from './AppBarTop'
import { Counter } from '../redux/features/counter/Counter'

export const Index = (): JSX.Element => {
  return (
    <div>
      <AppBarTop />
      <Counter />
    </div>
  )
}

export default Index

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import '../lib/variables.scss'

const HELLO_WORLD = gql`
  {
    hello(name: "Rob")
  }
`

export default () => (
  <Query query={HELLO_WORLD}>
    {({ loading, error, data }) => {
      if (loading) return <p>not done yet</p>
      if (error) return <p>shit's broke</p>

      return (
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>{data.hello}</h1>
              <h2 className='subtitle'>Primary subtitle</h2>
            </div>
          </div>
        </section>
      )
    }}
  </Query>
)

import React from 'react';
import Loader from '../../Loader'

const DataListsWrapper = (View,getData) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
              data: null
            }
          }
         
          componentDidMount() {
            getData()
            .then(data => {
              this.setState({
               data: data
              })
            })
          }
        render() {
            const {data} = this.state;
            if(!data) {
               return <Loader/>
            }
            return <View {...this.props} data={data}/>
        }
    }
}

export default DataListsWrapper;
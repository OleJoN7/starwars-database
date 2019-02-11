import React from 'react';
import Loader from '../../Loader'

const DataDetailsWrapper = (View,getData,getImageUrl) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
              item: null,
              image:null,
              loading:false
            }
          }
          componentDidMount() {
            this.updateItem()
          }
        
          componentDidUpdate(prevProps) {
            if(this.props.itemId !== prevProps.itemId) {
              this.updateItem();
            }
          }
        
          updateItem = () => {
            const {itemId} = this.props;
            if(!itemId) {
              return;
            }
            this.setState(({loading}) => {
              return {
                loading:!loading
              }
            })
            getData(itemId)
            .then(itemData => {
              this.setState(({loading}) => {
                return {
                  item:itemData,
                  image:getImageUrl(itemData),
                  loading:!loading
                } 
              })  
            })
          }
        render() {
            const {item,image,loading} = this.state;
            if(!item) {
              return (
                !this.state.loading 
                ? <span>Select a person from list</span> 
                : <Loader/>
              ) 
            } 
            return <View {...this.props} item={item} image={image} loading={loading}/>
        }
    }
}

export default DataDetailsWrapper;
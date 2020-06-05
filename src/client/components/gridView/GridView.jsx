import React from 'react';
// import { Row, Col } from 'antd';

class GridView extends React.Component {

    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div>
                {
                    data && data.map((item, index) => {

                        return (
                            item.offer && item.flippItems &&
                            <div key={index}>
                                <p>CHECKOUT51 OFFER: </p>{item.offer.offer_name}
                                <h3>FLIPP OFFERs: </h3>
                                {item.flippItems.map(flipp => {
                                        return(
                                            <p>{flipp.name}</p>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                {/* <Row gutter={16}>

                </Row> */}

            </div>
        )
    }
}

export default GridView;

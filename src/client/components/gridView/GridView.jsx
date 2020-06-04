import React from 'react';
import { Row, Col } from 'antd';

class GridView extends React.Component {

    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div>
                <Row gutter={16}>
                    {
                        // data && data.map((item, index) => {
                            
                        //     return(
                        //         item.name &&
                        //         <Col span={6} key={index}>
                        //             {item.name}
                        //         </Col>
                        //     )
                        // })
                    }
                </Row>

            </div>
        )
    }
}

export default GridView;

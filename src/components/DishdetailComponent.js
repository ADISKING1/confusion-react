import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(selectedDish) {
        if(selectedDish != null) {
            return(
                <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" object src={this.props.selectedDish.image} alt={selectedDish.name}/>
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
    
}
export default Dishdetail;
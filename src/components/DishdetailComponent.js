import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish != null) {

            const Comments = dish.comments.map((comment) => {
                return (
                    <li>{comment.comment}<br/>
                    <br/>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}<br/><br/>
                    </li>
                );
            });
            return(
                <div className="row" key={dish.id} >
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul class="list-inline">{Comments}</ul>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }


    render () {
        return (<div>
                {this.renderDish(this.props.selectedDish)}
                </div>
        );
    }
    
}
export default Dishdetail;
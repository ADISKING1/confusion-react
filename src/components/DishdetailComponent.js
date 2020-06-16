import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {

    console.log('Dishdetail Component Didrender');

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
            <div keys={dish.id} className="row">
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
                    <ul className="list-inline">{Comments}</ul>
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

const Dishdetail = (props) => {
    return (
    <div className="container">
        <RenderDish dish={props.dish}/>
    </div>
    );
}

export default Dishdetail;
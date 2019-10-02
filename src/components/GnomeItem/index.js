import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// custom css
import './index.css'

const GnomeItem = (props) => {
    
    const getProfessions = props => {
        const gnomeProfs = props.gnome.professions
        const profLength = gnomeProfs.length;
        if (profLength === 0) return 'None'
        return gnomeProfs.map((prof, i) => {
            return (
                <span> {prof}
                    { profLength !== i + 1 ? ', ' : null}
                </span>
            )
        })
    }
    return (
        <Link to={`/detail/${props.gnome.id}`}>
            <Card>
            <CardImg top width="100%" src={props.gnome.thumbnail} alt="Card image cap" />
            <CardBody>
            <CardTitle>{props.gnome.name}</CardTitle>
            <CardSubtitle>Age: 19</CardSubtitle>
            <CardText>Professions: {getProfessions(props)} </CardText>
            </CardBody>
        </Card>
        </Link>
    );
};

export default GnomeItem;
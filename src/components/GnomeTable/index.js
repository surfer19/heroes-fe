import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';

const GnomeTable = (props) => {

    const getIconByKey = (icons, key) => {
        return <i className={`fa ${icons[key]}`}></i>
    }
    
    const generateRows = (gnome, icons, suffixes) => {
        let rows = []
        {Object.entries(gnome).forEach(([key, prop]) => {
            // some properties wont be show
            if (icons[key] === undefined) {
                return;
            }
            // column with property 
            let propTd;
            // array property
            if (Array.isArray(prop)) {
                let spans = prop.map((propItem, id) => {
                    return (key === 'friends')
                        // generate link
                        ? <Link to={`/detail/5`} key={id}>{propItem} </Link>
                        // generate string
                        : <span key={id}>{propItem} </span>
                })
                // prop array is empty
                if (!spans.length) {
                    spans = <span>Gnome has no {key}</span>
                }
                propTd = <td>{spans}</td>
            }
            // string/number property
            else {
                propTd = <td>{prop} {suffixes[key]}</td>
            }
            // push final row to array
            rows.push(
                <tr key={key}>
                    <td className="ico">
                        {getIconByKey(icons, key)}
                    </td>
                    {propTd}
                </tr>
            )
        })}
        return rows
    }

    const gnome = props.gnome;
    const icons = props.colIcons;
    const suffixes = props.suffixMessages;

    return (
        <Table borderless>
            <tbody>
                {generateRows(gnome, icons, suffixes)}
            </tbody>
        </Table>
    );
};

export default GnomeTable;
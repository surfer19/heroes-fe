import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';

const GnomeTable = (props) => {

    const getIconByKey = (icons, key) => {
        return <i className={`fa ${icons[key]}`}></i>
    }
    /*
     * TODO: split function to components GnomeTableRow and GnomeTableRow
     */
    const generateRows = () => {
        const { gnome, colIcons: icons, suffixMessages: suffixes, gnomeFriends } = props
        
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
                        ? <Link to={`/detail/${gnomeFriends[propItem]}`} key={id}>{propItem} </Link>
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
    
    return (        
        <Table borderless>
            <tbody>
                {generateRows(props)}
            </tbody>
        </Table>
    );
};

export default GnomeTable;
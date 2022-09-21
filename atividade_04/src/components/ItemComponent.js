import { Fragment } from "react"

const ItemComponent = (props) => {
    return (
        <Fragment>
            <div style={{ paddingTop: '30px' }}>
                <b>{props.nome}</b><br />
                {props.descricao}<br />
                <p><a href={props.html}> Acessar Repositório </a></p> 
            </div>
            <br></br>
        </Fragment>
    )
}

export default ItemComponent;
import React, { Fragment, useEffect, useState } from 'react';
import ItemComponent from './ItemComponent';


const Componentes = () => {

    const [repos, setRepos] = useState();

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then((res) => res.json())
            .then((data) => setRepos(data));
    }, []);

    return <Fragment>
        <div style={{ paddingLeft: '60px', paddingTop: '30px' }}>
            <label>
                <b style={{ fontSize: '50px' }}>Lista de Repositórios</b>
            </label>
            {repos?.map((item) => (
                <ItemComponent nome={item.name} descricao={item.description} html={item.html_url} />
            ))}
        </div>
    </Fragment>
}

export default Componentes;
import React from 'react'

function PokeTypes(props) {
    const types = props.typeList;
    const typeList = types.map((type) => <li detailsPage={type.url}>{type.name}</li>);
    const typeListWithLinks = typeList.map((element) => )

    return (
        <div>
            <ol>
                {typeList}
            </ol>
        </div>
    )
}

export default PokeTypes;

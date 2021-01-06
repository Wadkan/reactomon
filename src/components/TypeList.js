function PokeTypes(props) {
    const types = props.typeList;
    const typeList = types.map((type) => <li detailsPage={type.url}>{type.name}</li>);


    return (
        <div>
            <ol>
                {typeList}
            </ol>
        </div>
    )
}

export default PokeTypes;

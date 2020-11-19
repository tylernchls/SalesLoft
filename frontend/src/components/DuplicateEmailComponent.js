const DuplicateEmailComponent = ({data}) => {    
    return (
        <div className="column-container">     
            <div>    
                <p>Possible Duplicate: {data.target}</p>
                <p>Rating: {data.rating * 100} %</p>
            </div>      
        </div>
    )
}

export default DuplicateEmailComponent
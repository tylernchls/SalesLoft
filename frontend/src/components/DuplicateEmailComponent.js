const DuplicateEmailComponent = ({data}) => {    
    return (
        <div className="column-container">     
            <div>    
                <p>Email: {data.target}</p>
                <p>Result: {data.rating}</p>
            </div>      
        </div>
    )
}

export default DuplicateEmailComponent
function SalesList({sales}){
    return (
        <ul>
            {sales.map((sale, index) => (
                <li key={index}>{sale}</li>
            ))}
        </ul>
    );
}
export default SalesList;
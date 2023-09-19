import numeral from "numeral";

const formatNumber = '0,0.00'
const Table = (message: any) => {
    return [
        message?.type === 'json' &&
        <table className='table-chat-bot'>
            <tr>
                <th className='table-chat-bot'>ID</th>
                <th className='table-chat-bot'>Vendor Name</th>
                <th className='table-chat-bot'>Spend</th>
            </tr>
            {message?.content.filter((n: any) => n.id !== 0).map((item: any, index: number) => {
                return (
                    <tr key={index}>
                        <td className='table-chat-bot'>{item?.id !== -1 && item.id}</td>
                        <td className='table-chat-bot'>{item?.vendor_name}</td>
                        <td className='table-chat-bot'>{numeral(item?.total_spend).format(formatNumber)}</td>
                    </tr>
                )
            })}
        </table>
    ]
}

export default Table;

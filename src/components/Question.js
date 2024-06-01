export default function Question({ value, handleClick }) {
    return (
        <div className="question" onClick={e => {
            handleClick(value)
        }}>{value}</div>
    );
}
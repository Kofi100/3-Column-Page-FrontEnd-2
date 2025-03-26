import './learnMore.css'
//needed to cause variables to be easily detected.
//the idea is to manually set the bgColors of the button in the classes depending on where you've placed them.
interface Props{
    color: string;
}

function LearnMoreButtonComponent({color}:Props) {
    return (
        <>
        <button className={`${color}`}>Learn More</button>
        </>
    )
}
export default LearnMoreButtonComponent
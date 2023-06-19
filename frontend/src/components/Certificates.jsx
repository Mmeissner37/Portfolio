import DCC from '../assets/DCC_Certificate.png'


const Certficates = () => {
    return ( 
        <div className="certicates">
            <div className='journey-header'>
                <h2>Current Cerficiates</h2><br></br>
            </div>
            <img src={DCC} height='200' width='275' alt="DCC Certficate" />
        </div>
     );
}
 
export default Certficates;
import {clients} from '../constans';
import styles from '../style'
const Clients = () => 
     (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client) =>(
                    <div key={client.id} className={`ex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
                        <img src={client.logo} alt="" className="sm:w[192px] w-[100px] obect-contain hover:opacity-50"/>
                    </div>
                ))}
            </div>
        </section>
    )


export default Clients

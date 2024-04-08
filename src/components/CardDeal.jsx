import { card } from "../assets";
import styles,{layout} from "../style";
import Button from "./Button";
const CardDeal = () =>(
    <section className={layout.section}>
         <div className={layout.sectionInfo}>
           <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
           <p className={`${styles.paragraph} max-w[470xp] mt-5`}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit reprehenderit dolorum sapiente adipisci iste, perferendis nulla reiciendis? Eum minus inventore consequuntur temporibus. Blanditiis, reprehenderit debitis enim voluptatibus itaque commodi!
           </p>
           <Button styles="mt-10"/>

         </div>
<div className={layout.sectionImg}>
  <img src={card} alt="card" className="w-[100%] h-[100%]" />
</div>

    </section>
  )


export default CardDeal
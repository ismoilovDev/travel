import { DescriptionBox } from './styled';
import './style.scss';

function Description({ data }) {
   return (
      <>
         {
            data && 
            <DescriptionBox>
               <div className="descr_item">
                  <h3>Description</h3>
                  <p>
                     {data.descr}
                  </p>
               </div>
               <div className="descr_item">
                  <h3>Construction and Architecture</h3>
                  <p>
                     {data.construction}
                  </p>
               </div>
               <div className="descr_item">
                  <h3>History</h3>
                  <p>
                     {data.history}
                  </p>
               </div>
            </DescriptionBox>
         }
      
      </>
   )
}

export default Description
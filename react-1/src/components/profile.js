import { Avatar } from "./avatar";
import { Introduction } from "./intro";
import { Name } from "./userName";
export function Profile(){
    return(
        <div className="profile">
            <Avatar  />
            <Name />
            <Introduction />
        </div>
        
    )
}
  
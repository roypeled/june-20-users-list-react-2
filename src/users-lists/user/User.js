import './User.scss';
import { ToggleButton } from '../../ToggleButton';
import { Popup } from '../../popup/Popup';
import { Title } from '../../Title';

export function User(props) {

    return <div className="user-component">
        <h2>{ props.name }</h2>
        
        <ToggleButton showText="Show details" hideText="Hide details">
            <strong>{ props.email }</strong>
            <div>
                {
                    props.address.city
                }
            </div>

            <Popup text="Company">
                <h2>{ props.name }</h2>
                <Title text="company"></Title>
                <h3>{ props.companyName }</h3>
            </Popup>
        </ToggleButton>
    </div>
}
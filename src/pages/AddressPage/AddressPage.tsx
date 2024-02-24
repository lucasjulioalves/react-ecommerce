import { useEffect, useState } from "react";
import "./AddressPage.css";
import { RootState } from "../../store/store";
import User from "../../model/User";
import { useSelector } from "react-redux";
import { AddressService } from "../../service/Address.service";
import {Address} from "../../model/Address";

function AddressPage() {

    const [addresses, setAddresses] = useState<Address[]>();
    const loggedUser : User = useSelector((state: RootState) => state.user.value);
    const addressService = new AddressService();

    useEffect(() => {
        if(!addresses && !isNaN(loggedUser.id)) {
            addressService.findAllById(loggedUser.id).then((res) => {
                setAddresses(res)
            })
        }
    }, [addresses])


    return (<div>
        {addresses?.map((el) => {
            return (
                <div className="address-item" key={el.id}>
                    <b>{el.name}</b>
                    <p>{el.street}</p>
                    {el.complement.length > 0 ? <p>{el.complement}</p> : null}
                    <p>{el.postalCode} - {el.city}, {el.province}</p>
                    <div className="address-item-button">
                        <button>Edit</button>
                    </div>
                    
                </div>
                
                )
        })}

    </div>)
}

export default AddressPage;
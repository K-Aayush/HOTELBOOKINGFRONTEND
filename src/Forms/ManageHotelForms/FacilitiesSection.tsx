import { hotelFacilities } from "../../config/HotelOptions";
import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return <div>FacilitiesSection</div>;
};

export default FacilitiesSection;

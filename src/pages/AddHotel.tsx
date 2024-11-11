import { useMutation } from "react-query";
import ManageHotelForm from "../Forms/ManageHotelForms/ManageHotelForm";
import { useAppContext } from "../context/AppContext";

const AddHotel = () => {
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });
  return <ManageHotelForm />;
};

export default AddHotel;

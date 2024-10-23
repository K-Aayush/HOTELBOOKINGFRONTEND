import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="flex w-full gap-4 bg-gray-300 py-8 px-4 rounded-md">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Adult
          <input
            type="number"
            min={1}
            className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-500">{errors.adultCount?.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Children
          <input
            type="number"
            min={1}
            className="border border-gray-300 rounded w-full py-1 px-2 font-normal"
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount?.message && (
            <span className="text-red-500">{errors.childCount?.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;

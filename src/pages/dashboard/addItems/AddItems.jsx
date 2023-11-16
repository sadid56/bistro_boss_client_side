import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <SectionTitle heading={"Whats new?"} title={"add item"} />

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex gap-6 items-center">
            <div className="form-control">
              <label className="label">
                <span>Category *</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full ">
                <option disabled selected>
                  Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"desserts"}>Desserts</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Price *</span>
              </label>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="" className="label">
              <span>Details *</span>
            </label>
            <textarea
              required
              {...register("details")}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"></textarea>
          </div> 
          <input {...register("image")} type="file" className="file-input w-full max-w-xs my-5" /> <br />
          <button type="submit" className="btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateMenu = () => {
  const { register, handleSubmit } = useForm();
  const item = useLoaderData();
  const navigate = useNavigate();
  //   console.log(item);
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const menuItem = {
      name: item?.name,
      category: item?.category,
      price: parseFloat(item?.price),
      recipe: item?.details,
    };
    const res = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
    console.log(res.data);
    if (res.data.acknowledged) {
      alert("update success");
      navigate(-1);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Update Item</title>
      </Helmet>
      <SectionTitle title={"Update Item"} />
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              {...register("name")}
              defaultValue={item?.name}
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
                defaultValue={item?.category}
                className="select select-bordered w-full ">
                <option disabled selected>
                  Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Desserts</option>
                <option value={"offered"}>Drinks</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Price *</span>
              </label>
              <input
                {...register("price")}
                defaultValue={item?.price}
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
              defaultValue={item?.recipe}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"></textarea>
          </div>

          <div className="flex justify-center mt-5">
            <button type="submit" className="btn">
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMenu;

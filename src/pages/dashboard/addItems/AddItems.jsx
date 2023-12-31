import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
  // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
  // console.log(image_hosting_key, 'hj');
  const onSubmit = async (data) => {
    // console.log(data);
    //img hosting in imgBB
    const imageFile = { image: data?.image[0] };
    const res = await axiosPublic.post(
      "https://api.imgbb.com/1/upload?key=1e3d9b9de0fac648ff4fe1ebb1bc6ff4",
      imageFile,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );
    // console.log(res.data);
    //now save menu item in server
    if(res.data.success){
      const menuItem = {
        name: data?.name,
        category: data?.category,
        price: parseFloat(data?.price),
        image: res.data.data.display_url,
        recipe: data?.details,
      }
      axiosSecure.post('/menu', menuItem)
      .then(res => {
        // console.log(res.data);
        if(res.data.acknowledged){
          alert('Mneu added success !')
        }
      })
    }
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
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs my-5"
          />{" "}
          <br />
          <button type="submit" className="btn">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

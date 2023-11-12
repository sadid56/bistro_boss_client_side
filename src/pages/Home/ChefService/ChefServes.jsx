import ChefImg from '../../../assets/home/chef-service.jpg'

const ChefServic = () => {
    return ( 
        <div className="hero h-[500px] bg-fixed mb-10" style={{backgroundImage: `url(${ChefImg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-4xl mx-auto bg-white py-10 rounded-md">
      <h1 className="mb-5 text-5xl font-sans text-black uppercase">Bistro Boss</h1>
      <p className="mb-5 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
     );
}
 
export default ChefServic;
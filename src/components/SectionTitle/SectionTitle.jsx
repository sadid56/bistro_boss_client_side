/* eslint-disable react/prop-types */
const SectionTitle = ({heading, title}) => {
    return ( 
        <div className="w-4/12 mx-auto text-center mt-10">
            <p className="text-[#D99904] text-center border-b-2  pb-2">---{heading}---</p>
            <h3 className="text-4xl mb-10 font-semibold uppercase border-b-2 pb-2">{title}</h3>
        </div>
     );
}
 
export default SectionTitle;
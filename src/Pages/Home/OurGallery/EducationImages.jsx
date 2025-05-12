import img1 from "../../../assets/Gellary/gallery-1.jpg";
import img2 from "../../../assets/Gellary/gallery-2.jpg";
import img3 from "../../../assets/Gellary/gallery-3.jpg";
import img4 from "../../../assets/Gellary/gallery-4.jpg";
import img5 from "../../../assets/Gellary/gallery-5.jpg";


const EducationImages = () => {
  return (
    <div className="flex justify-center items-center">
      <figure className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-2 lg:gap-1">
        <img src={img1} className="w-96 h-96 object-cover" alt="gallery-Image" />
        <img src={img2} className="w-96 h-96 object-cover" alt="gallery-Image" />
        <img src={img3} className="w-96 h-96 object-cover" alt="gallery-Image" />
        <img src={img4} className="w-96 h-96 object-cover" alt="gallery-Image" />
        <img src={img5} className="w-96 h-96 object-cover" alt="gallery-Image" />
       
      </figure>
    </div>
  )
}

export default EducationImages